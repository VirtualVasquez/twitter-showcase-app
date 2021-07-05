using System;

namespace API
{
    public class Tweet
    {
        public DateTime created_at { get; set; }

        public String name { get; set; }

        public String username { get; set; }//twitterhandle
        
        public String text { get; set; }

        public int reply_count { get; set; }

        public int retweet_count { get; set; }

        public int like_count { get; set; }
        
        public int id { get; set; }

        public int author_id { get; set; }
    }
}
