const form = document.getElementById("cookieForm");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  //implementar lógica
  const data = new FormData(form);
  const obj = {};
  data.forEach((value, key) => (obj[key] = value));
  fetch("/cookie", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  //vaciamos el formulario
  form.reset();
});
const getCookie = () => {
  //implementar lógica
  console.log(document.cookie);
};
