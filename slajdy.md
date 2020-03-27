
class: center, middle

# Programowanie funkcyjne w JS

Adam Brodziak

---
## Program szkolenia

1. Funkcje i typy w JavaScript.
2. Przetwarzenie list: `filter()`, `map()`.
3. Konwersja list do pojedyńczej wartości: `reduce()`.
* Kompozycja funkcji.
* Czyste fukcje.
* High-order functions.
* Immutability. Dlaczego to jest ważne.

---
## Czego nie będzie?

* Monads
* Haskell
* Mathematics
* Category theory

---
# 1. Funkcje i typy w JavaScript.

Dlaczego funkcje w JS są takie fajne i co to daje.

Aż 3 różne sposoby na deklarację funkcji, ale tyko jeden rządzi.

JavaScript ma typy danych i warto je znać.

---
## Funkcje w JS

* First-class citizen. Funkcja może być zwracana i przekazywana jako parametr.
* Zawsze zwracają wartości (ale `undefined` też!) i mogą przyjmować parametry.
* Brak ścisłego sprawdzania liczby parametrów.
  * Jeśli podamy więcej argumentów niż parametrów to nadmiarowe są ignorowane.
  * Jeśli podamy mniej argumentów niż parametrów to brakujące będą `undefined`.
* Standard ES2015 wprowadził domyślne wartości parametrów funkcji.
* JS runtime jest oparty o stos, więc istnieje limit wywołań fukcji.
  * Trzeba uważać na błąd przepełniania stosu przy rekurencji.
  * Tail call optimization jest [nadal w powijakach](https://2ality.com/2015/06/tail-call-optimization.html).

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

Programowanie funkcyjne to programowanie z użyciem funkcji.

Można się rozejść. Dziękuję za uwagę ;)

---
# Funkcje do przetwarzania list

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

???

```js
const onlyDraw = (match = {}) => {
    const hasResult = match.scoreA !== undefined && match.scoreB !== undefined;
    return hasResult && match.scoreA === match.scoreB
}
```

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

???

```js
const addCitySuffix = name => name + " " + cities[name];
const appendCityNameToTeams = match => ({
  ...match,
  teamA: addCitySuffix(match.teamA),
  teamB: addCitySuffix(match.teamB)
});
```

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

???

```js
const sumScores = (total, match = {}) => {
  const goals = match.scoreA + match.scoreB
  return total += Number.isInteger(goals) ? goals : 0;
}
```

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

???
```js
const makeTable = (table = {}, match = {}) => {
  if (match.scoreA === undefined || match.scoreB === undefined) {
    return table;
  };

  const totalA = table[match.teamA] || 0;
  const totalB = table[match.teamB] || 0;
  const results = {
    [match.teamA]: match.scoreA + totalA,
    [match.teamB]: match.scoreB + totalB,
  };
  return Object.assign(table, results);
}
```

---
## Refleksja nad reduce()

Czy widzicie zastosowanie dla `reduce()` w swojej pracy? W jakich przypadkach?

Jak wcześniej radziliście sobie z np. obliczaniem sumy?

---
## reduce() to podstawa

* Funkcja `reduce()` podstawowe i potężne narzędzie do przetwarzania list.
* Wydaje się skomplikowane, bo to niskopoziomowe narzędzie.
* Resultatem `reduce()` może być wartość dowolnego typu, nawet array.
* Tak, `map()` da się zbudować z użyciem `reduce()`.
* Sprawne użycie `reduce()` wymaga przyzwyczajenia.

---
# Kompozycja funkcji

TODO:

* pure function
* referential integrity
* partial application
* currying

---
## Function composition

Przykład cache ze wcześniejszego slajdu:

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

Powyższe można osiągnąć używając biblioteki lodash:

```js
_.groupBy(entities, "id");
```

???
Kod poniżej jest czytelny, tak że nawet BA będzie mógł powiedzieć co tam się dzieje.
Normalnie użylibyśmy bibioteki, ale jesteśmy na szkoleniu po to żeby zrozumieć jak to działa.
Chodzi o to żeby napisać taki DSL na odpowiednim poziomie abstrakcji.

---
