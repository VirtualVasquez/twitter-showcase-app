using Microsoft.AspNetCore.Mvc;
using Tweets.Data;
using RestSharp;
using RestSharp.Authenticators;
using System.Threading.Tasks;

namespace Tweets.Controllers
{
    [Route("api/[controller]")]
    public class TweetsController: Controller
    {
        private ITweetService _service;
        public TweetsController(ITweetService service)
        {
            this._service = service;
        }

        [HttpGet("[action]/{user_query}")]
        public async Task<IActionResult> GetTenUserQueriedTweets(string user_query)
        {
            var allTweets = await _service.GetTenUserQueriedTweets(user_query);
            return Ok(allTweets);
        }

        [HttpGet("[action]/{author_id}")]
        public async Task<IActionResult> GetOneAuthorsTweets(string author_id)
        {
            var allTweets = await _service.GetOneAuthorsTweets(author_id);
            return Ok(allTweets);
        }
    }
}