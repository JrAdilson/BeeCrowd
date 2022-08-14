<?php
$name = fgets(STDIN);
$sal = fgets(STDIN);
$vend = fgets(STDIN);
$newSal = number_format(round($sal + ($vend * 0.15), 2, PHP_ROUND_HALF_EVEN), 2, '.', '');
echo "TOTAL = R$ $newSal\n";