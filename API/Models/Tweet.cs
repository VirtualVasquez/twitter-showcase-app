using System;

namespace API
{
    public class Tweet
    {
        public DateTime Date { get; set; }

        public String Username { get; set; }

        public String TwitterHandle { get; set; }
        
        public String TweetMessage { get; set; }

        public int NumberOfReplies { get; set; }

        public int NumberOfRetweets { get; set; }

        public int NumberOfLikes { get; set; }
    }
}
