<a name="readme-top"></a>

[![CI/CD (GitHub Container Registry)](https://github.com/go-hslu/weblab_project/actions/workflows/docker.yml/badge.svg)](https://github.com/go-hslu/weblab_project/actions/workflows/docker.yml)
[![CI/CD (GitHub Pages)](https://github.com/go-hslu/weblab_project/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/go-hslu/weblab_project/actions/workflows/gh-pages.yml)
[![Documentation (PDF)](https://github.com/go-hslu/weblab_project/actions/workflows/markdown.yml/badge.svg)](https://github.com/go-hslu/weblab_project/actions/workflows/markdown.yml)

<br/>
<div align="center">
  <a href="https://github.com/go-hslu/weblab_project">
    <img src="res/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">WEBLAB Radar</h3>

  <p align="center">
    Hochschule Luzern, Modul WEBLAB (Web Programming Lab), Projektdokumentation
    <br/>
    <a href="https://github.com/go-hslu/weblab_project/issues">User Stories (Issues)</a>
    ·
    <a href="https://go-hslu.github.io/weblab_project/">GitHub Pages</a>
    ·
    <a href="https://github.com/orgs/go-hslu/packages">Docker image</a>
  </p>
</div>

## 1 Einführung und Ziele

Im Modul WEBLAB (Web Programming Lab) an der Hochschule soll ein Web-Projekt mit den behandelten Technologien erarbeitet werden. Die Projektartefakte sind auf dem [GitHub Repository](https://github.com/go-hslu/weblab_project) einsehbar.

Es wird die vorgeschlagene Projektidee eines [Technologie-Radars](https://www.thoughtworks.com/radar) verfolgt. Dabei ist das Ziel, dass innerhalb eines Unternehmens eine Übersicht auf die in Projekten verwendeten Technologien & Tools verschafft wird. In einer Visualisierung ähnlich zu einem Radar werden Technologien & Tools als Punkte dargestellt. Über die Quadranten/Sektoren werden diese kategorisiert (Frameworks, Tools, Languages, Platforms, Techniques..) und über die nähe zur Mitte der Einsatz-Status (Hold, Assess, Trial, Adopt) angezeigt.

| [![nichtgian](https://avatars.githubusercontent.com/nichtgian?s=100)<br/><sub>Gian Ott</sub>](https://www.linkedin.com/in/nichtgian/)<br/>Entwickler & Autor |
|---|

### 1.1 Aufgabenstellung

In Einzelarbeit soll mit einem totalen Aufwand von ca. 60 Stunden ein Web-Projekt realisiert werden. Die Artefakte aus dem Projekt zu 70% und Präsentation zu 30% ergeben die Modulnote. Gefordert werden folgende Inhalte:

**Projekt (70%)**
- Architekturdokumentation (35%)
- Fazit & Reflexion (20%)
- Arbeitsjournal (10%)
- Softwareartefakte (35%)

**Präsentation (30%)**
- Aufbau, Verständlichkeit (30%)
- Präsentationsartefakte (30%, Abgabe nach der Präsentation, Inhalt für 5 Minuten)
- Einhaltung der Timebox 5 Minuten (10%)
- Beantwortung Fragen (30%)

### 1.2 Qualitätsziele

- **Security**: Der Radar ist intern für alle Mitarbeiter (User) verfügbar. Inhalte können nur von spezifischen Rollen (CTO, Tech-Lead, Admin) nach Authentifizierung (E-Mail & Passwort) verändert werden. Sensible Daten wie das Passwort werden nur gehashed abgespeichert.
- **Performance**: Die Inhalte werden unter Normalbedingungen (Kabelgebunden oder 5G) innert 1s geladen.
- **Usability**: Das UI ist für die Geräte Mobile & Desktop optimiert, verwendet ein schlichtes & übersichtliches Design mit auf dem Gerät erwartbarem Verhalten (z.B Navigationsleiste hinter Hamburger-Icon auf Mobile)
- **Traceability**: Anpassungen an den Technologien werden historisiert und Anmeldungen auf der Adminseite protokolliert.


## 2 Kontextabgrenzung

Die [Anforderungen](https://github.com/web-programming-lab/web-programming-lab-projekt/blob/main/Technologie-Radar.md) der vorgeschlagenden Projektidee werden mehrheitlich übernommen. So sollen bestimmte Rollen (Tech-Lead, CTO & Admins) neue Technologien erfassen dürfen, und alle Mitarbeiter (User) die publizierten Technologien einsehen. 

### 2.1 Abgrenzungen / Änderungen

Prinzipiell wird von Grund auf eine eigene Lösung eines Technologie-Radars mit Hilfe von Web-Technologien erarbeitet. Dazu gehören das Fronted, Backend und die Persistierung. Kleinere Anpassungen, welche ich jedoch vornehmen möchte sind:
- **Projekte**: Projekte erfassen, und diesen Technologien zuordnen. Auf einem Radar könnte man so häufig verwendete Technologien als grössere Punkte darstellen.
- **Kategorien**: Die Kategorien, zu welchen Technologien zugeordnet werden, sollen die User selber festlegen können. Dies könnte bedeuten, dass im Radar mehr als 4 Quadranten angezeigt würden.
- **Radar Visualisierung**: Den Radar werde ich aufgrund des grösseren Aufwands für eine Visualisierung nur als Tabelle darstellen.

### 2.2 Anforderungen (User Stories)

Folglich wurden User Stories übernommen, abgeleitet oder neue definiert. Diese sind auf GitHub als [Issues](https://github.com/go-hslu/weblab_project/issues) hinterlegt. Hier eine Übersicht der User Stories samt priorisierung nach MoSCoW:


| Id | User Story                                            | Priorität     | Status       |
|----|-------------------------------------------------------|---------------|--------------|
| 01 | Anmelden Technologie-Radar-Administration             | 🟡 3. Could  | 🎯 Todo      |
| 02 | Technologie erfassen                                  | 🔴 1. Must   | 🎯 Todo      |
| 03 | Technologie publizieren                               | 🟠 2. Should | 🎯 Todo      |
| 04 | Technologie ändern                                    | 🟠 2. Should | 🎯 Todo      |
| 05 | Technologie-Einordnung ändern                         | 🟠 2. Should | 🎯 Todo      |
| 06 | Anmelden am Technologie-Radar-Viewer                  | 🟡 3. Could  | 🎯 Todo      |
| 07 | Technologien anzeigen                                 | 🔴 1. Must   | 🎯 Todo      |

Legende 1: MoSCoW-Priorisierung
- 🔴 1. Must
- 🟠 2. Should
- 🟡 3. Could
- 🟢 4. Won't

Legende 2: Umsetzungsstatus
- 🎯 Todo
- 🛠️ In progress
- ✅ Done

### 2.2 Technischer Kontext

In einem Frontend, dem Radar (Radar-App oder Radar Applikation), werden Technologie & Projekt Daten erfasst. Diese werden als JSON an eine REST API übermittelt und die entsprechende CRUD-Operation durchgeführt (Create/Erstellen, Read/Abfragen, Update/Modifizieren oder Delete/Löschen).

![Kontext Diagramm](res/Context-Diagram.png)


## 3 Lösungsstrategie
### 3.1 Technologieentscheidungen

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

#### 3.1.1 TypeScript

Sowohl im Frontend als auch Backend werde ich [TypeScript](https://www.typescriptlang.org/) verwenden. Die explizite Typisierung sehe ich als grossen Vorteil gegenüber Vanilla JavaScript für einen leichter lesbareren Code.

#### 3.1.2 Angular (Frontend)

[Angular](https://angular.io/) ermöglicht das Erstellen von Single Page Applications. Es ist ein etabliertes und in der Schweiz sehr häufig verwendetes Framework. Ich persönlich hatte ursprünglich Angular 2 / Angular 4 um ca. 2017 in einem Tutorial/Video-Kurs kennengelernt. Neuere Features wie Signals etc. kenne ich jedoch nicht. Da ich aber künftig bei der Arbeit auch Angular einsetzten werde, möchte ich in diesem Arbeit mein Wissen über Angular auffrischen und vertiefen. 

Besonderen Vorteil sehe ich bei der Modularisierung, dem Routing/Router und dem Binding (2-way), was heute Standart in praktisch allen SPA-Frameworks (Vue.js, Svelte etc.) ist.

#### 3.1.3 Angular Material (CSS)

[Angular Material](https://material.angular.io/) liefert forgefertigte UI Komponenten nach Material Design Optik. Die Integration mit Angular ist sehr einfach.

#### 3.1.4 Node / Express (Backend)

Im [Node](https://nodejs.org/en) Backend werde ich [Express](https://expressjs.com/) verwenden, um einfach APIs definieren zu können. 

#### 3.1.5 TypeORM / MySQL (ORM & Database)

[TypeORM](https://typeorm.io/) nimmt mir einen Grossteil der Arbeit für die Persistierung ab. Zudem können mit TypeORM (bzw generell mit OR-Mappern) Migrationen bei verändertem (DB-)Schema durchgeführt werden. Dies ist in der professionellen Entwicklung eine enorme Abhilfe.

#### 3.1.6 JWT (Authentication)

Für die Authentifizierung bzw die Autorisierung (Zugriffssteuerung auf Ressourcen) werde ich [JSON Web Tokens](https://jwt.io/) einsetzten. Dabei handelt es sich um eine "Token-based authentication", wofür keine Session eröffnet wird. Ein weiterer Vorteil ist, dass z.B. bei Social Media Plattformen registrierte authentifiziert werden können, so müssen nicht die klassichen Anmeldedaten Username/Passwort abgespeichert werden. Für die Implementierung werde ich als Library [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) einsetzten.

Sollte ich selbst Passwörter auf der DB speichern müssen, werde ich diese salten & hashen.

#### 3.1.7 GitHub Actions / Vercel (CI/CD)

Änderungen (Commits) an der Applikation sollen automatisch einen Build im [GitHub Repository](https://github.com/go-hslu/weblab_project) über GitHub Actions ausführen und auf die [GitHub Pages](https://go-hslu.github.io/weblab_project/) deployt werden. Dies möchte ich als Übung für mich selbst umsetzten, da ich bis jetzt keine Erfahrung mit GitHub Actions habe und ich darin einen grossen Nutzen für meine eigenen Projekte sehe. Desweiteren würde ich auch gerne einen automatischen Build eines Docker Containers mit Actions auslösen und diesen in die [GitHub Container Registry](https://github.com/orgs/go-hslu/packages) als Package deployen.

Für die Projektabgabe versuche ich das Deployment mit dem Vorschlag [Vercel](https://vercel.com/) umzusetzten oder das Docker image zur Verfügung zu stellen.

<!--
Kurzer Überblick über die grundlegenden Entscheidungen und
Lösungsansätze, die Entwurf und Implementierung des Systems prägen.
Hierzu gehören:

-   Technologieentscheidungen
-   Entscheidungen über die Top-Level-Zerlegung des Systems,
    beispielsweise die Verwendung gesamthaft prägender Entwurfs- oder
    Architekturmuster,
-   Entscheidungen zur Erreichung der wichtigsten Qualitätsanforderungen
    sowie
-   relevante organisatorische Entscheidungen, beispielsweise für
    bestimmte Entwicklungsprozesse oder Delegation bestimmter Aufgaben
    an andere Stakeholder.
-->


## 4 Bausteinsicht

<!--
Die Bausteinsicht zeigt die statische Zerlegung des Systems in Bausteine
(Module, Komponenten, Subsysteme, Klassen, Schnittstellen, Pakete,
Bibliotheken, Frameworks, Schichten, Partitionen, Tiers, Funktionen,
Makros, Operationen, Datenstrukturen, ...) sowie deren Abhängigkeiten
(Beziehungen, Assoziationen, ...)

Diese Sicht sollte in jeder Architekturdokumentation vorhanden sein. In
der Analogie zum Hausbau bildet die Bausteinsicht den *Grundrissplan*.
-->

### 4.1 Whitebox Gesamtsystem

<!--
An dieser Stelle beschreiben Sie die Zerlegung des Gesamtsystems anhand
des nachfolgenden Whitebox-Templates. Dieses enthält:

-   Ein Übersichtsdiagramm
-   die Begründung dieser Zerlegung
-   Blackbox-Beschreibungen der hier enthaltenen Bausteine. Dafür haben
    Sie verschiedene Optionen:
    -   in *einer* Tabelle, gibt einen kurzen und pragmatischen
        Überblick über die enthaltenen Bausteine sowie deren
        Schnittstellen.
    -   als Liste von Blackbox-Beschreibungen der Bausteine, gemäß dem
        Blackbox-Template (siehe unten). Diese Liste können Sie, je nach
        Werkzeug, etwa in Form von Unterkapiteln (Text), Unter-Seiten
        (Wiki) oder geschachtelten Elementen (Modellierungswerkzeug)
        darstellen.
-->

### 4.2 ER-Diagramm

Die Entitäten für Technologien, Projekte und User sind wie folgt geplant:

![ER-Diagramm](res/ER-Diagram.png)


## 5 Verteilungssicht 
### 5.1 Docker

1. Installiere und starte [Docker](https://www.docker.com/get-started/).
2. Beziehe das Docker image von der GitHub Container registry. 
   ```sh
   docker pull ghcr.io/go-hslu/weblab_project:latest
   ```
3. Erstelle einen Docker Container aus dem Image und führe diesen aus.
   ```sh
   docker run -p 8080:8080 -e SERVER_PORT=8080 ghcr.io/go-hslu/weblab_project:latest
   ```
4. Öffne den Browser mit folgender URL
   ```sh
   http://localhost:8080
   ```

<!--
Die Verteilungssicht beschreibt:
1.  die technische Infrastruktur, auf der Ihr System ausgeführt wird,
    mit Infrastrukturelementen wie Standorten, Umgebungen, Rechnern,
    Prozessoren, Kanälen und Netztopologien sowie sonstigen
    Bestandteilen, und
2.  die Abbildung von (Software-)Bausteinen auf diese Infrastruktur.

Häufig laufen Systeme in unterschiedlichen Umgebungen, beispielsweise
Entwicklung-/Test- oder Produktionsumgebungen. In solchen Fällen sollten
Sie alle relevanten Umgebungen aufzeigen.

Nutzen Sie die Verteilungssicht insbesondere dann, wenn Ihre Software
auf mehr als einem Rechner, Prozessor, Server oder Container abläuft
oder Sie Ihre Hardware sogar selbst konstruieren.

Aus Softwaresicht genügt es, auf die Aspekte zu achten, die für die
Softwareverteilung relevant sind. Insbesondere bei der
Hardwareentwicklung kann es notwendig sein, die Infrastruktur mit
beliebigen Details zu beschreiben.
-->

### 5.1 Infrastruktur Ebene 1

<!--
An dieser Stelle beschreiben Sie (als Kombination von Diagrammen mit
Tabellen oder Texten):
-   die Verteilung des Gesamtsystems auf mehrere Standorte, Umgebungen,
    Rechner, Prozessoren o. Ä., sowie die physischen Verbindungskanäle
    zwischen diesen,
-   wichtige Begründungen für diese Verteilungsstruktur,
-   Qualitäts- und/oder Leistungsmerkmale dieser Infrastruktur,
-   Zuordnung von Softwareartefakten zu Bestandteilen der Infrastruktur
-->


## 6 Querschnittliche Konzepte

<!--
Dieser Abschnitt beschreibt übergreifende, prinzipielle Regelungen und
Lösungsansätze, die an mehreren Stellen (=*querschnittlich*) relevant
sind.

Solche Konzepte betreffen oft mehrere Bausteine. Dazu können vielerlei
Themen gehören, beispielsweise:
-   Modelle, insbesondere fachliche Modelle
-   Architektur- oder Entwurfsmuster
-   Regeln für den konkreten Einsatz von Technologien
-   prinzipielle --- meist technische --- Festlegungen übergreifender
    Art
-   Implementierungsregeln

Manche dieser Themen lassen sich nur schwer als Baustein in der
Architektur unterbringen (z.B. das Thema „Sicherheit").

Kann vielfältig sein:
-   Konzeptpapiere mit beliebiger Gliederung,
-   übergreifende Modelle/Szenarien mit Notationen, die Sie auch in den
    Architektursichten nutzen,
-   beispielhafte Implementierung speziell für technische Konzepte,
-   Verweise auf „übliche" Nutzung von Standard-Frameworks
    (beispielsweise die Nutzung von Hibernate als Object/Relational
    Mapper).

Eine mögliche (nicht aber notwendige!) Untergliederung dieses
Abschnittes könnte wie folgt aussehen (wobei die Zuordnung von Themen zu
den Gruppen nicht immer eindeutig ist):
-   Fachliche Konzepte
-   User Experience (UX)
-   Sicherheitskonzepte (Safety und Security)
-   Architektur- und Entwurfsmuster
-   Unter-der-Haube
-   Entwicklungskonzepte
-   Betriebskonzepte
-->


## 7 Architekturentscheidungen

<!--
Wichtige, teure, große oder riskante Architektur- oder
Entwurfsentscheidungen inklusive der jeweiligen Begründungen. Mit
\"Entscheidungen\" meinen wir hier die Auswahl einer von mehreren
Alternativen unter vorgegebenen Kriterien.

Wägen Sie ab, inwiefern Sie Entscheidungen hier zentral beschreiben,
oder wo eine lokale Beschreibung (z.B. in der Whitebox-Sicht von
Bausteinen) sinnvoller ist. Vermeiden Sie Redundanz. Verweisen Sie evtl.
auf Abschnitt 4, wo schon grundlegende strategische Entscheidungen
beschrieben wurden.

Verschiedene Möglichkeiten:
-   ADR ([Documenting Architecture
    Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions))
    für jede wichtige Entscheidung
-   Liste oder Tabelle, nach Wichtigkeit und Tragweite der
    Entscheidungen geordnet
-   ausführlicher in Form einzelner Unterkapitel je Entscheidung
-->


## 8 Qualitätsanforderungen

<!--
Dieser Abschnitt enthält möglichst alle Qualitätsanforderungen als
Qualitätsbaum mit Szenarien. Die wichtigsten davon haben Sie bereits in
Abschnitt 1.2 (Qualitätsziele) hervorgehoben.

Nehmen Sie hier auch Qualitätsanforderungen geringerer Priorität auf,
deren Nichteinhaltung oder -erreichung geringe Risiken birgt.
-->


## 9 Risiken und technische Schulden

<!--
Eine nach Prioritäten geordnete Liste der erkannten Architekturrisiken
und/oder technischen Schulden.
-->


## 10 Fazit & Reflexion
<!-- TODO -->


## 11 Glossar
## 11.1 Abkürzungsverzeichnis

| Abkürzung [A-Z]       | Begriff                                                                                           |
|-----------------------|---------------------------------------------------------------------------------------------------|
| **CRUD**              | Create Read Update Delete                                                                         |
| **JWT**               | JSON Web Token                                                                                    |
| **REST**              | Representational State Transfer                                                                   |
| **SPA**               | Single Page Application                                                                           |

## 11.2 Technische- und Projektspezifische Begriffe

| Begriff [A-Z]         | Definition und Beschreibung                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------|
| **Angular**           | Angular ist ein auf JavaScript basierendes Frontend-Web-Framework. Es wurde von Google entwickelt und ist aktuell in der Version 17. Es verfolgt den "Single Page Application"-Ansatz, wobei zuerst ein Grundgerüst der Webseite geladen wird und später nur noch Daten nachgeladen werden sollen. |
| **Express**           | Express.js ist ein JavaScript Backend-Framework für Node.js. Es erleichtert das Erstellen von (RESTful) APIs und WebServern. |
| **GitHub Container Registry** | Über die GitHub Container Registry können (Docker) Container als Package verteilt werden. Diese sind über die URL `https://ghcr` erreichbar. |
| **GitHub Pages**      | GitHub Pages ermöglicht das Hosten von statischen Resourcen (HTML, CSS & JavaScript) direkt auf dem Repository. |
| **JSON Web Token**    | Bei JWTs handelt es sich um Zugriff(Access)-Tokens. Über diese Credentials wird der Zugriff auf Resourcen gewährt (Authorization). Eine Besonderheit ist, dass keine Session auf dem Server eröffnet werden muss und stattdessen das übermittelte Token validiert wird.          |
| **MySQL**             | MySQL ist ein relationales DBMS (Database Management System).                                     |
| **Node**              | Node.js ist eine plattformunabhängige JavaScript Laufzeitsumgebung (runtime environment). Über die V8 JavaScript engine kann somit JavaScript Code ausserhalb eines Browsers eingesetzt werden. |
| **TypeORM**           | TypeORM ist ein OR-Mapper und wird als Bindeglied zwischen der Datenbank (Relational) und dem objekt-orientiertem Backend verwendet. |
| **TypeScript**        | TypeScript fügt statische Typisierung und weitere Sprachkonstrukte zu JavaScript hinzu. TS wird immer zu JS transkompiliert. |


## 12 Arbeitsjournal

| Datum              | Aufwand | Titel                                    | Beschreibung                                     |
|--------------------|---------|------------------------------------------|--------------------------------------------------|
| **Mo, 05.02.2024** | 2h      | Projektidee, Vorlage, GitHub Repository  | Ich werde den Projektvorschlag des TechRadars verfolgen. Ich erstellte mir zunächst ein GitHub Repository und legte eine grobe Ordnerstruktur fest. Dokumentieren werde ich nach arc42, wofür ich die Vorlage (DE, 8.2) im Markdown-Format verwende und das README.md File ersetzte. Ich probierte zudem GitHub Actions aus, um den Build einer Angular Applikation zu automatisieren und die Webseite zu GitHub Pages zu deployen. Das Kontext Diagramm soll grob das System aufzeigen und das ER-Diagramm zeigt grob die geplanten Entitäten auf. |
| **Di, 06.02.2024** | 4h      | Node, Docker, GitHub Actions             | Festgelegt habe ich für das Frontend mit Angular und im Backend mit Node, Express (Web Server), TypeORM (OR-Mapper) und MySQL zu arbeiten. Sowohl im Frontend, als auch im Backend verwende ich TypeScript. Ich erstellte ein Dockerfile, um die gesamte Applikation als Docker Container einfach deployen zu können. Mit GitHub Actions werden sowohl die Angular Applikation gebuildet und in die GitHub Pages deployt als auch ein Docker image mit Front- und Backend erstellt und in die der GitHub Container registry als Package verteilt. |
| **Mi, 07.02.2024** | 7h      | Dokumentation pdf, Projekt Check-In, Angular & API | In einer GitHub Action wird aus der Dokumentation (README im Markdown Format) ein PDF generiert und als Artefakt gespeichert. Für die heutige Zwischenabgabe des Projekt-Check ins habe ich die geforderten Inhalte (User Stories, Tech-Stack) ergänzt. In Angular erstellte ich die Struktur, fügte Routing hinzu und definierte Services. Diese greifen bereits auf das Backend zu, welches vorläufig statisches JSON zurückgibt. |
| **Do, 08.02.2024** | 6h      | Tech Table, TypeOrm Entities, Design     | Ich installierte TypeOrm auf dem Backend und setzte es mit dem MySQL Driver auf. Für Techs, Projects, Users und Logs erstellte ich Entities gemäss dem ER Diagramm. Im Frontend erstellte ich mithilfe der Angular Material UI Komponenten eine Navigation (SideNav) und Footer. Für die Technologien erstellte ich ein Feature Modul. Die Techs werden über den TechService von der API mit einem TypeORM Repository von der DB geladen und als JSON übergeben. Dargestellt werden diese in einer Tabelle und ein Eintrag kann über die Detailansicht angesehen werden. |
| **Fr, 09.02.2024** | 9h      | Authentifikation mit JWT, SeedData       | Die Authentifizierung erfolgt nun über JWTs. Loggt sich ein User ein, werden auf dem Backend die Credentials überprüft. Es wird ein JWT Token zurückgegeben. Über einen Interceptor wird bei jedem Request dieses Token im Header mitgegeben. Wird eine Seite aufgerufen, welche eine besonderere Autorisierung benötigt (Rolle) wie für das Anpassen von Technologien, so wird das Token ausgelesen und die Rolle überprüft. Die Entities sind fertig und werden initial mit SeedData befüllt. |
| **Sa, 10.02.2024** | 2h      | UI Verbesserungen                        | In der Tabelle kann nun über ein Suchfeld nach Technologien gesucht & gefiltert werden. Diese Einträge lassen sich aufklappen, um die Beschreibung anzeigen zu lassen. Die Detailansicht und Löschfunktionalität sind hinter einem Editieren/Löschen-Button versteckt, welche nur berechtigen Usern angezeigt wird. Die Navigationsleiste ist für Desktop fixiert und für Mobile zusammenklappbar. |
| **Total:**         | 30h     |                                          |                                                   |


**About arc42** Template Version 8.2, Januar 2023. 
Created, maintained and © by Dr. Peter Hruschka, Dr. Gernot Starke and contributors. View <https://arc42.org>.

<p align="right">(<a href="#readme-top">↑ zurück zum Anfang</a>)</p>