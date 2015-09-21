
var tweets = document.getElementsByClassName('original-tweet js-original-tweet js-stream-tweet');

for (var i = 0; i < tweets.length; i++) {
  var actionList = tweets[i].querySelector('.ProfileTweet-actionList');
  var unlikeActionDiv = document.createElement('div');
  unlikeActionDiv.setAttribute('id', 'ProfileTweet-action--unlike');
  unlikeActionDiv.setAttribute('class', 'ProfileTweet-action');

  var thumbsDownImg = document.createElement('img');
  thumbsDownImg.src = chrome.extension.getURL('./images/content/thumbs-down.png');

  unlikeActionDiv.onclick = function(event) {
    event.preventDefault();
    console.log('clicked');
  };

  unlikeActionDiv.appendChild(thumbsDownImg);
  actionList.appendChild(unlikeActionDiv);
}
