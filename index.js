document.getElementById("loginForm").addEventListener("submit", function (e){

e.preventDefault();

const username = document.getElementById("username").value .trim();
const username = document.getElementById("password").value .trim();
const username = document.getElementById("login-message").value .trim();

// Demo: hardcoded login for now
if (username==="rasheed" && password==="1234"){
    message.style.color="#b2ffb2";
      message.textContent="Login successful! Redirecting...";
      setTimeout (()==>{
        window.location.href="dashboard.html";
      },1500);
}else{

    message.style.color="ffcccc";
    message.textContent="Invalid username or password.";
}
});