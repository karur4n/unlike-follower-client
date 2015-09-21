var tweets = document.getElementsByClassName('original-tweet js-original-tweet js-stream-tweet');

var unlikeActionDiv = document.createElement('div');
unlikeActionDiv.setAttribute('id', 'ProfileTweet-action--unlike');
unlikeActionDiv.setAttribute('class', 'ProfileTweet-action');

var thumbsDownImg = document.createElement('img');
thumbsDownImg.src = chrome.extension.getURL('./images/content/thumbs-down.png');

unlikeActionDiv.appendChild(thumbsDownImg);

for (var i = 0; i < tweets.length; i++) {
  var actionList = tweets[i].querySelector('.ProfileTweet-actionList');

  var unlikeButton = unlikeActionDiv.cloneNode(true);

  unlikeActionDiv.onclick = function(event) {
    console.log('clicked');

    data = {
      "aa": 77,
      "bb": 20
    };

    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('_csrf_token', 'fdaskfjaslkdfjsalkjfslakjdflsdnkjdnvkjvnklxjcvnsdkljfndsalkjfngasdlkj');

    console.log(request);

    request.send(data);
  };

  actionList.appendChild(unlikeButton);
}
