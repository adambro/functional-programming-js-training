# Szkolenie z FP

Czy robić wiele małych modułów czy jeden większy z małymi zadaniami? Jak wtedy z etapem refleksji?

Może wiele cylki Kolba w jedym module? Robić podsumowanie po każdym cyklu czy na koniec modułu?

Czy stosować funkcje których nie wyjaśniem? Może żeby zrobili zadanie niepoprawnie, a potem pokaże im poprawną wersję. W materiałach czytałem że takie podejście jest stosowane przy próbie dekonstrukcji postaw(ćwiczenie diagnostyczne), ale ja raczej będę miał ludzi którzy chcą się nauczyć.

Co jeśli uczestnicy wykonali zadanie, osiągnęli pożądany wynik, ale nie użyli tych funkcji czy metod o które mi chodziło? Korygować to od razu? Może pojawić się podejście "zawsze tak robiłem i działa (nawet szybciej)".

----

## Moduł 1: Użycie map() i filter() to przetworzenia list

Cele:
* Uczestnik potrafi użyć funkcji map() i filter() zamiast pętli for/while do przetworzenia listy.
* Uczestnik widzi zalety użycia map() względem for/while.
* Uczestnik potrafi określić kiedy nie używać funkcji map() (np. zamiast forEach() czy do modyfikacji list).

### Teoria

Funkcja `map()` służy do przetwarzania jednej listy w drugą. Jako argument podajemy funkcję która ma przetworzyć dany element z listy. Funkcja może przyjąć do 3 argumentów: `currentValue, index, array`, ale tylko pierwszy jest wymagany.

```js
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
};

let numbers = ['1', '10', '03'].map(item => parseInt(item));
```

### Praktyka

* Jak do tej pory radziliście sobie z przetwarzaniem list?
* Co sprawiało największą trudność w pisaniu lub czytaniu takiego kodu?

### Doświadczenie

Zadanie: Nazwy drużyn wyświetlane w TV muszą zawierać nazwę sponsora. Napisz funckcję która doda nazwę sponsora przed nazwą drużyny i zwróci nową listę meczów. Użyj predefiniowanych zmiennych `matches` oraz `sponsors` jako danych wejściowych.

### Refleksja

* Jak porównasz podejście funkcyjne z użyciem map() do pojejścia proceduralnego z użyciem for/while?
* Co sprawiało trudność w funkcyjnym podejściu?

PYTANIE: Tu dać slajd z najważniejszymi zaletami? Np. że w funkcji map() zajmuję się pojedyńczą wartością? Takie podsumowanie?

----

Zad: Pokaż wszystkie mecze które skończyły się bezbramkowym remisem (wynik 0:0). Użyj funkcji filter().

Zad: Policz ile razy wystąpił bezbramkowy remis (wynik 0:0). Użyj funkcji reduce() i filter().

