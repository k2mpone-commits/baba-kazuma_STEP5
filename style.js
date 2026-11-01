// HTMLの各要素を取得する
const textInput = document.getElementById("text-input");
const showBtn = document.getElementById("show-btn");
const addBtn = document.getElementById("add-btn");
const changeBtn = document.getElementById("change-btn");
const displayArea = document.getElementById("display-area");
const rowCountSpan = document.getElementById("row-count");
const dataTableBody = document.querySelector("#data-table tbody");

// 設問②：背景色変更の順番（初期状態 -> lightblue -> lightgreen -> lightcoral の順で循環）
const bgColors = ["", "lightblue", "lightgreen", "lightcoral"];
let bgIndex = 0;

// 設問⑦：ブラウザの開発者ツールのコンソールに1から5までのループ回数を表示するログを出力
console.log("--- 設問⑦：ループ表示の開始 ---");
for (let i = 1; i <= 5; i++) {
  console.log(`ループ回数: ${i}`);
}
console.log("------------------------------");

// ==========================================
// 設問① ＆ 設問③：「表示」ボタンの処理
// ==========================================
showBtn.addEventListener("click", () => {
  const inputText = textInput.value;

  // 設問①-b：入力値が空の場合のアラート
  if (inputText === "") {
    alert("入力値が空です。");
    return; // 空の場合は以降の処理を行わない
  }

  // 設問①-a：テキスト表示エリアに入力されたテキストを出力
  displayArea.textContent = inputText;

  // 設問③：「表示」ボタンをクリックするたびにハイライト（背景色・太字）の切り替えを行う
  displayArea.classList.toggle("highlight");
});

// ==========================================
// 設問②：「背景色を変更」ボタンの処理
// ==========================================
changeBtn.addEventListener("click", () => {
  // インデックスを進めて背景色を順番に循環させる
  bgIndex = (bgIndex + 1) % bgColors.length;

  // 背景色の適用（最初の状態に戻ったときは空にする）
  if (bgIndex === 0) {
    document.body.style.backgroundColor = "";
  } else {
    document.body.style.backgroundColor = bgColors[bgIndex];
  }
});

// ==========================================
// 設問④ ＆ 設問⑥：「追加」ボタンの処理
// ==========================================
addBtn.addEventListener("click", () => {
  const inputText = textInput.value;

  // 空欄のまま追加されないようにチェック
  if (inputText === "") {
    alert("追加するテキストを入力してください。");
    return;
  }

  // 設問⑥：データテーブルには最大3件のデータのみ表示。4件目以降は古いデータから順に削除
  if (dataTableBody.rows.length >= 3) {
    dataTableBody.deleteRow(0); // 一番上の行（古いデータ）を削除
  }

  // 設問④-a：データテーブルの最下部に行を追加
  const newRow = dataTableBody.insertRow();
  const cellContent = newRow.insertCell(0);
  const cellAction = newRow.insertCell(1);

  // 1列目にテキストを設定
  cellContent.textContent = inputText;

  // 2列目に「削除」ボタンを付加
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";

  // 設問⑤-a：各行の「削除」ボタンをクリックすると、その行がデータテーブルから削除される
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
    updateRowCount(); // 行数を更新してボタンの表示状態を再計算
  });

  cellAction.appendChild(deleteBtn);

  // 行数カウントおよび「表示」ボタンの表示制御を更新
  updateRowCount();

  // 入力欄をクリアする
  textInput.value = "";
});

// ==========================================
// 行数のカウントと「表示」ボタンの表示・非表示を管理する関数
// ==========================================
function updateRowCount() {
  const currentRows = dataTableBody.rows.length;

  // 行数カウント表示を更新（ご提示いただいたCSSの表示形式「現在の行数：0」に対応）
  rowCountSpan.textContent = currentRows;

  // 設問④-b ＆ ⑤-b：行数が3件以上になったら「表示」ボタンを非表示にする（3件未満なら再度表示）
  if (currentRows >= 3) {
    showBtn.classList.add("hidden");
  } else {
    showBtn.classList.remove("hidden");
  }
}
