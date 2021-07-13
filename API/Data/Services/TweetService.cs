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



        public async Task<Tweet> GetTenHardCodedTweets(){
            var client = new RestClient( "https://api.twitter.com/2/tweets");

            var request = new RestRequest("search/recent?query=megaman&tweet.fields=public_metrics,created_at&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=name,profile_image_url", DataFormat.Json);

            var response = client.Get(request);

            return JsonConvert.DeserializeObject<Tweet>(response)

            // string json;
            // json = await GetTweetsAsync(url);
            // return JsonConvert.DeserializeObject<List<Tweet>>(json);
        }
    }
}