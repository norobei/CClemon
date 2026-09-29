/** スタートボタンからゲーム画面への推移 */
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('startDisplay').classList.remove('active');
  document.getElementById('gameDisplay').classList.add('active');
  start()
});

/** ms秒間待機する */
function delay(ms) {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove()
    }, ms);
  })
}

/** ゲームスタート */
async function start() {
  document.getElementById('judge').textContent = "シー"
  await delay(400)
  document.getElementById('judge').textContent = "シーシー"
  await delay(400)
  const buttons = document.getElementsByTagName('button');
  for(let i =0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}