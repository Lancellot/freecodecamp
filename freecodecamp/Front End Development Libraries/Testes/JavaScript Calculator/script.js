let display = document.getElementById("display");
let current = "0";
let formula = "";
let lastPressed = "";

const operators = ["+", "-", "*", "/"];

function updateDisplay(value) {
  display.textContent = value;
}

function handleNumber(num) {
  if (lastPressed === "=") {
    current = num;
    formula = num;
  } else {
    if (current === "0" || operators.includes(lastPressed)) {
      current = num;
    } else {
      current += num;
    }
    formula += num;
  }
  lastPressed = num;
  updateDisplay(current);
}

function handleOperator(op) {
  if (lastPressed === "=") {
    formula = display.textContent + op;
  } else if (operators.includes(lastPressed)) {
    if (op === "-" && lastPressed !== "-") {
      formula += op;
    } else {
      formula = formula.replace(/[*\-+/]+$/, "") + op;
    }
  } else {
    formula += op;
  }
  current = op;
  lastPressed = op;
  updateDisplay(op);
}

function handleDecimal() {
  if (lastPressed === "=") {
    current = "0.";
    formula = "0.";
  } else if (!current.includes(".")) {
    current += ".";
    formula += ".";
  }
  lastPressed = ".";
  updateDisplay(current);
}

function clearCalc() {
  current = "0";
  formula = "";
  lastPressed = "";
  updateDisplay("0");
}

function calculate() {
  try {
    let cleanFormula = formula.replace(/[*\-+/]+$/, "");
    let result = eval(cleanFormula);
    result = Math.round(result * 10000) / 10000; // precision
    updateDisplay(result);
    current = result.toString();
    formula = result.toString();
    lastPressed = "=";
  } catch (e) {
    updateDisplay("Error");
    current = "0";
    formula = "";
    lastPressed = "";
  }
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.id;
    switch (id) {
      case "clear": return clearCalc();
      case "equals": return calculate();
      case "decimal": return handleDecimal();
      case "add": return handleOperator("+");
      case "subtract": return handleOperator("-");
      case "multiply": return handleOperator("*");
      case "divide": return handleOperator("/");
      default: return handleNumber(btn.textContent);
    }
  });
});
