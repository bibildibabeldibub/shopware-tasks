# Seidemann Web GmbH - Testaufgaben

## 1.) Aufgabe

Installiere Dir eine frische Shopware Instanz 6.6.* auf Deinen lokalen Debian Rechner.

Verwende Deine bevorzugte Variante um Dir eine Shopware Instanz aufzusetzen.

Nutze beim Setup im Webbrowser die Demodaten.

PayPal Konfiguration kann übersprungen werden.

Erweiterungen Empfehlungen können ebenfalls übersprungen werden mit "Weiter".

Shopware Account und Shopware Store kann übersprungen werden.

-------------------------------------------------------------------------------------------------------------------------------
- Hint: Beachte die Systemvoraussetzungen. 
-------------------------------------------------------------------------------------------------------------------------------

Es gibt unterschiedliche Varianten sich eine lokale Entwicklungsumgebung aufzusetzen z.B.

- Devenv
- Dockware
- Symfony Flex (seit 6.5.*)
- DDEV (Docker muss installiert sein + DDEV installieren)
- und viele Varianten mehr

Quellen:
- https://developer.shopware.com/docs/guides/installation/
- https://developer.shopware.com/docs/guides/installation/requirements.html
- https://www.matthias-zeis.com/shopware-6/programmieren-lernen-links-tipps-tutorials/symfony-flex-recipe
- https://ddev.readthedocs.io/en/stable/
- https://ddev.readthedocs.io/en/stable/users/install/docker-installation/#docker-installation-linux
- https://docs.docker.com/engine/install/debian/
- https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/#debianubuntu

-------------------------------------------------------------------------------------------------------------------------------
- Hint: Für die Docker-Umgebung nutze ich gerne DDEV.
-------------------------------------------------------------------------------------------------------------------------------

Beispiel:

```
mkdir ClientProjects
cd ClientProjects
mkdir shopware.seidemann.dev
cd shopware.seidemann.dev
ddev config --project-name="shopware.seidemann.dev" --project-type="php" --docroot="shopware/public" --webserver-type="apache-fpm" --php-version="8.3" --composer-version="2"
ddev start
ddev ssh
rm -rf shopware/
composer create-project shopware/production shopware
```

MariaDB Zugangsdaten DDEV:

Server: db
Benutzer: db
Passwort: db
Datenbank-Name: db

## 2.) Aufgabe

Ziel ist es das Storefront Standard Theme mit eigenem Child-Theme zu erweitern.

-------------------------------------------------------------------------------------------------------------------------------
- Hint: Nutze die Shopware Developer Dokumentation.
-------------------------------------------------------------------------------------------------------------------------------

2a.) Nutze die CLI um Dir Plugin Theme zu generieren zu lassen.

Beispiel:

```
ddev start
ddev ssh
cd shopware/
bin/console theme:create SeidemannStoreTheme
bin/console plugin:refresh
bin/console plugin:install --activate SeidemannStoreTheme
bin/console cache:clear
```

2b.) Verändere mithilfe des Plugin Theme die Produktdetailseite.

Die Produktdetailseite soll designtechnisch sich am Vorbild des Shopy Themes https://demo.htmlhunters.com/shopy/product.html orientieren.

Lade Dir dazu die 3 Produktbilder herunter und verändere zu Testzwecken das Produkt SWDEMO10007.1 oder lege ein neues Produkt an um Deine 
Designanpassungen zu testen.

Anbei habe ich Dir zwei Screenshots vom Ist- und Soll-Stand des Layouts beigefügt.

Ziel ist es auf der Desktop-Ansicht die Platzierungen der Inhaltselemente zu ändern, dass die Beschreibung und Bewertung Tabs sich wie
im Soll-Stand auf der rechten Seite befinden.

Die Beschreibung und Bewertung soll wie im Soll-Stand ausklappbar sein.

Orientiere Dich beim Design an das Bootstrap CSS Framework für die Design-Elemente wie z.B. das Ausklappen der Beschreibung und Bewertung.

Quellen:
- https://developer.shopware.com/
- https://developer.shopware.com/docs/guides/plugins/themes/create-a-theme.html
- https://developer.shopware.com/docs/guides/plugins/overview.html
- https://www.matthias-zeis.com/shopware-6/programmieren-lernen-links-tipps-tutorials
- https://getbootstrap.com/
- https://themes.getbootstrap.com/product/shopy/
- https://demo.htmlhunters.com/shopy/product.html

## 3.) Aufgabe

Die Hauptnavigation soll um eine neue Landingpage namens "Filiale" ergänzt werden. 

Auf dieser Landingpage soll eine Karte von YellowMap mit der Anschrift der Seidemann Web GmbH eingebunden werden.

Schau Dir die Quellenangabe von YellowMap mit der Anleitung an und überlege wie Du den JavaScript-Code und HTML-Code einbindest.

Ein API-Key erhältst Du über die kostenfreie Registrierung unter https://www.smartmaps.net/ 

Ein Screenshot wie es später im Frontend Deines Demo-Shops aussehen soll mit der Karteneinbindung ist diesem Repository beigefügt.

Nutze gerne die ganze Breite aus, der Screenshot ist ein Beispiel zur Verdeutlichung der Anforderung.

-------------------------------------------------------------------------------------------------------------------------------
- Hint: Prüfe, ob sich die Anforderung "ohne" Plugin lösen lässt oder ob Du lieber ein Plugin dafür anlegen würdest.
-------------------------------------------------------------------------------------------------------------------------------

Potenzielle Lösungsvariante mithilfe von einem Plugin, indem neuer CMS Block erstellt wird.

Über ein neues Plugin namens `SeidemannCmsBlocks` soll ein neuer CMS Block zuweisbar sein.

3a.) Lege im Admin unter den Erlebniswelten - Landingpage ein neues Layout names "Stores" an.

3b.) Füge Deinen neuen CMS Block dem neuen Layout "Store" hinzu.

3c.) Lege im Admin einen neuen Navigationspunkt "Filialen" an mit der Entität Landingpage.
     Der Name der Landingpage soll "Unsere Filiale" lauten, diese Landingpage soll dem Layout "Store" zugewiesen sein.

Quellen:
- https://www.matheusgontijo.com/2022/01/24/how-to-create-a-plugin-in-shopware-6
- https://developer.shopware.com/docs/guides/plugins/plugins/content/cms/add-cms-block.html
- https://developer.shopware.com/docs/guides/plugins/plugins/content/cms/add-cms-block.html#registering-a-new-block
- https://www.yellowmap.com/
- https://docs.yellowmap.com/howto/
- https://docs.yellowmap.com/smartmaps-javascript/anleitung/erste-schritte/
- https://www.smartmaps.net/

## 4.) Aufgabe (Optional)

Da wir neben Shopware auch mit OXID eShop arbeiten, wäre das Ziel dieser Aufgabe eine lokale OXID eShop Community Edition Instanz
bei Dir Lokal auf Deinen Rechner zu installieren.

Nutze dafür die Demodaten und das Apex Theme.

-------------------------------------------------------------------------------------------------------------------------------
- Hint: Beachte die Systemvoraussetzungen. 
-------------------------------------------------------------------------------------------------------------------------------

Beispiel:

```
cd ClientProjects
mkdir oxid.seidemann.dev
cd oxid.seidemann.dev
ddev config --project-name="oxid.seidemann.dev" --project-type="php" --docroot="oxid/source" --webserver-type="apache-fpm" --php-version="8.2" --composer-version="2"
ddev start
ddev ssh
rm -rf oxid/
# composer self-update 2.2.23
composer create-project --no-dev oxid-esales/oxideshop-project oxid dev-b-7.1-ce
```

Quellen:
- https://docs.oxid-esales.com/eshop/de/latest/installation/neu-installation/installation-vorbereiten.html
- https://forum.oxid-esales.com/t/erste-schritte-fur-anwender-handler-und-entwickler/98357
- https://github.com/oxid-esales
