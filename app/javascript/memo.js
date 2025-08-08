function post (){
 const form = document.getElementById("form")
 form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const XHL = new XMLHttpRequest();
  XHL.open("POST", "/posts", true);
  XHL.responseType = "json";
  XHL.send(formData);
 });
};

window.addEventListener('turbo:load', post);