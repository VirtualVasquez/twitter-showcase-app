using System.Collections.Generic;
using System.Threading.Tasks;

namespace Tweets.Data
{
    public interface ITweetService
    {
        Task<List<Tweet>> GetOneAuthorsTweets(string author_id);
        Task<List<Tweet>> GetTenHardCodedTweets();
        Task<List<Tweet>> GetTenUserQueriedTweets(string user_query);
        Task<List<Includes>> GetTenHardCodedUsers();
        Task<TwitterResponse> GetJSON();
    }
}