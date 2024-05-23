
$(document).ready(function() {

// Function to create a tweet element based on tweet data
const createTweetElement = function(tweet){
  // Use template literals to create the tweet HTML structure
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


// Function to render tweets on the page
const renderTweets = function(tweets) {
  $(".allTweets").empty();

   // Loop through each tweet and append it to the tweet container
  for (let tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.allTweets').prepend($tweet);
  }
};


// Event listener for form submission
$("#tweetForm").submit(function(event) {
  event.preventDefault();

  // Validate the length of the tweet text
  let text = $("#tweet-text").val();
  
  if (text.length <= 0) {
    alert("Please Enter your text message");
    return;
  } 
  if (text.length > 140) {
    alert("Text must not exceed 140 characters");
    return;
  }

// Serialize the form data and send a POST request to the server to add the tweet
let data = $(this).serialize();
$.post("/tweets/", data).then(function(data) {
  console.log("Success: ", data);
  });
});

// Function to load tweets from the server
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