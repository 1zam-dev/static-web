const ResultHistory = (function () {
  let histories = [];

  return {
    updateHistory() {
      const historyContainer = document.getElementById("history-list-id");
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

const FormController = (function () {
  const firstNumber = document.getElementById("first-number-id");
  const secondNumber = document.getElementById("second-number-id");

  return {
    getValues() {
      return [firstNumber.value, secondNumber.value];
    },
    clearForm() {
      firstNumber.value = "";
      secondNumber.value = "";
    },
  };
})();

function showResult(result) {
  const resultElement = document.getElementById("result-id");
  resultElement.innerHTML = result;
}

function isValidForm(firstNumber, secondNumber) {
  if (firstNumber === "" || secondNumber === "") {
    return false;
  }
  return true;
}

function handleResult(result) {
  ResultHistory.push(result);
  showResult(result);
  FormController.clearForm();
}

function handleAdd() {
  const [firstNumber, secondNumber] = FormController.getValues();
  if (!isValidForm(firstNumber, secondNumber)) {
    return;
  }
  const result = Number(firstNumber) + Number(secondNumber);
  handleResult(result);
  return result;
}

function handleSubtract() {
  const [firstNumber, secondNumber] = FormController.getValues();
  if (!isValidForm(firstNumber, secondNumber)) {
    return;
  }
  const result = Number(firstNumber) - Number(secondNumber);
  handleResult(result);
  return result;
}

function handleMultiply() {
  const [firstNumber, secondNumber] = FormController.getValues();
  if (!isValidForm(firstNumber, secondNumber)) {
    return;
  }
  const result = Number(firstNumber) * Number(secondNumber);
  handleResult(result);
  return result;
}

function handleDivide() {
  const [firstNumber, secondNumber] = FormController.getValues();
  if (!isValidForm(firstNumber, secondNumber)) {
    return;
  }
  const result = Number(firstNumber) / Number(secondNumber);
  handleResult(result);
  return result;
}
