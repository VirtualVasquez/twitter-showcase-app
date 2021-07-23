using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;
using RestSharp.Authenticators;

namespace Tweets.Data
{
    public class TweetService : ITweetService
    {
        public Tweet GetOneRandomTweetByUserId(int author_id)
        {
            throw new System.NotImplementedException();
        }
        public List<Tweet> SearchForTenTweets(string searchQuery)
        {
            throw new System.NotImplementedException();
        }
        public async Task<List<Includes>> GetTenHardCodedUsers()
        {
            RestClient client = new RestClient("https://api.twitter.com/2/tweets");

            RestRequest request = new RestRequest("/search/recent?query=megaman&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            request.AddParameter("Authorization", string.Format("Bearer " + "AAAAAAAAAAAAAAAAAAAAAKTwRAEAAAAAsF8lPADSnP0qNJCbVlLcHyO61V8%3DtcHGgFrvq3lnihJmBCvqCCSlgVOQCp5Qx5XGt3GZzhuGorJSnd"), ParameterType.HttpHeader);

            // JSON: {"data": [ {}, {} ] }
            var response = await client.GetAsync<TwitterResponse>(request);

            return response.includes;
        }
        public async Task<TwitterResponse> GetJSON()
        {
            RestClient client = new RestClient("https://api.twitter.com/2/tweets");

            RestRequest request = new RestRequest("/search/recent?query=megaman&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            request.AddParameter("Authorization", string.Format("Bearer " + "AAAAAAAAAAAAAAAAAAAAAKTwRAEAAAAAsF8lPADSnP0qNJCbVlLcHyO61V8%3DtcHGgFrvq3lnihJmBCvqCCSlgVOQCp5Qx5XGt3GZzhuGorJSnd"), ParameterType.HttpHeader);

            // JSON: {"data": [ {}, {} ] }
            var response = await client.GetAsync<TwitterResponse>(request);
            return response;
        }
        public async Task<List<Tweet>> GetTenHardCodedTweets()
        {

            RestClient client = new RestClient("https://api.twitter.com/2/tweets");

            RestRequest request = new RestRequest("/search/recent?query=megaman&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            request.AddParameter("Authorization", string.Format("Bearer " + "AAAAAAAAAAAAAAAAAAAAAKTwRAEAAAAAsF8lPADSnP0qNJCbVlLcHyO61V8%3DtcHGgFrvq3lnihJmBCvqCCSlgVOQCp5Qx5XGt3GZzhuGorJSnd"), ParameterType.HttpHeader);

            // JSON: {"data": [ {}, {} ] }
            var response = await client.GetAsync<TwitterResponse>(request);

            foreach (var tweet in response.data)
            {
            }

            for (int i = 0; i < 10; i++)
            {
                response.data[i].name = response.includes[0].users[i].name;
                response.data[i].profile_image_url = response.includes[0].users[i].profile_image_url;
                response.data[i].username = response.includes[0].users[i].username;
            }


            return response.data; 
        }


    }
}