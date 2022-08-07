lista = (input().split(" "))
a,b,c = lista
a = int(a)
b = int(b)
c = int(c)
aux = 0
if(a>b and a>c):
    aux = a
    if(b>c):
        aux2 = b
        aux3 = c
    else:
        aux2 = c
        aux3 = b
if(b>a and b>c):
    aux = b
    if(a>c):
        aux2 = a
        aux3 = c
    else:
        aux2 = c
        aux3 = a
if(c>a and c>b):
    aux = c
    if(a>b):
        aux2 = a
        aux3 = b
    else:
        aux2: b
        aux3: a
print(aux3)
print(aux2)
print(aux)
print()
print(a)
print(b)
print(c)