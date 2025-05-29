const color = document.getElementById("color");
const schemeMode = document.getElementById("scheme-mode");
const btn = document.getElementById("btn");
const colorScheme = document.getElementById("color-scheme");
let colorSchemeArr = [];

function renderColorScheme() {
  let colorSchemeHtml = "";

  colorSchemeArr.forEach((color) => {
    console.log(color);
    colorSchemeHtml += `
    <div class="color-block">
        <img
          src="https://www.thecolorapi.com/id?format=svg&named=false&hex=${color.hex.clean}"
          alt="${color.name.value}"
        />
      </div>
`;
  });

  colorScheme.innerHTML = colorSchemeHtml;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const chosenColor = color.value.substring(1);
  const chosenSchemeMode = schemeMode.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenSchemeMode}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorSchemeArr = data.colors;
      renderColorScheme(colorSchemeArr);
    });
});
