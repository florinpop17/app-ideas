((document, window, domIsReady, undefined) => {
  const convertBin2Dec = binaryExpr => {
    // Formulae
    // input = 1 => output = 1*(2^0) = 1
    // input = 10 => Output = (0*(2^0))+(1*(2^1)) = 2
    // so we reverse and iterate from the back
    const reverseBinaryText = binaryExpr
      .split("")
      .map(Number) // convert to number from string
      .reverse();
    // claculate the result by accumulating previous value
    const result = reverseBinaryText.reduce(
      (accumulator, currentValue, indx) =>
        accumulator + currentValue * Math.pow(2, indx)
    );

    return result;
  };

  const validate = () => {
    const formEl = document.getElementById("form");
    const inputEl = formEl.querySelector("input");
    const errMsgEl = formEl.querySelector(".error-message");
    const outEl = document.getElementById("output");

    let expr = "",
      isValid = false;

    const handleValid = () => {
      errMsgEl.className = "error-message hidden";
      errMsgEl.innerHTML = "";
      const decExpr = convertBin2Dec(expr);
      outEl.innerHTML = `Decimal equivalent of ${expr} : ${decExpr}`;
    };

    const handleInvalid = () => {
      errMsgEl.className = "error-message";
      if (expr.length === 0) {
        errMsgEl.innerHTML = "Please enter a binary expression";
      }
      if (/[^0-1]+/g.test(expr)) {
        errMsgEl.innerHTML = "Only 0, 1 is allowed!";
        return;
      }
    };

    formEl.addEventListener("submit", e => e.preventDefault());

    inputEl.addEventListener("keyup", e => {
      outEl.innerHTML = "";
      expr = e.target.value;
      const validInputRegEx = /^[0-1]+$/g;
      isValid = validInputRegEx.test(expr);
      isValid ? handleValid() : handleInvalid();
    });
  };
  domIsReady(() => {
    validate();
  });
})(document, window, domIsReady);
