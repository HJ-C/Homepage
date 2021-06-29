const searchEl = document.querySelector('.search'); /*재할당 불가능 변수, css선택자로 찾아서 변수 할당*/
  const searchInputEl =  searchEl.querySelector('input');

searchEl.addEventListener('click', function(){ /*input의 포커스 아무데나 눌러도 작동*/
  searchInputEl.focus(); 
});

searchInputEl.addEventListener('focus', function(){  /*포커스될시 핸들러 기능*/
  searchEl.classList.add('focused'); /*input 요소에 포커스 될시 focused 추가 */
  searchInputEl.setAttribute('placeholder', '통합검색');/*html 속성 지정 메소드*/
}); 

searchInputEl.addEventListener('blur', function(){  /*포커스해제시 기능*/
  searchEl.classList.remove('focused'); /*input 요소에 포커스 해제될시 focused 제거 */
  searchInputEl.setAttribute('placeholder', '');/*html 속성 지정 메소드,비어있는상태 표현*/
}); 


//슬라이딩
new Swiper('.notice-line .swiper-container',{ /*new Swiper(선택자,옵션)*/
  direction:'vertical',
  autoplay: true, /*자동재생*/
  loop: true /*반복재생*/
}); 