const envelope = document.querySelector('.envelope');
const openBtn = document.querySelector('.open-btn');

openBtn.addEventListener('click', () => {
envelope.classList.toggle('open');
});


//verification of name
function checkPassword() {
  var password = document.getElementById("password").value;
  if (password.toLowerCase() === "claudia") {
    document.getElementById("password-form").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    alert("who are u?");
  }
}


const mainContent = document.getElementById('main-content');
const letterItself = document.getElementById('letterItself');

mainContent.addEventListener('click', function() {
  mainContent.classList.add('open');
  setTimeout(function() {
    letterItself.style.display = 'block';
    mainContent.style.display = 'none';
  }, 2000);
});
