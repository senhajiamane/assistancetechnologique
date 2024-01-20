function createAccessibilityMenu() {
  const accessibilityMenu = document.querySelector("#accessibility-menu .menu-options");
  accessibilityMenu.innerHTML = `
    <button onclick="increaseFontSize()">Agrandir le Texte</button>
    <button onclick="decreaseFontSize()">Réduire le Texte</button>
    <div class="contrast-options" style="display: block;">
      <select id="contrast-select" onchange="changeContrast()">
        <option value="blue">Bleu sur Jaune</option>
        <option value="jaune">Jaune sur Bleu</option>
        <option value="noir">Noir sur Blanc</option>
        <option value="blanc">Blanc sur Noir</option>
        <!-- Ajoutez d'autres options si nécessaire -->
      </select>
    </div>
  `;
}

function changeBackgroundColor(color) {
  const header = document.getElementById("site-header");
  header.style.backgroundColor = color;
}

function changeContrast() {
  var colorPicker = document.getElementById("contrast-select");
  var selectedColor = colorPicker.value;
  var content = document.getElementById("accueil");

  switch (selectedColor) {
    case "blue":
      content.style.color = "blue";
      content.style.backgroundColor = "yellow";
      changeBackgroundColor("yellow");
      break;
    case "jaune":
      content.style.color = "yellow";
      content.style.backgroundColor = "blue";
      changeBackgroundColor("blue");
      break;
    case "noir":
      content.style.color = "black";
      content.style.backgroundColor = "white";
      changeBackgroundColor("white");
      break;
    case "blanc":
      content.style.color = "white";
      content.style.backgroundColor = "black";
      changeBackgroundColor("black");
      break;
    default:
      // Reset to default colors
      content.style.color = "";
      content.style.backgroundColor = "";
      changeBackgroundColor(""); // Reset background color
  }
}

function increaseFontSize() {
  const body = document.body;
  const currentFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
  const fontSize = parseFloat(currentFontSize);
  body.style.fontSize = (fontSize * 1.1) + 'px';
}

function decreaseFontSize() {
  const body = document.body;
  const currentFontSize = window.getComputedStyle(body, null).getPropertyValue('font-size');
  const fontSize = parseFloat(currentFontSize);
  body.style.fontSize = (fontSize * 0.9) + 'px';
}

function toggleAccessibilityMenu() {
  var menuOptions = document.querySelector("#accessibility-menu .menu-options");
  menuOptions.style.display === "none"
    ? (menuOptions.style.display = "block")
    : (menuOptions.style.display = "none");
}

window.onload = function () {
  createAccessibilityMenu();
};