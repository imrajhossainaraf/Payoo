let number = document.querySelector(".inp1");
let pin = document.querySelector(".inp2");
let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
  if (number.value === "" || pin.value === "") {
    alert("Please enter number and pin");
    return;
  }

  if (number.value === "01840422238" && pin.value === "1234") {
    alert("Login Successful");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Number or Pin");
  }
});
