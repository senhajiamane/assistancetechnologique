<!-- menu.php -->
<nav>
    <a href="accueil.php">Accueil</a>
    <a href="aides_techniques.php">Aides Techniques</a>
    <a href="defis.php">Défis</a>
    <a href="perspectives.php">Perspectives</a>
    <a href="sitographie.php">Sitographie</a>
    <div id="accessibility-menu">
        <button class="accessibility-button" onclick="toggleAccessibilityMenu()">Accessibilité</button>
        <div class="menu-options">
            <button onclick="increaseFontSize()">Agrandir le Texte</button>
            <button onclick="decreaseFontSize()">Réduire le Texte</button>
            <div class="contrast-options">
                <label for="contrast-select">Choix de contraste :</label>
                <select id="contrast-select" onchange="changeContrast()">
                    <option value="blue">Bleu sur Jaune</option>
                    <option value="jaune">Jaune sur Bleu</option>
                    <option value="noir">Noir sur Blanc</option>
                    <option value="blanc">Blanc sur Noir</option>
                </select>
            </div>
        </div>
    </div>
</nav>
