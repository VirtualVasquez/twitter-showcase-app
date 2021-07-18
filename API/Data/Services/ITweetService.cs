using System.Collections.Generic;
using System.Threading.Tasks;

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
        Task<List<Tweet>> GetTenHardCodedTweets();
    }
}