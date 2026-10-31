//HTMLの各要素を取得
const textInput = document.getElementById("text-input");
const showBtn = document.getElementById("show-btn");
const addBtn = document.getElementById("add-btn");
const displayArea = document.getElementById("display-area");
const rowCountInput = document.getElementById("row-count-display");
const rowCount = document.getElementById("row-count");

//設問②の準備(色のリストと番号管理)
const bgColors = ["", "lightblue", "lightgreen", "lightcoral"];
let bgIndex = 0;

//設問⑦：コンソールログの出力
console.log("--- 設問⑦：ループ表示の開始 ---");
for (let i = 1; i <= 5; i++) {
  console.log("ループ回数； ${i}");
}
console.log("------------------------------");
