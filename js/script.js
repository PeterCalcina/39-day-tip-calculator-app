let bill = document.getElementById('bill');
let tip_custom = document.getElementById('custom');
let people = document.getElementById('people');
let button_reset = document.getElementById('reset');

button_reset.setAttribute('disabled', 'true');

function deselectRadio() {
  let radios = document.getElementsByName('tip');

  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }

  if (people.value > 0) {
    calculateBill();
  }
}

function calculateBill() {
  if (people.value == 0) {
    showError();
  } else {
    enableBotonReset();
    hideError();
    
    let tip = tip_custom.value ? tip_custom.value : document.querySelector('input[name="tip"]:checked').value;

    let tipAmount = (bill.value * (tip / 100)) / people.value;
    let total = (bill.value / people.value) + tipAmount;

    document.getElementById('tip_total').textContent = `$${tipAmount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  }
}

function verifyPeople(valor) {
  if(valor === 1) {
    tip_custom.value = '';
  }
  
  if (people.value > 0) {
    calculateBill();
  }
}

let error__msg = document.querySelector('.error__msg');
let input__group = document.querySelectorAll('.input__group');

function showError() {
  input__group[1].classList.add('error');
  people.classList.add('error');
  error__msg.classList.add('active');
}

function hideError() {
  input__group[1].classList.remove('error');
  people.classList.remove('error');
  error__msg.classList.remove('active');
}

function clearAll() {
  bill.value = '';
  tip_custom.value = '';
  people.value = '';
  document.getElementById('tip_total').textContent = '$0.00';
  document.getElementById('total').textContent = '$0.00';
  hideError();
  deselectRadio();
  disableBotonReset();
}

function enableBotonReset() {
  button_reset.removeAttribute('disabled');
  button_reset.classList.add('active');
}

function disableBotonReset() {
  button_reset.setAttribute('disabled', 'true');
  button_reset.classList.remove('active');
}