using System;
using System.Collections.Generic;

namespace Tweets.Data
{
    public static class Data
    {
        public static List<Tweet> Tweets => allTweets;

        static List<Tweet> allTweets = new List<Tweet>()
        {
            new Tweet()
            {
                created_at = new DateTime(2017,01,20),
                name = "FakeName101",
                username = "@FakeName101_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567890,
                author_id = 1
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,21),
                name = "FakeName102",
                username = "@FakeName102_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567891,
                author_id = 2
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,22),
                name = "FakeName103",
                username = "@FakeName103_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567892,
                author_id = 3
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,23),
                name = "FakeName104",
                username = "@FakeName104_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567893,
                author_id = 4
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,24),
                name = "FakeName105",
                username = "@FakeName105_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567894,
                author_id = 5
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,25),
                name = "FakeName106",
                username = "@FakeName106_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567895,
                author_id = 6
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,26),
                name = "FakeName107",
                username = "@FakeName107_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567896,
                author_id = 7
            },
            new Tweet()
            {
                created_at = new DateTime(2017,01,27),
                name = "FakeName108",
                username = "@FakeName108_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567897,
                author_id = 8
            },
                        new Tweet()
            {
                created_at = new DateTime(2017,01,28),
                name = "FakeName109",
                username = "@FakeName109_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567898,
                author_id = 9
            },
                        new Tweet()
            {
                created_at = new DateTime(2017,01,29),
                name = "FakeName110",
                username = "@FakeName110_01",
                text = "This is fake Text",
                like_count = 1,
                reply_count = 2,
                retweet_count = 3,
                id = 1234567899,
                author_id = 10
            },


        };
    }
}