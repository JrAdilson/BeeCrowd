lista = (input().split(" "))
a,b,c = lista
a = float(a)
b = float(b)
c = float(c)
if(a>=(b+c)):
    print('NAO FORMA TRIANGULO')
elif((a*a)==(b*b+c*c)):
    print('TRIANGULO RETANGULO')
elif((a*a)>(b*b+c*c)):
    print('TRIANGULO OBTUSANGULO')
elif((a*a)<(b*b+c*c)):
    print('TRIANGULO ACUTANGULO')
elif(a==b and b==c and a==c):
    print('TRIANGULO EQUILATERO')

# Não terminado.