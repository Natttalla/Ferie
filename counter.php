<?php
    $counterFile = 'counter.txt';

    // Sprawdzenie, czy plik z licznikiem istnieje
    if (file_exists($counterFile)) {
        // Odczytanie obecnej wartości licznika
        $count = (int)file_get_contents($counterFile);
        // Inkrementacja licznika
        $count++;
    } else {
        // Jeśli plik nie istnieje, ustaw licznik na 1
        $count = 1;
    }

    // Zapisanie nowej wartości licznika do pliku
    file_put_contents($counterFile, $count);

    // Zwrócenie liczby odwiedzin dla JavaScript
    echo $count;
?>
