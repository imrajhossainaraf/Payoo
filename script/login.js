let number = document.querySelector(".inp1");
let pin = document.querySelector(".inp2");
let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
  if (number.value === "" || pin.value === "") {
    showNotification("Please enter number and pin", "error");
    return;
  }

  if (number.value === "01840422238" && pin.value === "1234") {
    // Save user data to localStorage
    const userData = {
      name: "John Doe",
      mobile: number.value,
      balance: 4500.0,
      savings: 12350.0,
      credit: 2450.0,
      investment: 25800.0,
      transactions: [],
      loginTime: new Date().toISOString(),
    };

    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      showNotification("Login Successful", "success");
      setTimeout(() => {
        window.location.href = "/script/dashboard.html";
      }, 500);
    } catch (error) {
      console.error("Error saving user data:", error);
      showNotification("Login Successful", "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 500);
    }
  } else {
    showNotification("Invalid Number or Pin", "error");
  }
});

// Show notification function for login page
function showNotification(message, type) {
  // Remove existing notifications
  const existing = document.querySelectorAll(".login-notification");
  existing.forEach((n) => n.remove());

  const notification = document.createElement("div");
  notification.className = `login-notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
    type === "error" ? "bg-red-500" : "bg-green-500"
  } text-white max-w-md`;
  notification.innerHTML = `
    <div class="flex items-center gap-2">
      <i class="fas ${type === "error" ? "fa-exclamation-circle" : "fa-check-circle"}"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transition = "opacity 0.3s";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
