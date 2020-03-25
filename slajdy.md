
class: center, middle

# Programowanie funkcyjne w JS

---
## Program szkolenia

* Przetwarzenie list: `filter()`, `map()`.
* Konwersja list do pojedyńczej wartości: `reduce()`.
* Kompozycja funkcji.
* Czyste fukcje.
* Hight order functions.
* Immutability. Dlaczego to jest ważne.

---
## Czego nie będzie?

* Category theory
* Monads
* Haskell
* Math

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
    return match.scoreA && match.scoreA === match.scoreB
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

* Jak porównasz podejście funkcyjne z użyciem map() do podejścia proceduralnego z użyciem for/while?
* Co sprawiało trudność w funkcyjnym podejściu?

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

Zbuduj prostą tabelę ligową bazującą na ilości strzelonych goli.

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
# Kompozycja funkcji

* pure function
* referential integrity
* partial application
* currying
