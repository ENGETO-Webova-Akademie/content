### Co je to JavaScript
JavaScript je programovací jazyk, který je vedle HTML a CSS jednou ze základních technologií World Wide Webu.

> JavaScript je vysokoúrovňový, objektově orientovaný, multiparadigmatický programovací jazyk.

* High-level znamená, že nás nezajímají komplexní věci jako například správa paměti, tyto programovací jazyky jsou uživatelsky více přátelské
* High-level jazyky se více soustředí na samotnou programovací logiku než na HW komponenty
* Objektově orientované programovaní je založené na základě objektů, které slouží pro uložení většiny druhů dat
* Multi-paradigm znamená, že můžeme použít různé programovací styly
* Programovací jazyk = komunikační jazyk mezi programátorem a počítačem, je to soubor pravidel pro zápis algoritmu

#### Úloha JS ve webovém vývoji
* Přidání interaktivního chování do webových stránek
* Tvorba webových aplikací FE a BE
* https://learn.engeto.com/ - zobrazení dynamického efektu na této stránce

#### Jak funguje výměna klient-server?
* Klientem může být jakýkoli počítač, klientský program je program, který umožňuje uživateli zadávat požadavky.
* Klient, ať už je to stroj nebo program, je zařízení a způsob, jak zadávat požadavky prostřednictvím webu
* Server je počítač nebo systém, který poskytuje zdroje, data, služby nebo programy jiným počítačům, tzv. klientům, prostřednictvím sítě
* Jeden server může obsluhovat více klientů najednou.
* Server může obsahovat webové zdroje, hostit webové aplikace, ukládat uživatelská a programová data atd.
* Server vždy naslouchá požadavkům, a jakmile nějaký obdrží, odpoví na něj zprávou.

#### Engines v prohlížeči
* Prohlížeče nerozumějí prostému javascriptu, potřebují enginy, které dělají hlavní práci
* Příklad: V8 engine

### Příklady použití JavaScriptu
* Dynamické efekty a webové aplikace v prohlížeči
* Webové aplikace na serverech
* Mobilní aplikace
* Desktopové aplikace
* další: https://faun.pub/all-about-javascript-its-industry-used-cases-4246a4796723

### Historie JavaScriptu

#### Začátek JS
* JavaScript vynalezl Brendan Eich v roce 1995 a jeho vývoj trval pouhých 10 dní.
* Byl vyvinut pro prohlížeč Netscape 2 a v roce 1997 se stal standardem ECMA-262.

#### ECMAScript
* V roce 1997 bylo vzhledem k rychlému rozvoji JavaScriptu jasné, že jazyk bude třeba řádně udržovat a spravovat.
* Specifikace jazyka pro Evropské sdružení výrobců počítačů (European Computer Manufacturers Association, ECMA)
* V letech 1997-1999 prošla norma ECMA-262 třemi revizemi, ale po téměř deseti letech byla verze 4 opuštěna kvůli rozdílným názorům na směřování jazyka a jeho navrhované funkce.
* ES5 2009 plně kompatibilní 2013
* ES6 2015 plně kompatibilní 2015

#### JS dnes
* Aktuální JS je jedním z nejvíce uživatelských jazyků
* Velká komunita
* Skvělé frameworky

### První JS soubor
Ukázat jak na to - samostatná práce na 5-10 min + otázky

* JS v HTML
* Script tag<
```
console.log("Toto je test");
alert("Test vyskakovaciho okna");
```

### První proměnná - var / ES6
* Ukázat, jak vytvořit proměnnou - hodnotou je jméno - str.
* Vysvětlení, jak proměnná funguje a proč jsme ji použili.
* Proměnné nám umožňují ukládat, měnit a přistupovat k těmto informacím za běhu programu.
* Proměnné mohou uchovávat nejrůznější informace.
* Ukažte, jak deklarovat proměnnou v moderním JS.
* Poprvé použití console.log().

### Základy vývojářských nástrojů
* Vývojářské nástroje jsou programy, které umožňují vývojářům vytvářet, testovat a ladit software.
* Současné prohlížeče poskytují integrované vývojářské nástroje, které umožňují kontrolovat webové stránky. Umožňují uživatelům kontrolovat a ladit HTML, CSS a JavaScript stránky, kontrolují síťový provoz, který stránka způsobuje, umožňují měřit její výkon a mnoho dalšího.

### Vytváření proměnných - Moderní JS pro začátečníky
* Pro deklaraci proměnných bychom měli vždy používat let nebo const
* Proměnné bychom měli deklarovat všechny na vlastním řádku
* Jejich seskupení usnadňuje jejich čtení
* Proměnné bychom měli přiřazovat blízko místa, kde je potřebujeme použít
* Neměli bychom řetězit přiřazení proměnných
* Dlouhý výraz v jazyce JavaScript můžeme obalit závorkami, abychom jasně viděli, co proměnné přiřazujeme
* další info: https://levelup.gitconnected.com/javascript-best-practices-objects-and-variables-6d16da92d767Creating variables - Modern JS good practice for beginners

