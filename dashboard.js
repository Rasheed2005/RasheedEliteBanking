let currentBalance = 5000;

document.getElementById("transferForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const recipient = document.getElementById("recipient").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const message = document.getElementById("transfer-message");

  // Validation
  if (!recipient || isNaN(amount) || amount <= 0) {
    message.style.color = "#ffcccc";
    message.textContent = "Please enter a valid recipient and amount.";
    return;
  }

  if (amount > currentBalance) {
    message.style.color = "#ffcccc";
    message.textContent = "Insufficient funds.";
    return;
  }

  // Deduct amount
  currentBalance -= amount;
  document.getElementById("balance").textContent = $${currentBalance.toFixed(2)};

  // Show success message
  message.style.color = "#b2ffb2";
  message.textContent = You sent $${amount.toFixed(2)} to ${recipient}.;
});

// Optional: Get name from local storage (from login)
const name = localStorage.getItem("bankUser") || "User";
document.getElementById("userName").textContent = name.charAt(0).toUpperCase() + name.slice(1);

// Logout function
function logout() {
  localStorage.removeItem("bankUser");
  window.location.href = "index.html";
}
function logout() {

//Remove only session-related info
localStorage.removeItem("bankUser");
//Optional:remove saved profile too
//localstorage.clear();

//Redirect to login page
window.location.href ="index.html"


}