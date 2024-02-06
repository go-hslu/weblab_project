# WEBLAB Projekt
## 1 Einführung und Ziele

Im Modul WEBLAB (Web Programming Lab) an der Hochschule soll ein Web-Projekt mit den behandelten Technologien erarbeitet werden.

Es wird die vorgeschlagene Projektidee eines ["Technologie-Radars"](https://www.thoughtworks.com/radar) verfolgt. Dabei ist das Ziel, dass innerhalb eines Unternehmens eine Übersicht auf die in Projekten verwendeten Technologien & Tools verschafft wird. In einem einer Visualisierung ähnlich zu einem Radar werden Technologien & Tools als Punkte dargestellt. Über die Quadranten werden diese kategorisiert.

### 1.1 Aufgabenstellung

In Einzelarbeit soll mit einem totalen Aufwand von ca. 60 Stunden ein Web-Projekt realisiert werden. Die Artefakte aus dem Projekt zu 70% und Präsentation zu 30% ergeben die Modulnote. Gefordert werden folgende Inhalte:

Projekt (70%)
- Architekturdokumentation (35%)
- Fazit & Reflexion (20%)
- Arbeitsjournal (10%)
- Softwareartefakte (35%)

Präsentation (30%)
- Aufbau, Verständlichkeit (30%)
- Präsentationsartefakte (30%, Abgabe nach der Präsentation, Inhalt für 5 Minuten)
- Einhaltung der Timebox 5 Minuten (10%)
- Beantwortung Fragen (30%)

### 1.2 Qualitätsziele

- **Security**: Der Radar ist intern für alle Mitarbeiter verfügbar. Inhalte können nur von spezifischen Rollen (CTO, Tech-Lead, Admin) nach Authentifizierung (E-Mail & Passwort) verändert werden. Sensible Daten wie das Passwort werden nur gehashed abgespeichert.
- **Performance**: Die Inhalte werden unter Normalbedingungen (Kabelgebunden oder 5G) innert 1s geladen.
- **Usability**: Das UI ist für die Geräte Mobile & Desktop optimiert, verwendet ein schlichtes & übersichtliches Design mit auf dem Gerät erwartbarem Verhalten (z.B Navigationsleiste hinter Hamburger-Icon auf Mobile)
- **Traceability**: Anpassungen an den Technologien werden historisiert und Anmeldungen auf der Adminseite protokolliert.


## 2 Kontextabgrenzung

Die [Anforderungen](https://github.com/web-programming-lab/web-programming-lab-projekt/blob/main/Technologie-Radar.md) sind für bei der vorgeschlagenden Projektidee gegeben. So sollen bestimmte Rollen (Tech-Lead, CTO & Admins) neue Technologien erfassen dürfen, und alle Mitarbeiter (User) die publizierten Technologien einsehen. 

### 2.1 Abgrenzungen / Änderungen

Prinzipiell wird von Grund auf eine eigene Lösung eines Technologie-Radars mit Hilfe von Web-Technologien erarbeitet. Dazu gehören das Fronted, Backend und die Persistierung. Kleinere Anpassungen, welche ich jedoch vornehmen möchte sind:
- Projekte: Projekte erfassen, und diesen Technologien zuordnen. Auf einem Radar könnte man so häufig verwendete Technologien als grössere Punkte darstellen.
- Kategorien: Die Kategorien, zu welchen Technologien zugeordnet werden, sollen die User selber festlegen können. Dies könnte bedeuten, dass im Radar mehr als 4 Quadranten angezeigt würden.
- Radar Visualisierung: Den Radar werde ich aufgrund des grösseren Aufwands für eine Visualisierung nur als Tabelle darstellen.

### 2.1 Technischer Kontext

In einem Frontend, dem Radar (Radar-App oder Radar Applikation), werden Technologie & Projekt Daten erfasst. Diese werden als JSON an eine REST API übermittelt und die entsprechende CRUD-Operation durchgeführt (Create/Erstellen, Read/Abfragen, Update/Modifizieren oder Delete/Löschen).

![Kontext Diagramm](res/Context-Diagram.png)


## 3 Lösungsstrategie

### 3.1 Technologieentscheidungen
#### 3.1.1 TypeScript

Sowohl im Frontend als auch Backend werde ich TypeScript verwenden. Die explizite Typisierung sehe ich als grossen Vorteil gegenüber Vanilla JavaScript für einen leichter lesbareren Code.

#### 3.1.2 Angular (Frontend)

Angular ermöglicht das Erstellen von Single Page Applications. Es ist ein etabliertes und in der Schweiz sehr häufig verwendetes Framework. Ich habe persönlich Angular 2 bzw Angular 4 gelernt, also kenne Angular eigentlich schon. Da ich aber künftig bei der Arbeit auch Angular einsetzten werde, möchte ich es besser kennenlernen.

#### 3.1.3 Node / Express (Backend)

Im Backend werde ich Express verwenden, um einfach APIs definieren zu können. 

#### 3.1.4 TypeORM / MySQL (ORM & Database)

TypeORM nimmt mir einen grossteil der Arbeit für die Persistierung ab. 

#### 3.1.5 ? (Authentication)

Wie ich genau die Authentifizierung umsetzte, weiss ich noch nicht. Wir werden gegen Ende der Blockwoche ein paar Möglichkeiten anschauen, dann werde ich mich entscheiden. 

#### 3.1.6 GitHub Actions / Vercel (CI/CD)

Änderungen (Commits) an der Angular Applikation sollen automatisch einen Build über GitHub Actions ausführen und auf die GitHub Pages deployt werden. Dies möchte ich als Übung für mich selbst umsetzten, da ich bis jetzt kaum Erfahrung mit GitHub Actions sammeln konnte und ich darin einen grossen Nutzen für meine eigenen Projekte sehe. Desweiteren würde ich auch gerne einen automatischen build eines Docker Containers mit Actions auslösen.

Für die Projektabgabe versuche ich das Deployment mit dem Vorschlag Vercel umzusetzten.

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

Dieser Abschnitt enthält möglichst alle Qualitätsanforderungen als
Qualitätsbaum mit Szenarien. Die wichtigsten davon haben Sie bereits in
Abschnitt 1.2 (Qualitätsziele) hervorgehoben.

Nehmen Sie hier auch Qualitätsanforderungen geringerer Priorität auf,
deren Nichteinhaltung oder -erreichung geringe Risiken birgt.


## 9 Risiken und technische Schulden

Eine nach Prioritäten geordnete Liste der erkannten Architekturrisiken
und/oder technischen Schulden.


## 10 Arbeitsjournal

| Datum              | Aufwand | Titel                                    | Beschreibung                                     |
|--------------------|---------|------------------------------------------|--------------------------------------------------|
| **Mo, 05.02.2024** | 2h      | Projektidee, Vorlage, GitHub Repository  | Ich werde den Projektvorschlag des TechRadars verfolgen. Ich erstellte mir zunächst ein GitHub Repository und legte eine grobe Ordnerstruktur fest. Dokumentieren werde ich nach arc42, wofür ich die Vorlage (DE, 8.2) im Markdown-Format verwende und das README.md File ersetzte. Ich probierte zudem GitHub Actions aus, um den Build einer Angular Applikation zu automatisieren und die Webseite zu GitHub Pages zu deployen. Das Kontext Diagramm soll grob das System aufzeigen und das ER-Diagramm zeigt grob die geplanten Entitäten auf. |
| **Di, 06.02.2024** | 3h      | Node, Docker                             | Festgelegt habe ich für das Frontend mit Angular und im Backend mit Node, Express (Web Server), TypeORM (OR-Mapper) und MySQL zu arbeiten. Sowohl im Frontend, als auch im Backend verwende ich TypeScript. Ich erstellte ein Dockerfile, um die gesamte Applikation als Docker Container einfach deployen zu können. |


## 11 Glossar

| Begriff [A-Z]         | Definition                                                                                        |
|-----------------------|---------------------------------------------------------------------------------------------------|
| **Angular**           | Angular ist ein auf JavaScript basierendes Frontend-Web-Framework. Es wurde von Google entwickelt und ist aktuell in der Version 17. Es verfolgt den "Single Page Application"-Ansatz, wobei zuerst ein Grundgerüst der Webseite geladen wird und später nur noch Daten nachgeladen werden sollen. |
| **Express**           | Express.js ist ein JavaScript Backend-Framework für Node.js. Es erleichtert das Erstellen von (RESTful) APIs und WebServern. |
| **MySQL**             | Lorem ipsum                                                                                       |
| **Node**              | Node.js ist eine plattformunabhängige JavaScript Laufzeitsumgebung (runtime environment). Über die V8 JavaScript engine kann somit JavaScript Code ausserhalb eines Browsers eingesetzt werden. |
| **TypeORM**           | TypeORM ist ein OR-Mapper und wird als Bindeglied zwischen der Datenbank (Relational) und dem objekt-orientiertem Backend verwendet. |
| **TypeScript**        | TypeScript fügt statische Typisierung und weitere Sprachkonstrukte zu JavaScript hinzu. TS wird immer zu JS transkompiliert. |
| **Z**                 | Lorem ipsum                                                                                       |

**About arc42** Template Version 8.2, Januar 2023. 
Created, maintained and © by Dr. Peter Hruschka, Dr. Gernot Starke and contributors. View <https://arc42.org>.