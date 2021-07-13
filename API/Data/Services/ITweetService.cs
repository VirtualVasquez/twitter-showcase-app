using System.Collections.Generic;

namespace Tweets.Data
{
    public interface ITweetService
    {
        List<Tweet> GetAllTweets();
        List<Tweet> SearchForTenTweets(string searchQuery);
        Tweet GetTweetByTweetId(int tweet_id);
        Tweet GetOneRandomTweetByUserId(int author_id);
        void UpdateTweet(int tweetId, Tweet tweet);
        void DeleteTweet(int tweetId);
        void AddTweet(Tweet tweet);
    }
}