(function (document, window, domIsReady, undefined) {

  function convertBin2Dec(binaryExpr) {
    const bin2Dec = {
      '0000': 0,
      '0001': 1,
      '0010': 2,
      '0011': 3,
      '0100': 4,
      '0101': 5,
      '0110': 6,
      '0111': 7,
      '1000': 8,
      '1001': 9,
      '1010': 10,
      '1011': 11,
      '1100': 12,
      '1101': 13,
      '1110': 14,
      '1111': 15,
    };
    const len = binaryExpr.length;
    binaryExpr = len % 4 === 0 ? binaryExpr : '0'.repeat(4 - len % 4) + binaryExpr;
    
    const maxPow = binaryExpr.length / 4;
    let result = 0, pow = 1;
    for (let i = 0; i < maxPow; i++) {
      result += bin2Dec[binaryExpr.slice(4 * i, 4 * (i + 1))] * pow;
      pow *= 16;
    }

    return result;
  }

  function validate() {
    const formEl = document.getElementById('form');
    const inputEl = formEl.querySelector('input');
    const errMsgEl = formEl.querySelector('.error-message');
    const outEl = document.getElementById('output');

    let expr = '', isValid = false;

    const handleValid = () => {
      errMsgEl.className = 'error-message hidden';
      errMsgEl.innerHTML = '';
      const decExpr = convertBin2Dec(expr);
      outEl.innerHTML = `Decimal equivalent of ${expr} : ${decExpr}`;
    };

    const handleInvalid = () => {
      errMsgEl.className = 'error-message';
      if (expr.length === 0) {
        errMsgEl.innerHTML = 'Please enter a binary expression';
      }
      if (/[^0-1]+/g.test(expr)) {
        errMsgEl.innerHTML = 'Only 0, 1 is allowed!';
        return;
      }
    };

    formEl.addEventListener('submit', e => e.preventDefault());

    inputEl.addEventListener('keyup', (e) => {
      outEl.innerHTML = '';
      expr = e.target.value;
      const validInputRegEx = /^[0-1]+$/g;
      isValid = validInputRegEx.test(expr);
      isValid ? handleValid() : handleInvalid();
    });
  }
  domIsReady(function () {
    validate();
  });
})(document, window, domIsReady);