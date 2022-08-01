## Deklarace promennych pomoci const, let

- diky promennym si program **pamatuje** data, ktera muzeme pozdeji pouzivat (analogoie - krabice se jmenovkou)
- kdyz vytvarime promennou, rikame, ze ji **deklarujeme**

### const

- hodnotu promenne po vytvoreni neni mozne dal v programu menit
- promenna vzdy musi mit hodnotu
> casteji vyuzivany zpusob

### let
 
- hodnotu promenne je mozne v programu menit
- promenna nemusi mit zadnou hodnotu
> mene vyuzivany zpusob

> rozdilu mezi const a let je vice, ale zatim to neresme, zatim pouzivejme const

### spolecna uloha #1
```
const jmeno = "Matej"; 
const dovednost = 'JavaScript';
console.log("Jmenuji se " + jmeno + " a ucim se " + dovednost);
```
 > tady jsme vytvorili 2 promenne, v obou pripadech jsme jim priradili textove hodnoty, uvnitr console.log jsme jsme je pomoci operatoru `+` slozili do vety
 
 > jak vidime, nezalezi na tom, jake jsme pouzili uvozovky

### spolecna uloha #2 
```
const x = 5;
const y = 3;
console.log(x + y)
```
> do promennych muzeme davat i cisla - pri pouziti `+` se pak provede scitani... funguje samozrejme i `-` nebo jine matematicke operatory

> ted pridame promennou `z` a dame ji hodnotu `"7"`, a zkusime ji secist s promennou `y`
```
const x = 5;
const y = 3;
const z = "7";
console.log(y + z)
```
> mozna jste cekali `10`, ale je to `37`... proc? JS totiz vidi ze provadime operaci mezi 2 ruznymi **datovymi typy** - o tech si za chvili rekneme vic - a michat ruzne datove typy nikdy idealni a u mnoha jinych programovacich jazyku by takova operace skoncila chybou... JS si s tim poradil tak, ze kdyz videl cislo a text, automaticky prevedl `3` na `"3"` ... a `"3" + "7"` je `"37"`
 
### samostatna uloha #1
- vytvorte promennou s nazvem `mojeJmeno` (`jmeno uz je obsazena`), priradte ji jako hodnotu sve jmeno
- vyvorte promennou `hobby`, priradte ji jako hodnotu nejaky svuj konicek
- nezapomenout ze hodnoty v tomto pripade budou text - davame do uvozovek
- v console.log vytisknout vetu "Jmenuji se <jmeno> a mam rad(a) <hobby>"

```
const jmeno = "Matej";
const hobby = "pleteni";
console.log("Jmenuji se " + jmeno + " a bavi me " + hobby);
```

## Vyskakovaci okna #1
> probereme podrobneji na konci hodiny, ted si pojdme neco v rychlosti ukazat
### prompt() 
- zada vstup uživatele, vraci text
### spolecna uloha #3
```
const vstup1 = prompt('Zadej prvni cislo');
const vstup2 = prompt('Zadej druhe cislo');
const vysledek = vstup1 + vstup2;
console.log(vysledek);
```
> vidime stejny problem, jako kdyz jsme scitali 2 texty (`prompt` vraci text).. v tomto pripade je potreba vedet neco o prevadeni **datovyvch typu** .. ale co to vlastne je? 

## Datove typy
V JS rozdelujeme datove typy na primitivni a objektove, nas dnes zajimaji ty primitivni
### Number 
- cisla - cela i desetinna
```
const n1 = 1;
console.log(n1);
const n2 = 5;
console.log(n2);
const n3 = 1.5;
console.log(n2 + n3);
```
### String 
- text v uzozovkach (", ', `), 'retezec' znaku
```
const s1 = "ahoj";
console.log(s1);
const s2 = 'ahoj';
console.log(s2);
const s3 = 'That's OK'; --> SyntaxError
const s3 = "That's OK";
console.log(s4);
const s4 = '20';
const s5 = '22';
console.log(s4 + s5);
console.log(s4 + n2); // kdo si pamatuje kolik to bude? '20' + 5 --> '205'
```
### Boolean 
- `true` nebo `false` (`0` nebo `1`)
- vyhodnoceni ruznych logickych vyroku
```
b1 = 5 > 3;
console.log(b1)
b2 = 5 < 3;
console.log(b2)
b3 5 = 5 --> error? // znak s jednim '=' slouzi jen pro prirazovani hodnot promennych
b3 = 5 == 5;
console.log(b3)
b4 = 'Matej' == 'Matej';
console.log(b4)
```

### Undefined
- promenna nema zadnou hodnotu
> tady se dostavame k zminene deklaraci promenne pomoci `let` (v pripade `const` totiz promenna vzdy musi mit hodnotu)
```
let nic1;
console.log(nic1); 
``` 
### Null
```
const nic2 = null;
console.log(nic2);
``` 
### Prevadeni String na Number
- datove typy lze mezi sebou za urcitych podminek prevadet, dneska si ukazeme prevadeni String na Number
> pri probirani stringu jsme zkusili scitat '20' + '22', pojdme to zkusit znova, s prevedenim na Number
### spolecna uloha #4
```
const text1 = '20';
const text2 =  '22';
const cislo1 = Number(text1);
const cislo2 = Number(text2);
const vysledek = cislo1 + cislo2
console.log(vysledek);
```

## Vyskakovaci okna #2
3 typy, do zavorek piseme text, ktery se ma uzivateli zobrazit
### alert() 
- upozorneni, nic nevrací (datovy typ `undefined`)
```
alert();
alert("baf!");
```
### prompt() 
- žáda vstup uživatele, vrací text (datovy typ `String`)
```
const uzivatelskeJmeno = prompt('Vyber si uzivatelske jmeno');
console.log(uzivatelskeJmeno);
```
### confirm() 
- žádá potvrzení uživatele, vrací true / false (datovy typ `Boolean`)
```
const souhlas = confirm('Souhlasis s obchodnimi podminkami?');
console.log(souhlas);
```

### spolecna uloha #5
```
const cislo1 = prompt('Zadej prvni cislo:');
const cislo2 = prompt('Zadej druhe cislo:');
alert('Vysledek je ' + cislo1 + cislo2); // vstupy jsou stringy, prevest na cislo pomoci Number()
const vysledek = Number(cislo1) + Number(cislo2);
alert('Vysledek je ' + vysledek);
```

### samostatna uloha #2
- vyzve uzivatele, aby napsal sve jmeno a ulozil do promenne 'jmeno' 
- vyyve uzivatele, aby napsal dovednost, kterou chce umet 
- vyskakovaci okno s textem, ze napr. Lenka chce umet programovat
```
const jmeno = prompt('Jak se jmenujes?');
const dovednost = prompt('Co chces umet?');
alert(jmeno + 'chce umet' + dovenost)
```

## kdyz zbyde cas na hodine, jinak domaci ukol

### typeof
- pomoci klicoveho slova `typeof` muzeme zjistit datovy typ promenne
```
typeA = 5;
typeB = `co jsem za typ?`;
typeC = true;
console.log(typeA);
console.log(typeB);
console.log(typeC);
```

### Dynamicky typovany jazyk
- pri deklarovnai promenne nemusim definovat jeji typ, JavaScript si ho podle hodnoty urci sam **dynamicky**, za behu programu
- napr. v Jave se musi definovat i datovy typ
```
String str = "String v Jave";
```

### Metody stringu
- pod metodou si zatim predstavme jen neco jako kouzelnou schopnost datoveho typu
- .lenght() - do zavorek nic nepiseme, vrati se pocet znaku
- .startsWith() - do zavorek pisem string, kterym ma zacinat, vraci se true/false 
- .toUpperCase() - vrati se puvodni string, ale velkymi pismeny
- .includes() - do zavorek pisem string, ktery ma obsahovat, vraci se true/false
- ....