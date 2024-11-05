function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      let display = document.getElementById("display");
      display.value = eval(display.value);
    } catch (error) {
      alert("Invalid Expression");
    }
  }
  
  function calculateSqrt() {
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value));
  }
  
  function calculateSquare() {
    let display = document.getElementById("display");
    display.value = Math.pow(parseFloat(display.value), 2);
  }
  
  function calculateSin() {
    let display = document.getElementById("display");
    display.value = Math.sin(parseFloat(display.value) * Math.PI / 180);
  }
  
  function calculateCos() {
    let display = document.getElementById("display");
    display.value = Math.cos(parseFloat(display.value) * Math.PI / 180);
  }
  
  function calculateTan() {
    let display = document.getElementById("display");
    display.value = Math.tan(parseFloat(display.value) * Math.PI / 180);
  }
  
  function calculateLog() {
    let display = document.getElementById("display");
    display.value = Math.log10(parseFloat(display.value));
  }
  
  function calculateExp() {
    let display = document.getElementById("display");
    display.value = Math.exp(parseFloat(display.value));
  }
  
  function calculateFactorial() {
    let display = document.getElementById("display");
    let num = parseInt(display.value);
    if (num < 0) {
      alert("Factorial of negative number is undefined");
    } else {
      display.value = factorial(num);
    }
  }
  
  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  