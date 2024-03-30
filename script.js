const envelope = document.querySelector('.envelope');
const openBtn = document.querySelector('.open-btn');

openBtn.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

function checkPassword() {
  var password = document.getElementById("password").value;
  if (password.toLowerCase() === "claudia") {
    document.getElementById("password-form").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("who are you?");
  }
}