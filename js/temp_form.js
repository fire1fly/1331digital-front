// temp script

const fields = document.querySelectorAll(".form1-input-block");
console.log(fields);

fields.forEach(field => {
  const input = field.querySelector(".form1-input")
  const label = field.querySelector(".form1-input-label")
  input.addEventListener("focus", () => label.classList.add("active"));
  input.addEventListener("blur", e => {
    if (e.target.value === '') {
      label.classList.remove("active")
    }
  });
});