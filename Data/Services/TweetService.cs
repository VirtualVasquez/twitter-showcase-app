using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RestSharp;
using RestSharp.Authenticators;

namespace Tweets.Data
{
    public class TweetService : ITweetService
    {
        private readonly IConfiguration _configuration;

        public TweetService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<List<Tweet>> GetTenUserQueriedTweets(string user_query)
        {
            RestClient client = new RestClient("https://api.twitter.com/2/tweets");

            RestRequest request = new RestRequest($"/search/recent?query={user_query}&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            string bearerToken = _configuration["TwitterBearerToken"];

            request.AddParameter("Authorization", string.Format("Bearer " + bearerToken), ParameterType.HttpHeader);

            var response = await client.GetAsync<TwitterResponse>(request);

            if (response.includes != null && response.includes.Count > 0 && response.includes[0].users != null && response.data != null)
            {
                int loopCount = Math.Min(response.includes[0].users.Count, 10);
                for (int i = 0; i < loopCount && i < response.data.Count; i++)
                {
                    response.data[i].name = response.includes[0].users[i].name;
                    response.data[i].profile_image_url = response.includes[0].users[i].profile_image_url;
                    response.data[i].username = response.includes[0].users[i].username;
                }
            }

            return response.data;
        }

        public async Task<List<Tweet>> GetOneAuthorsTweets(string author_id)
        {
            RestClient client = new RestClient("https://api.twitter.com/2/users");

            RestRequest request = new RestRequest($"/{author_id}/tweets?expansions=author_id&tweet.fields=public_metrics,created_at&user.fields=profile_image_url", DataFormat.Json);

            string bearerToken = _configuration["TwitterBearerToken"];

            request.AddParameter("Authorization", string.Format("Bearer " + bearerToken), ParameterType.HttpHeader);

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