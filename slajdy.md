
class: center, middle

# Programowanie funkcyjne w JS

Adam Brodziak

---
## Jak szkolenie będzie wyglądać

* Slajdy w Remark.js <3
* Czat w MS Teams.
* Dzielenie ekranu.
* Zadania.
* Wysyłanie rozwiązań.
* Zgłaszanie pytań i problemów.

???
Pytania piszcie na czacie. Będę go sprawdzał.

Przy problemach dam opcję prezentowania ekranu.
Jak nie chcesz prezentować w grupie, to zrobimy 1:1 ale w osobnym callu. Będę musiał wtedy wyjść z głównego video.

**Pokaż jak wrzucić kod!**

Przedstaw się i pokaż jaką masz tapetę :)

---
## Program szkolenia

1. Funkcje i typy w JavaScript.
2. Przetwarzenie list: `filter()` oraz `map()`.
3. Konwersja list do pojedyńczej wartości: `reduce()`.
4. Kod deklaratywny vs imperatywny.
5. Funkcje wyższego rzędu (high-order functions).
6. Kompozycja funkcji.
7. Przydatne biblioteki i narzędzia.

---
## Czego nie będzie?

* Monads
* Haskell
* Mathematics
* Category theory
* Pattern matching

???
Rzeczy ważne i rozwijające. Nie są niezbędne żeby zacząć.

Coś jeszcze przychodzi wam do głowy? Może też nie będzie ;)

Jak ktoś jest zawiedziony to może opuścić szkolenie.

---
# 1. Funkcje i typy w JavaScript.

Dlaczego funkcje w JS są takie fajne i co to daje.

Aż 3 różne sposoby na deklarację funkcji, ale tyko jeden rządzi.

JavaScript ma typy danych i warto je znać.

???
Repetytorium z JS na początek, żebyśmy startowwali z tego samego poziomu.

---
## Funkcje w JS

* First-class citizen. Funkcja może być zwracana i przekazywana jako parametr.
* Zawsze zwracają wartości (ale `undefined` też!) i mogą przyjmować parametry.
* Brak ścisłego sprawdzania liczby parametrów.
  * Jeśli podamy więcej argumentów niż parametrów to nadmiarowe są ignorowane.
  * Jeśli podamy mniej argumentów niż parametrów to brakujące będą `undefined`.
  * Przydatne do partial application i currying (więcej o tym później).
* Standard ES2015 wprowadził domyślne wartości parametrów funkcji.
* JS runtime jest oparty o stos, więc istnieje limit wywołań fukcji.
  * Trzeba uważać na błąd przepełniania stosu przy rekurencji.
  * Tail call optimization jest [nadal w powijakach](https://2ality.com/2015/06/tail-call-optimization.html).

???
To są cechy czym fukcje w JS różnią się od funkcji w innych językach. Typowe WTF.

---
## Deklarowanie funkcji

Deklaracja funkcji na 3 sposoby:
```js
// Function definition.
function foo1 (param) {
  return 1;
}

// Function expression.
const foo2 = function (param) {
  return 2;
}

// Fat arrow function. New ES2015 case of function expression.
const foo3 = (param = "def") => 3;
```

Trzeci sposób jest preferowany, bo [rozwiązuje niektóre WTF z funkcjami](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) w JS.

---
## Typy w JS

* Wbudowane typy proste (primitives):
  * undefined : typeof instance === "undefined"
  * Boolean : typeof instance === "boolean"
  * Number : typeof instance === "number"
  * String : typeof instance === "string"
  * BigInt : typeof instance === "bigint"
  * Symbol : typeof instance === "symbol"
* null : typeof instance === "object". Special primitive used not as a data value.
* Object : typeof instance === "object". Special non data but Structural type for any Constructed instance: new Object, new Array, new Map, new Set, new WeekMap, new WeakSet, new Date
* Function : typeof instance === "function". Special shorthand for Functions, though every Function constructor is derived from Object constructor.
* W JS typy są sprawdzane, ale dość luźno ;)
  * Powszechne jest *implicit type coercion* i tu [trzeba uważać](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/).
  * Uczulam na błąd `1 + undefined`, co daje `NaN` w rezultacie!


---
class: middle
# Co to jest programowanie funkcyjne?

---
## Functional Programming

Programowanie funkcyjne to programowanie z użyciem funkcji.

Można się rozejść. Dziękuję za uwagę ;)

???
Zestaw technik i wzorców (jak wzorce projektowe) które są użyteczne.

Ciekawostka: FP jest starsze niż OOP. OOP wygrało bo pamięć była droga.

Teraz FP wraca, bo Mhz już nie rośnie, a liczba rdzeni tak.

---
## Functional Programming is a...

PARADIGM

CODING STYLE

MINDSET

[Funkcyjny frontend | Krzysztof Jendrzyca | FDD 2016](https://www.youtube.com/watch?v=UUeq8J9l0HI)

---
# 2. Funkcje do przetwarzania list

Najważniejsze to:

* map()
* filter()
* reduce()

Wszystkie inne są pochodnymi powyższych.
W szczgólności `map` i `reduce` która są podstawą do budowania pozostałych.

---

## Funkcja filter()

Funkcja `filter()` służy do odfiltrowania elementów listy.
Jako argument podajemy funkcję która zwraca `true` jeśli element ma znaleźć się
na nowej liście, albo `false` jeśli nie.

Funkcja może przyjąć do 3 argumentów: `element, index, array`, ale tylko pierwszy jest wymagany.

```js
let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
```

Przykład:

```js
let integers = [0, 1, 1.7, '0'].filter(Number.isInteger);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---

## Zadanie 1: filter()

Stwórz listę meczów, które zakończyły się remisem.

Uwaga: czy mecz który nie ma jeszcze wyniku (będzie jutro) to remis?

Otwórz plik `zadania/1_filter.js` i zaimplementuj brakującą funkcję.

---
## Funkcja map()

Funkcja `map()` służy do przetwarzania jednej listy w drugą.
Jako argument podajemy funkcję która ma przetworzyć dany element z listy.

Funkcja może przyjąć do 3 argumentów: `currentValue, index, array`, ale tylko pierwszy jest wymagany.

```js
let newArray = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for newArray
};
```

Poniżej przykład z użyciem fat arrow function:

```js
let numbers = ['1', '10', '03'].map(item => parseInt(item));
```

Tu interesuje mnie tylko pierwszy argument, więc tworzę closure: `item => parseInt(item)`
żeby nie przekazywać pozostałych argumentów do `parseInt`.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

## Zadanie 2: map()

Nazwy drużyn wyświetlane w TV muszą zawierać nazwę miasta.
Napisz funckcję która doda nazwę miasta i zwróci nową listę meczów.
Użyj predefiniowanych zmiennych `matches` oraz `cities` jako danych wejściowych.

Otwórz plik `zadania/2_map.js` i zaimplementuj brakującą funkcję.

---
## Refleksja nad filter() i map()

Jak porównasz podejście funkcyjne z użyciem map() do podejścia proceduralnego z użyciem for/while?

Co sprawiało trudność w funkcyjnym podejściu?

???
Zadaj pytania uczestnikom.
Postaraj się wyciągnąć odpowiedzi.

---

## Efekty korzystania z filter() i map()

* Funkcja przetwarza zawsze jeden element z listy.
* Testy możemy napisać tylko dla ww. prostej funkcji. Nie trzeba testować `map()`!
* Unikamy przypadkowych zmian wejściowej listy, które mogą się zdarzyć w `for` lub `forEach`.
* Mamy kopię danych, ale zazwyczaj to nie jest problem wydajnościowy.
* `filter()` to specyficzna wersja `map()`.

---
# 3. Konwersja listy do pojedyńczej wartości

TODO

---
## Funkcja reduce()

Funkcja `reduce()` służy do redukcji listy do jednej wartości.

```js
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```

Przykład:

```js
const cart = [
    { name: "Microphone", price: 50 },
    { name: "Headphones", price: 75 }
];
const shipping = 10;

const total = cart.reduce((accumulator, item) => accumulator += item.price, shipping);
```

---

## Zadanie 3: reduce() jako suma

Napisz funckję reducera która zwróci ile goli padło w całym turnieju.

Uwaga na mecz który jeszcze nie ma wyniku!

---

## Funkcja reduce() do budowy obiektu z listy

Efektem reduce nie musi być liczba, ale może być też obiekt.
Często przydaje się do stworzenia mapy z listy.

Przykład lokalnego cache danych z bazy:

```js
const entities = [
    { id: 10, name: "One", price: 100 },
    { id: 20, name: "Two", price: 200 },
    { id: 30, name: "Czy", price: 300 }
];

const keyVal = (dict, item) => {
    const key = item["id"];
    return Object.assign(dict, { [key]: item })
};
const hashmap = entities.reduce(keyVal, {});
```

???
To jest prymitywne rozwiązanie, ale działa. Wrócimy do niego później, przy kompozycji.

---

## Zadanie 4: reduce() do budowy obiektu

Zbuduj prostą tabelę ligową bazującą na liczbie strzelonych goli.

Uwaga na mecz który się nie odbył.
Wyniki obu drużyn z każdego meczu muszą zostać policzone.
Użyj `Object.assign()` z przykładu.

Szczegóły w JS Doc w pliku `zadania/4_reduce_object.js`.


---
## Refleksja nad reduce()

Czy widzicie zastosowanie dla `reduce()` w swojej pracy? W jakich przypadkach?

Jak wcześniej radziliście sobie z np. obliczaniem sumy?

---
## reduce() to podstawa

* Funkcja `reduce()` podstawowe i potężne narzędzie do przetwarzania list.
* Wydaje się skomplikowane, bo to niskopoziomowe narzędzie.
* Rezultatem `reduce()` może być wartość dowolnego typu, nawet array.
* Tak, `map()` da się zbudować z użyciem `reduce()`.
* `reduce()` rzadko będzie w kodzie biznesowym, raczej w fukcjach składowych.
* Sprawne użycie `reduce()` wymaga przyzwyczajenia.

---
## map() i reduce() graficznie

![map() and reduce() used to make a sandwitch](https://clojurebridgelondon.github.io/workshop/images/map-reduce-sandwich.png)

---
# 4. Kod deklaratywny vs imperatywny

Programowanie funkcyjne preferuje deklaratywne podejście do kodu.
Oznacza to że logika jest wyrażona bez użycia instrukcji sterujących.

Kod imperatywny zawera mnóstwo instrukcji opisujących poszczególne kroki,
niezbędne w celu osiągnięcia rezultatu. Opisuje jak coś zrobić.

Kod deklaratywny ukrywa instrukcje jak osiągnać cel, zamiast tego opisuje
przepływ danych. Co zrobić, nie jak.

---
## Instrukcja vs Wyrażenie

Kod imperatywny często wymaga użycia instrukcji.
Instrukcja (statement) to kawałek kodu który wykonuje jakąś akcję.
Przykłady to `if`, `throw`, `for`, `continue`, etc.

Kod deklaratywny polega na wyrażeniach.
Wyrażenie (expression) to kawałek kodu którego rezultatem jest jakaś wartość.
Wyrażenia to zazwyczaj kombinacja wywołań funkcji, wartości i operatorów,
które są wywoływane w celu wyprodukowania wartości. Przykłady wyrażeń:

```js
2 * 2
doubleMap([2, 3, 4])
Math.max(4, 3, 2)
```

???
Zazwyczaj takie wyrażenia będą przypisane do jakiegoś identyfikatora (zmiennej),
zwracane w funckji, albo przekazywane do funkcji. Zanim to się jednak stanie,
wyrażenie jest najpierw ewaluaowane (wykonywane), a przekazywany jest rezultat.

---
## Obliczanie sumy imperatywnie

```js
let goals = 0;
for (match of matches) {
    if (match.scoreA === undefined || match.scoreB === undefined) {
        continue;
    };
    goals += match.scoreA;
    goals += match.scoreB;
}
```
???
Tam są aż 3 instrukcje!

---
## Zadanie 5: Wyrażenia

Zamiast używać instrukcji `if` użyj wyrażnia do filtrowania wyników.
Dodatkowo nazwij swoje wyrażenia odpowiednio i zdefiniuj jako osobne funkcje.

W rezultacie powinny powstać minimum 2 funkcje.

---
## Refleksja nad wyrażeniami

Jakie zalety widzicie przy używaniu wyrażeń zamiast instrukcji? Jakie wady?

Co daje nazywanie wyrażen (przypisywanie do zmiennej czy funkcji)?

---
# 5. Funkcje wyższego rzędu (high-order functions).

Funkcje wyższego rzędu (high-order functions) to takie, które przyjmują funkcje
jako parametr lub zwracają funkcje. Czesto używane do:

* Tworzenia narzędzi które mogą działać na różnych typach danych (np. `map()`).
* Abstrakcji lub izolacji akcji, efektów, lub przetwarzania asynchronicznego (callback, promise), etc.
* Enkapsulacji stanu który musi być współdzielony między wywołaniami.
* Budowa nowych obiektów i funkcji (factory pattern).

---
## Przykład funkcji zwracającej funkcję:

```js
/** Returns getter function that returns attribute value from object. */
const prop = (key = "") => (obj = {}) => obj[key];

const entities = [
    { id: 10, name: "One", price: 100 },
    { id: 20, name: "Two", price: 200 },
    { id: 30, name: "Czy", price: 300 }
];
const getName = prop("name");
const names = entities.map(getName);
```

---
## Zadanie 6: map() z high-order function

Stwórz funkcję, która będzie dodawała nazwę miasta tylko do jednego zespołu.
Użyj fukcji wyższego rzędu żeby przekazać czy chodzi o `teamA` czy `teamB`.

Dodatkowo ukryj listę miast, żeby nie była dostępna w całym module.

Możesz użyć `map()` dwa razy.

---
## Refleksja nad high order function

Jakie zastosowania widzisz dla high order function?

Czy widzisz możliwość zastosowanie high-order function w swojej pracy?
Jakie przeszkody widzisz?

---
# 6. Kompozycja funkcji

Kompozycja funkcji (functional composition) to łączenie funkcji w celu uzyskania
innej funkcji. Kompozycja przypomina używanie pipe, np. w Bash.

Mając funkcje `f` i `g` kompozycja `f(g(x))` będzie obliczone od wewnąrz na zewnątrz,
inaczej od prawej do lewej strony. Zatem w kolejności:
1. `x`
2. `g`
3. `f`

Powyższa notacja jest bardzo zbliżona do algebraicznej (matematyka!).

Kompozycja funkcji to fundament FP.

---
## Partial application & currying

Partial application to przekazanie nie wszystkich wymaganych parametrów funkcji,
gdzie w efekcie otrzymujemy nową funckję, która przyjmie brakujące parametry.

Currying to specyficzna odmiana w FP, gdzie funkcje przyjmują tylko *jeden* argument,
by koniec końców zwrócić wartość. Przykład:

```js
// add = a => b => Number
const add = a => b => a + b;
const sum = add(2)(3); // => 5
```

Powyższa funkcja jest ręcznie "przyprawiona", ale do tego są narzędzia.

???
Jak myślicie - po co coś takiego?

---
## Curry upraszcza kompozycję

Zamiast pisać setki nawiasów w `f(g(x))` (jak w Lisp) możemy taką strukturę spłaszczyć.

```js
const compose = (f, g) => x => f(g(x));

const g = n => n + 1;
const f = n => n * 2;

const h = compose(f, g);
h(20);
```

???
Jaki będzie wynik? 42

---
## Dwie funkcje nie wystarczą

Z pomocą przychodzi brat `reduce()`, czyli `reduceRight()`:

```js
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const g = n => n + 1;
const f = n => n * 2;

const h = compose(f, g);
h(20);
```

---
## Zadanie 7: Użycie compose()

Zbudouj złożenie funkcji dodającą nazwę miasta dla `teamA` i `teamB` za pomocą
funkcji pomocniczej `compose()`.

---
## Refleksja nad compose()

Jak wrażenie o `compose()`? Wydaje się trudne, łatwe? Proste, skomplikowane?

Jak porównacie użycie `compose()` z metod chaining (np. wielokrotne `map()`)?

???
Użycie `compose()` pozwala stworzyć złożoną funckję, która nadal przetwarza jeden rekord.

Przy method chaining mamy wiele iteracji, więc gorszą wydajność.


---
# 7. Przydatne biblioteki i narzędzia

Master the JavaScript Interview: What is Functional Programming?
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

Curry and Function Composition
https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

Currying in JavaScript
https://wsvincent.com/javascript-currying/

Interactive Excersises in Functional Programming (and RxJS):
http://reactivex.io/learnrx/

[Funkcyjny frontend | Krzysztof Jendrzyca | FDD 2016](https://www.youtube.com/watch?v=UUeq8J9l0HI)

Biblioteki:

* Ramda.js
* Lodash FP

---
# Dziękuję za uwagę

Niech monada będzie z wami!
