
const form = document.getElementById("authForm");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const nameField = document.getElementById("nameField");
const nameInput = document.getElementById("name");
const heading = document.getElementById("heading");
const subtitle = document.getElementById("subtitle");
const submitBtn = document.getElementById("submitBtn");
const switchText = document.getElementById("switchText");
const switchBtn = document.getElementById("switchBtn");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

let isSignup = false;

function showMessage(text, success = false) {
  message.textContent = text;
  message.style.color = success ? "#16834a" : "#d12d45";
}

function setMode(signup) {
  isSignup = signup;
  form.reset();
  showMessage("");

  nameField.hidden = !signup;
  nameInput.required = signup;

  loginTab.classList.toggle("active", !signup);
  signupTab.classList.toggle("active", signup);

  heading.textContent = signup ? "Create Account" : "Welcome Back!";
  subtitle.textContent = signup
    ? "Join the SmartShop community"
    : "Login to your SmartShop account";

  submitBtn.textContent = signup ? "Create Account" : "Login";
  switchText.firstChild.textContent = signup
    ? "Already have an account? "
    : "Don't have an account? ";
  switchBtn.textContent = signup ? "Login" : "Sign Up";
}

loginTab.addEventListener("click", () => setMode(false));
signupTab.addEventListener("click", () => setMode(true));

switchBtn.addEventListener("click", () => setMode(!isSignup));

togglePassword.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  togglePassword.textContent = showing ? "Show" : "Hide";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showMessage("");

  if (isSignup && nameInput.value.trim().length < 2) {
    showMessage("Please enter your full name.");
    nameInput.focus();
    return;
  }

  if (password.value.length < 6) {
    showMessage("Password must be at least 6 characters.");
    password.focus();
    return;
  }

  if (isSignup) {
    showMessage(
      "Demo only: form valid hai, lekin real account create nahi hua. Backend ke bina account save nahi hota.",
      true
    );
  } else {
    showMessage(
      "Demo only: form valid hai, lekin real login verify nahi hua.",
      true
    );
  }
});
