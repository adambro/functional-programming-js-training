
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

Funkcja `map()` służy do przetwarzania jednej listy w drugą. Jako argument podajemy funkcję która ma przetworzyć dany element z listy.

Funkcja może przyjąć do 3 argumentów: `currentValue, index, array`, ale tylko pierwszy jest wymagany.

```js
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
};
```

Poniżej przykład z użyciem fat arrow function:

```
let numbers = ['1', '10', '03'].map(item => parseInt(item));
```

Tu interesuje mnie tylko pierwszy argument, więc tworzę closure: `item => parseInt(item)`
żeby nie przekazywać pozostałych argumentów do `parseInt`.

---

## Zadanie 1: map()

Nazwy drużyn wyświetlane w TV muszą zawierać nazwę miasta.
Napisz funckcję która doda nazwę miasta i zwróci nową listę meczów.
Użyj predefiniowanych zmiennych `matches` oraz `cities` jako danych wejściowych.

Otwórz plik `zadania/1_map.js` i zaimplementuj brakującą funkcję.

---

