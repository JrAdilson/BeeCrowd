lista = (input().split(" "))
a,b = lista
a = int(a)
b = int(b)
result = 0
if(a==b):
    print("O JOGO DUROU 24 HORA(S)")
elif(a>b):
    result = 24 - a + b;
    print("O JOGO DUROU %d HORA(S)"%result)
else:
    result = b - a
    print("O JOGO DUROU %d HORA(S)"%result)