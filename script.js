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

/** 自分のため回数 */
let myCharge = 0;

/** 相手のため回数 */
let enemyCharge = 0;

/** 最初のターンかどうか判定するフラグ */
let isFirstTurn = true;


async function start() {
  document.getElementById('judge').textContent = "シー"
  await delay(400)
  document.getElementById('judge').textContent = "シーシー"
  await delay(400)
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

/** 「ためる」押下時 */
document.getElementById('chargeBtn').addEventListener('click', () => {
  myCharge++;
  document.getElementById('count').textContent = myCharge
  battle("ためる");
})

/** バトルの実行 */
function battle(myHand) {
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  document.getElementById('judge').textContent = 'レモン！'
  document.getElementById('my-hand').textContent = myHand;
  const enemyHand = makeEnemyHand();
  document.getElementById('enemy-hand').textContent = enemyHand;

  // 勝敗判定
  if (myHand === "発射" && enemyHand === "ためる") {
    document.getElementById("judge").textContent = "あなたの勝ち!"
  } else if (myHand === "ためる" && enemyHand === "発射") {
    document.getElementById("judge").textContent = "あなたの負け..."
  } else {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
  }
}



/** 敵の選択肢を生成("ためる","発射" "ガード") */
function makeEnemyHand() {
  // 最初のターンは"ためる"を返す
  if (isFirstTurn) {
    isFirstTurn = false
    return "ためる"
  }

  // 相手はたまっていなければ、"ためる"か"ガード"
  if (enemyCharge == 0) {
    const selection = ["ためる", "ガード"]
    const enemyHand = selection[Math.floor(Math.random() * selection.length)]
    if (enemyHand === "ためる") {
      enemyCharge++;
    }
    return enemyHand
  } else {
    //相手がたまっていれば、"ためる", "ガード", "発射"
    const selection = ["ためる", "ガード", "発射"]
    const enemyHand = selection[Math.floor(Math.random() * selection.length)]
    if (enemyHand === "ためる") {
      enemyCharge++;
    }
    return enemyHand
  }
}