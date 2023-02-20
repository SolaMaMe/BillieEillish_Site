/*------------------------------------------------music click　start------------------------------------------------*/
document.addEventListener('click', audioPlay);
function audioPlay() {
  document.getElementById('audio').play();
  document.removeEventListener('click', audioPlay);
}
/*------------------------------------------------music click　end------------------------------------------------*/


/*------------------------------------------------scroll　start------------------------------------------------*/
window.addEventListener('scroll', () => {
  //idがkeyvisualの要素を取得
  let elem = document.getElementById('keyvisual');
  //現在のスクロール位置を取得して、10で除算
  let scrollY = window.scrollY/15;
  //上で取得した値と画像幅を加算して、elemの背景サイズに設定
  elem.style.backgroundSize = 10 + scrollY + '%';
});
/*------------------------------------------------scroll　end------------------------------------------------*/

