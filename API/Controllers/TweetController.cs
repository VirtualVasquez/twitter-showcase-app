using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
                Date = DateTime.Now.AddDays(index),
                Username = "FakeName101",
                TwitterHandle = "@FakeName101_01",
                TweetMessage = FakeTweets[rng.Next(FakeTweets.Length)],
                NumberOfLikes = rng.Next(),
                NumberOfReplies = rng.Next(),
                NumberOfRetweets = rng.Next(),
            })
            .ToArray();
        }
    }
}
