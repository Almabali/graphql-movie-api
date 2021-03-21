# Project Requirements

## Defined requriements

### Serve GraphQL API
The program must serve a GraphQL API with at least 3 entity types.

### Integrate with Wikipedia without external libraries
The program must integrate with Wikipedia without the use of an external library.

Must be capable of querying Wikipedias REST API to find a movie, with name, first paragraph, link and IMDB link.

### Search capability for all defined entities
Movies must be searchable by (at least) actors or titles.

### Search similar moviescapability
Must provide a query to search for similar movies, based on common entities.



## Original requirements (Hungarian)

### Node/backend - nest.js
Írj egy tisztán back-end JavaScript (TypeScript) alkalmazást, egy általad választott framework-öt/boilerplate-et felhasználva!

### Követelmények:

- Tagolt, olvasható, tiszta kód (nem 1 fájl)
- Angol nyelven íródjon (API és kód egyaránt)
- Indulj ki egy létező boilerplate-ből, amiben már van GraphQL támogatás. A házi feladat célja nem a különböző könyvtárak integrációját megoldani (nem boilerplate építés), hanem egy létező boilerplate-ben való fejlesztés. Részünkről preferált egy Express, NestJS vagy FoalTS alapú rendszer, de ha egy másikban van tapasztalatod ami eleget tesz a követelményeknek, az is megfelelő.
- Külső library-k használata megengedett (ramda, moment, stb), de konkrétan a Wikipedia-s kéréseket és azok feldolgozását elrejtő library-ket nem
- Az alkalmazás szolgáltasson GraphQL API-t. Ennek adatszerkezetét határozd meg te, de legyen legalább 3 féle entitás (pl. film, színész, kategória)
- Az adatszerkezet mögött elegendő, ha mock adatok vannak (egy json/js/ts fájlból konstansként betöltve)

### Működés:

- A szolgáltatásban legyen lehetőség filmeket keresni cím vagy színész alapján - ez működhet statikus/mock adat, vagy adatbázis alapon is, de külső szolgáltatás (pl. IMDB, TMDB) használata nem része a feladatnak.

- Egy másik lekérdezésben legyen lehetőség egy adott filmhez azonosító alapján megtalálni a kapcsolódó angol Wikipedia oldalt (REST kéréssel) és annak első bekezdését. Az eredményben legyen benne a külső Wikipedia oldal és az IMDB oldal linkje.

- Bónusz: Egy másik lekérdezésben egy filmhez az app megkeresi a “kapcsolódó” filmeket valamely logika mentén (pl. hasonló kategória, színész, értékelés, stb.)

### Segédlet: Amennyiben nincs kedvenc releváns boilerplate-ed, vagy nem akarsz Te választani egyet (google-ből), íme néhány javaslat:

https://github.com/fernandohenriques/nestjs-graphql-boilerplate

https://github.com/smithg09/nodejs-typescript-graphql-starter

### Szintek:

- [x] Működő app, GraphQL végponttal 
- [x] Működő teszt felület (pl. graphiql) és minta query-k egy dokumentációban (.md fájl)
- [ ] Kapcsolódó filmek keresése funkció
- [ ] Bónusz alternatíva: tesztek
- [ ] Bónusz alternatíva: docker-es környezet, és ORM-es adatelérés a statikus adatok helyett (pl. TypeORM-mel)


Ez egy nagyobb falat is lehet, Rád bízzuk, hogy meddig szeretnél eljutni, és hogy a bónusz feladatokkal is foglalkozol-e. Nyilván egy junior kevesebbet, egy senior többet tud megoldani egységnyi idő alatt, de ami minket a leginkább érdekel, hogy ez idő alatt milyen maga a kód, ami születik. Éppen ezért hangsúlyozzuk, hogy ne töltsd az időd boilerplate építéssel és könyvtárak integrálásával, vegyél egy működőt alapul, amelyben a funkciókra tudsz fókuszálni.