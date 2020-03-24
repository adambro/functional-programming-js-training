
class: center, middle

# Programowanie funkcyjne w JS

---

## Funkcje do przetwarzania list

Najważniejsze to:

* map()
* filter()
* reduce()

Wszystkie inne są pochodnymi powyższych.
W szczgólności `map` i `reduce` która są podstawą do budowania pozostałych.

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

## Zadanie 1: map()

Nazwy drużyn wyświetlane w TV muszą zawierać nazwę miasta.
Napisz funckcję która doda nazwę miasta i zwróci nową listę meczów.
Użyj predefiniowanych zmiennych `matches` oraz `cities` jako danych wejściowych.

Otwórz plik `zadania/1_map.js` i zaimplementuj brakującą funkcję.

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

## Zadanie 2: filter()

Stwórz listę meczów, które zakończyły się remisem.

Uwaga: czy mecz który nie ma jeszcze wyniku (będzie jutro) to remis?

Otwórz plik `zadania/2_filter.js` i zaimplementuj brakującą funkcję.

