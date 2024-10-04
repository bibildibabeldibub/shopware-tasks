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

2b.) Erweitere...

Quellen:
- https://developer.shopware.com/
- https://developer.shopware.com/docs/guides/plugins/themes/create-a-theme.html
- https://developer.shopware.com/docs/guides/plugins/overview.html
- https://www.matthias-zeis.com/shopware-6/programmieren-lernen-links-tipps-tutorials

## 3.) Aufgabe

Die Hauptnavigation soll um eine neue Landingpage namens "Filiale" ergänzt werden. 

Über ein neues Plugin namens `SeidemannCmsBlocks` soll ein neuer CMS Block zuweisbar sein.

3a.) Lege im Admin unter den Erlebniswelten - Landingpage ein neues Layout names "Stores" an.

3b.) Füge Deinen neuen CMS Block dem neuen Layout "Store" hinzu.

3c.) Lege im Admin einen neuen Navigationspunkt "Filialen" an mit der Entität Landingpage.
     Der Name der Landingpage soll "Unsere Filiale" lauten, diese Landingpage soll dem Layout "Store" zugewiesen sein.

Quellen:
- https://www.matheusgontijo.com/2022/01/24/how-to-create-a-plugin-in-shopware-6
- https://developer.shopware.com/docs/guides/plugins/plugins/content/cms/add-cms-block.html
- https://developer.shopware.com/docs/guides/plugins/plugins/content/cms/add-cms-block.html#registering-a-new-block

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
