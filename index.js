let colorSchemeArr = [];

function renderColorScheme(array) {
  console.log(array);
  let colorSchemeHtml = "";

  array.forEach((color) => {
    colorSchemeHtml += `
    <div class="color-block">
        <img
          src="https://www.thecolorapi.com/id?format=svg&named=false&hex=${color.hex.clean}"
          alt="${color.name.value}"
        />
      </div>
`;
  });

  document.getElementById("color-scheme").innerHTML = colorSchemeHtml;
}

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  const chosenColor = document.getElementById("color").value.substring(1);
  const chosenSchemeMode = document.getElementById("scheme-mode").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenSchemeMode}`
  )
    .then((res) => res.json())
    .then((data) => {
      colorSchemeArr = data.colors;
      renderColorScheme(colorSchemeArr);
    });
});

renderColorScheme(colorSchemeArr);
