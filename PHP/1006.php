<?php
$a = fgets(STDIN);
$b = fgets(STDIN);
$c = fgets(STDIN);
$media = number_format((($a*2)+($b*3)+($c*5))/10, 1, '.', '');
echo "MEDIA = $media\n";