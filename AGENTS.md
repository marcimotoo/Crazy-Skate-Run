# Projektanweisungen

## Code

Schreibe oder ändere nur dann Code, wenn ich die konkrete Umsetzung ausdrücklich freigebe. Besprich Änderungen vorher mit mir.

## Bilder und Animationen

- Lege alle Projektbilder unter `assets/img` ab.
- Lege neue Grafiken und Entwürfe für das neue Design unter `assets/img/crazy-skate-run` ab.
- Verwende `assets/img/crazy-skate-run/concepts/` ausschließlich für übergreifende Konzeptbilder und Concept Art, die als visuelle Orientierung für das Spiel oder eine ganze Szene dienen. Lege einzelne Assets und ihre Entwürfe im passenden Asset-Ordner ab, zum Beispiel Hintergrundebenen unter `backgrounds/`.
- Erstelle neue Hintergrundebenen für Himmel, Wolken, Skyline, Rasen und Vordergrund in 2172 × 724 px (Seitenverhältnis 3:1).
- Richte Himmel, Wolken, Skyline, Rasen und Vordergrund auf derselben Bildfläche aus. Rasen und Vordergrund müssen sich so überdecken, dass am Boden keine Lücken entstehen.
- Plane aufeinanderfolgende Vordergrundabschnitte mit einer gemeinsamen Kantenreferenz. Die rechte Kante eines Abschnitts muss pixelgenau an die linke Kante des nächsten anschließen. Halte dort die Höhe von Straße, Bordstein, Bürgersteig und hinterer Pflasterkante sowie Farben, Texturen und Schatten durchgängig. Bei Wiederholung müssen die beiden Kanten desselben Bilds zusammenpassen.
- Übernimm für jeden neuen Vordergrundabschnitt die linken und rechten Randbereiche aus `assets/img/crazy-skate-run/backgrounds/layer-foreground-1.png` pixelgenau in das jeweilige PNG. Die Baumhälften ergeben an der Naht zusammen immer denselben Baum. Die Mauer bleibt im gesamten Anschlussbereich durchgehend. Hecke, Gehweg, Bordstein und Straße laufen über die Naht weiter. Variiere das Motiv zwischen den festen Randbereichen.
- Verwende eine flache 2D-Seitenansicht mit waagerechter Fahrspur und geringer sichtbarer Bodentiefe. Schließe offene Flächen bei Bedarf hinten mit einer niedrigen Mauer oder Bepflanzung ab. Halte den Bürgersteig und die Fahrspur frei.
- Prüfe vor dem Einbau die Ebenen übereinander und die Vordergrundabschnitte Kante an Kante in der vorgesehenen Reihenfolge bei 1440 × 480 px. Korrigiere sichtbare Nähte, Höhenversätze und abrupte Übergänge.
- Bewahre die Grafiken des bisherigen Designs unter `assets/img/old-images/old-design` auf. Die Spielpfade zeigen dorthin, bis passende Grafiken des neuen Designs eingebunden sind.
- Archiviere alte, ungenutzte Bilder und Entwürfe unter `assets/img/old-images`.
- Verwende für Bilddateien und ihre Ordner englische Namen in Kleinbuchstaben mit Bindestrichen.

Orientiere neue Bilder und Animationsbilder an den vorhandenen Grafiken des Projekts. Bei einer Animationssequenz müssen Figur und Objekte über alle Einzelbilder hinweg in ihren Merkmalen konsistent bleiben: insbesondere Proportionen, Kleidung, Farben, Perspektive und Größe. Vermeide unbeabsichtigte Verformungen und sprunghafte Positionsänderungen. Prüfe die Einzelbilder vor ihrer Verwendung gemeinsam als Animation und korrigiere sichtbare Abweichungen.

Prüfe vor dem Einbau neuer Bilder, ob ihr Seitenverhältnis und ihre Darstellung zu den Abmessungen des jeweiligen Spielobjekts passen, damit die Grafiken nicht verzerrt werden. Prüfe bei Animationen zusätzlich einheitliche Bildabmessungen und die Position des Motivs über alle Einzelbilder hinweg.

Stelle Animationsbilder immer als einzelne Bilddateien bereit, nicht als gesamtes Sprite-Sheet.

Bei ausdrücklich angeforderten Sprite-Sheets muss jede Zelle quadratisch sein (Seitenverhältnis 1:1). Verwende für alle Zellen eines Sheets dieselbe Breite und Höhe in Pixeln.
