fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic")
  .then((res) => res.json())
  .then((data) => console.log(data.colors[0].hex));
