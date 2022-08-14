<?php
    $raio = fgets(STDIN);
    $area = number_format(round(pow($raio, 2) * 3.14159, 4), 4, '.', '');
    echo "A=$area\n";
?>