lista = (input().split(" "))
a,b,c = lista
a = float(a)
b = float(b)
c = float(c)
calc = 0
if(a<(b+c) and b<(a+c) and c<(a+b)):
    calc = a+b+c
    print('Perimetro = %.1f'%calc)
else:
    calc = ((a+b)*c)/2
    print('Area = %.1f'%calc)
