const btnShow = document.querySelector("#showPW");

btnShow.addEventListener("click", () => {
  const inputPW1 = document.querySelector("#pw1");
  const inputPW2 = document.querySelector("#pw2");

  if (input.type === "password") {
    inputPW1.type = "text";
    inputPW2.type = "text";
    btnShow.innerText = "Hide Password";
  } else if (input.type === "text") {
    inputPW1.type = "password";
    inputPW2.type = "password";
    btnShow.innerText = "Show Password";
  }
});

const wrapper = document.querySelector("#wrapper");

wrapper.addEventListener("input", checkPasswords);

function comparePasswords() {
  const pw1 = wrapper.querySelector("#pw1");
  const pw2 = wrapper.querySelector("#pw2");

  if (pw1.value === pw2.value && pw1.value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPasswords() {
  const equal = document.querySelector("#equal");

  if (comparePasswords()) {
    equal.innerText = "Passwords are equal 😻";
  } else {
    equal.innerText = "Passwords are equal 😿";
  }

  const lower = document.querySelector("#lower");
  const lowerCase = /[a-z]/g;

  if (pw1.value === pw2.value && lowerCase.test(pw1.value)) {
    lower.innerText = "Lower Case Letters 😻";
  } else {
    lower.innerText = "Lower Case Letters 😿";
  }

  const upper = document.querySelector("#upper");
  const upperCase = /[A-Z]/g;

  if (pw1.value === pw2.value && upperCase.test(pw1.value)) {
    upper.innerText = "Upper Case Letters 😻";
  } else {
    upper.innerText = "Upper Case Letters 😿";
  }

  const numbers = document.querySelector("#numbers");
  const number = /[0-9]/g;

  if (pw1.value === pw2.value && number.test(pw1.value)) {
    numbers.innerText = "Contains Numbers 😻";
  } else {
    numbers.innerText = "Contains Numbers 😿";
  }

  const long = document.querySelector("#long");
  if (pw1.value === pw2.value && pw1.value.length >= 10) {
    long.innerText = "At least character long 😻";
  } else {
    long.innerText = "At least character long 😿 ";
  }
}
