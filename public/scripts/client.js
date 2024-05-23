const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1716245916450
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1716332316450
  }
]

const calculateDays = function(date) {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();

  const Days = Math.round(Math.abs((date - today) / oneDay));
  return Days;
};

$(document).ready(function() {
  //Tweet the article

const createTweetElement = function(tweet){
  const tweetArtical = (`
  <article class="tweet">
  <header>
    <div class = "user-ava">
      <img src=${tweet.user.avatars} alt="avatar" />
      <h3>${tweet.user.name}</h3>
      </div>
      <p class="handle">${tweet.user.handle}</p>
  </header>
  <p class="content">${tweet.content.text}</p>
  <footer>
   <p>${calculateDays(tweet.created_at)} days ago</p>
   <p>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-sharp fa-solid fa-heart"></i>
   </p>
  </footer>
  </article>
  `);
  return tweetArtical;
};

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.allTweets').append($tweet);
  }
};

renderTweets(data);
});
