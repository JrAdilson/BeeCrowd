<?php
$num = fgets(STDIN);
$horas = fgets(STDIN);
$val = fgets(STDIN);
$sal = number_format($horas * $val, 2, '.', '');
echo "NUMBER = $num";
echo "SALARY = U$ $sal\n";
