using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RestSharp;
using RestSharp.Authenticators;

namespace Tweets.Data
{
    public class TweetService : ITweetService
    {
        
        // string url = "https://api.twitter.com/2";
        // string client_id = "lwiEvOdrXU76QrNew4jLRsQ84";
        // string client_secret = "1eAsiNdwzpIryCr7cb6zlRqb4MKEY9SzX2qyvtodqD5Sr1RORO";
        // var restclient = new RestClient(url);
        // RestRequest request = new RestRequest("request/oauth") {Method = Method.POST};
        // request.AddHeader("Accept", "application/json");
        // request.AddHeader("Content-Type", "application/x-ww-form-urlencoded");
        // request.AddParameter("client_id", client_id);
        // request.AddParameter("client_secret", client_secret);
        // request.AddParameter("grant_type", "client_credentials");
        // var tResponse = restclient.Execute(request);
        // var responseJson = tResponse.Content;
        // var token = JsonConvert.DeserializeObject<Dictionary<string,object>>(responseJson)["access_token"].ToString();
        // return token.Length > 0 ? token : null;

        public void AddTweet(Tweet tweet)
        {
            Data.Tweets.Add(tweet);
        }

        public void DeleteTweet(int tweetId)
        {
            var tweet = Data.Tweets.FirstOrDefault(n => n.id == tweetId);
            if(tweet != null)
            {
                Data.Tweets.Remove(tweet);
            }
        }
        //GetAllTweets() in reference to dummy data
        public List<Tweet> GetAllTweets() => Data.Tweets.ToList();
        public Tweet GetOneRandomTweetByUserId(int author_id)
        {
            throw new System.NotImplementedException();
        }


        public Tweet GetTweetByTweetId(int tweet_id) => Data.Tweets.FirstOrDefault(n => n.id == tweet_id);

        public List<Tweet> SearchForTenTweets(string searchQuery)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateTweet(int tweetId, Tweet tweet)
        {
            var oldTweet = Data.Tweets.FirstOrDefault(n => n.id == tweetId);
            if (oldTweet != null){
                oldTweet.created_at = tweet.created_at;
                oldTweet.name = tweet.name;
                oldTweet.username = tweet.username;
                oldTweet.text = tweet.text;
                oldTweet.reply_count = tweet.reply_count;
                oldTweet.retweet_count = tweet.retweet_count;
                oldTweet.like_count = tweet.like_count;
                oldTweet.id = tweet.id;
                oldTweet.author_id = tweet.author_id;
            }
        }



        public async Task<List<Tweet>> GetTenHardCodedTweets(){

            RestClient client = new RestClient("https://api.twitter.com/2/tweets");
            
            RestRequest request =  new RestRequest("/search/recent?query=megaman&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            request.AddParameter("Authorization", string.Format("Bearer " + "AAAAAAAAAAAAAAAAAAAAAKTwRAEAAAAAsF8lPADSnP0qNJCbVlLcHyO61V8%3DtcHGgFrvq3lnihJmBCvqCCSlgVOQCp5Qx5XGt3GZzhuGorJSnd"), ParameterType.HttpHeader);
            
            // JSON: {"data": [ {}, {} ] }
            var response = await client.GetAsync<TwitterResponse>(request);
            
            return response.data;
        }

    }
}