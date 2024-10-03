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
## 3.) Aufgabe
## 4.) Aufgabe
## 5.) Aufgabe (Optional)