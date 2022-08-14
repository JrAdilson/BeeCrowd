<?php
$a = fgets(STDIN);
$b = fgets(STDIN);
$media = number_format((($a*3.5)+($b*7.5))/11, 5, '.', '');
echo "MEDIA = $media\n";
