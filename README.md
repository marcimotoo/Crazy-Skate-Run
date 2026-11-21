# Crazy Skate Run

Ein Browser-Spiel in Entwicklung mit HTML, CSS und JavaScript. Auf einem Canvas fährt ein Skater durch eine urbane Kulisse und sammelt Coins ein. Gegner verfolgen ihn und er kann sie mit Flaschen treffen.

## Starten

`index.html` in einem Browser öffnen. Ein Build-Schritt oder zusätzliche Abhängigkeiten sind nicht erforderlich.

Für diesen Entwicklungsstand müssen die bisherigen Spielgrafiken unter `assets/img/old-images/old-design/` lokal vorliegen. Dieser Ordner wird von Git ignoriert und muss bei einem frischen Klon separat bereitgestellt werden.

## Projektstruktur

- `game.js`: Initialisierung des Spiels
- `models/`: Spielwelt und Spielobjekte
- `levels/`: Leveldefinitionen mit Gegnern, Wolken, Hintergrundobjekten und Coins
- `assets/img/crazy-skate-run/`: Arbeitsordner für das neue Design
- `assets/img/old-images/`: Archiv für ältere Grafiken und Entwürfe
- `assets/img/old-images/old-design/`: Grafiken des bisherigen Designs, die das Spiel derzeit lädt
- `style.css` und `reset.css`: Darstellung
