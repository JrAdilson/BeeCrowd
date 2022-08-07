b = 0
aux = 0
media = 0
for i in range(0,6):
    a = float(input())
    if(a>0):
        b = b+1
        aux = a+aux
media = aux/b
print('%d valores positivos'%b)
print('%.1f'%media)