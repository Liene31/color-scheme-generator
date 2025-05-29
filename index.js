let colorSchemeArr = [];

// Select the color and mode & returns the values

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  const selectedColor = document.getElementById("color").value.substring(1);
  const sekectedSchemeMode = document.getElementById("scheme-mode").value;

  fetchColors(selectedColor, sekectedSchemeMode);
});

// Fetch the color scheme from API & retunrs the Array

function fetchColors(color, mode) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
    .then((res) => res.json())
    .then((data) => {
      colorSchemeArr = data.colors;
      renderColorScheme(colorSchemeArr);
    });
}

// Renders the color scheme in HTML

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

// Render default colors on initial load

window.addEventListener("DOMContentLoaded", function () {
  const defaultHex = "ff0000";
  const defaultMode = "monochrome";
  fetchColors(defaultHex, defaultMode);
});
