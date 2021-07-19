using System.Collections.Generic;
using System.Threading.Tasks;

namespace Tweets.Data
{
    public interface ITweetService
    {
        List<Tweet> GetAllTweets();
        Tweet GetOneRandomTweetByUserId(int author_id);
        Tweet GetTweetByTweetId(int tweet_id);
        List<Tweet> SearchForTenTweets(string searchQuery);
        Task<List<Tweet>> GetTenHardCodedTweets();
    }
}