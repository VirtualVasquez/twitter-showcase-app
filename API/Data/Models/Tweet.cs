using System;
using System.Collections.Generic;

namespace Tweets.Data
{
    public class TwitterResponse {
        public List<Tweet> data { get; set; }
        public List<Includes> includes { get; set; }
    }
    public class Tweet
    {
        public DateTime created_at { get; set; }

        public string name { get; set; }

        public string username { get; set; }//twitterhandle
        
        public string text { get; set; }

        public int reply_count { get; set; }

        public int retweet_count { get; set; }

        public int like_count { get; set; }
        
        public long id { get; set; }

        public long author_id { get; set; }

    }

    public class Includes
    {
        public List<TwitterUsers> users { get; set; }
    }

    public class TwitterUsers
    {
        public string name { get; set; }
        public string profile_image_url { get; set; }
        public string username { get; set; }
        public long id { get; set; }
    }

}
