// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() { /*유튜브 외부 라이브러리 */ 
  new YT.Player('player', { /* player 라는 id값을 찾음*/
    videoId: 'oUUI2rh6r1k', /*홈페이지 주소에서 id값을 따옴, 최초 재생할 유튜브 영상 */
    playerVars: {
        autoplay : true, //자동 재생 
        loop : true, //반복 재생 
        playlist:'oUUI2rh6r1k' //반복 재생할 유튜브 ID
    },
    events: {
        onReady: function(event){ /*onReady라는 메소드가 실행되면 어떻게 처리할지*/
            event.target.mute() // 익명의 함수로 음소거 처리
        }
    }
  });
}
