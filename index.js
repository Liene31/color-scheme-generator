const color = document.getElementById("color");
const schemeMode = document.getElementById("scheme-mode");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const chosenColor = color.value.substring(1);
  const chosenSchemeMode = schemeMode.value;
  console.log(chosenColor, chosenSchemeMode);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenSchemeMode}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data.colors));
});
