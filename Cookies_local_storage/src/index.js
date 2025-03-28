function setCookies() {
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  const date = new Date();
  expiration_date = new Date(
    date.getTime() + 1000 * 60 * 60 * 24 * 10
  ).toUTCString();

  document.cookie = `firstname=${firstname}; path=/`;
  document.cookie = `email=${email}; path=/`;
}

function showCookies() {
  const p = document.createElement("p");
  const firstname = getCookies("firstname");
  const email = getCookies("email");
  p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}

window.setCookies = setCookies;
window.showCookies = showCookies;
