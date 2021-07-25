const input = document.querySelector("#validation-input");
input.addEventListener("click", () => {
  console.log(input.value.length);
  console.dir(input.dataset.length);
  const inputValue = input.value.length;
  const dataValue = input.dataset.length;

  if (inputValue+1  === +dataValue) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.dir(input);
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    console.dir(input);
  }
});
