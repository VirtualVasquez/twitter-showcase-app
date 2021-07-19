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
        
        [HttpGet("[action]")]
        public async Task<IActionResult> GetTenHardCodedTweets()
        {
            var allTweets = await _service.GetTenHardCodedTweets();
            return Ok(allTweets);
        }

        [HttpGet("SingleTweet/{id}")]
        public IActionResult GetTweetById(int id)
        {
            var tweet = _service.GetTweetByTweetId(id);
            return Ok(tweet);
        }
    }
}