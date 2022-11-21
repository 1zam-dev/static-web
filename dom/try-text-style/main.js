const ResultHistory = (function () {
  let histories = [];

  return {
    updateHistory() {
      const historyContainer = document.getElementById("historyWrap");
      historyContainer.innerHTML = "";

      histories.forEach((value, index) => {
        const historyItem = document.createElement("p");
        historyItem.innerHTML = value;
        historyItem.classList.add("text-wrap");
        historyItem.id = "history" + index;
        historyContainer.append(historyItem);
      });
    },
    resetHistory() {
      histories = [];
      this.updateHistory();
    },
    push(result) {
      histories.push(result);
      this.updateHistory();
    },
  };
})();

const IputValue

function showResult(result) {
  const resultElement = document.getElementById("result-id");
  resultElement.innerHTML = result;
}

function handleAdd() {
  const firstNumber = firstNumberElement.value;
  const secondNumber = secondNumberElement.value;

  if (firstNumber === "" || secondNumber === "") {
    return;
  }
  const result = Number(firstNumber) + Number(secondNumber);

  ResultHistory.push(result);
  showResult(result);

  return result;
}
