using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors(origins: "https://localhost:3000/search", headers: "*", methods: "*")]
    public class TweetController : ControllerBase
    {
        private static readonly string[] FakeTweets = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<TweetController> _logger;

        public TweetController(ILogger<TweetController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Tweet> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new Tweet
            {
                created_at = DateTime.Now.AddDays(index),
                name = "FakeName101",
                username = "@FakeName101_01",
                text = FakeTweets[rng.Next(FakeTweets.Length)],
                like_count = rng.Next(),
                reply_count = rng.Next(),
                retweet_count = rng.Next(),
                id = rng.Next(),
                author_id = rng.Next(),

            })
            .ToArray();
        }
    }
}
