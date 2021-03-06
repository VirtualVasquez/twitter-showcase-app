using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using RestSharp.Authenticators;

namespace Tweets.Data
{
    public class TweetService : ITweetService
    {
        public async Task<List<Tweet>> GetTenUserQueriedTweets(string user_query)
        {
            RestClient client = new RestClient("https://api.twitter.com/2/tweets");

            RestRequest request = new RestRequest($"/search/recent?query={user_query}&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            request.AddParameter("Authorization", string.Format("Bearer " + "AAAAAAAAAAAAAAAAAAAAAKTwRAEAAAAAsF8lPADSnP0qNJCbVlLcHyO61V8%3DtcHGgFrvq3lnihJmBCvqCCSlgVOQCp5Qx5XGt3GZzhuGorJSnd"), ParameterType.HttpHeader);

            var response = await client.GetAsync<TwitterResponse>(request);

            for (int i = 0; i < 10; i++)
            {
                response.data[i].name = response.includes[0].users[i].name;
                response.data[i].profile_image_url = response.includes[0].users[i].profile_image_url;
                response.data[i].username = response.includes[0].users[i].username;
            }

            return response.data;
        }

        public async Task<List<Tweet>> GetOneAuthorsTweets(string author_id)
        {
            RestClient client = new RestClient("https://api.twitter.com/2/users");

            RestRequest request = new RestRequest($"/{author_id}/tweets?expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url", DataFormat.Json);

            request.AddParameter("Authorization", string.Format("Bearer " + "AAAAAAAAAAAAAAAAAAAAAKTwRAEAAAAAsF8lPADSnP0qNJCbVlLcHyO61V8%3DtcHGgFrvq3lnihJmBCvqCCSlgVOQCp5Qx5XGt3GZzhuGorJSnd"), ParameterType.HttpHeader);

            var response = await client.GetAsync<TwitterResponse>(request);
            
            for (int i = 0; i < 10; i++)
            {
                response.data[i].name = response.includes[0].users[0].name;
                response.data[i].profile_image_url = response.includes[0].users[0].profile_image_url;
                response.data[i].username = response.includes[0].users[0].username;
            }

            return response.data;
        }
    }
}