using System.Collections.Generic;
using System.Threading.Tasks;

namespace Tweets.Data
{
    public interface ITweetService
    {
        Tweet GetOneRandomTweetByUserId(int author_id);
        List<Tweet> SearchForTenTweets(string searchQuery);
        Task<List<Tweet>> GetTenHardCodedTweets();
        Task<List<Includes>> GetTenHardCodedUsers();

    }
}