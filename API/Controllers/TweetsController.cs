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

        [HttpGet("[action]")]
        public async Task<IActionResult> GetTenHardCodedUsers()
        {
            var allUsers = await _service.GetTenHardCodedUsers();
            return Ok(allUsers);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetJSON()
        {
            var JSON = await _service.GetJSON();
            return Ok(JSON);
        }



    }
}