<?php
$filename = 'counter.txt';

if (file_exists($filename)) {
    $counter = file_get_contents($filename);
} else {
    $counter = 0;
}

$counter++;

file_put_contents($filename, $counter);

echo "Ta strona została odwiedzona $counter razy.";
?>