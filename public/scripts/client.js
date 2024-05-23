
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

   <p>${timeago.format(tweet.created_at)}</p>
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
    tweets = tweets.reverse();
    $(".allTweets").empty();

  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.allTweets').append($tweet);
  }
};

// renderTweets(data);
// });

$("#tweetForm").submit(function(event) {
  event.preventDefault();
  let data = $(this).serialize();
  $.post("/tweets/", data).then(function(data) {
    console.log("Success: ", data);
  });
});

const loadtweets = function() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    success: function(data) {
      console.log(data);
      renderTweets(data);
    }
  });
};

loadtweets();
});