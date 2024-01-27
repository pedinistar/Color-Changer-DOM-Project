const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button);
    body.style.backgroundColor = `${button.id}`
  })
})

// 😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁