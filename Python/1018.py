import math
a = int(input())
print(a)
while(a>0):
    if(a >= 100):
        qtd = math.floor(a/100)
        print("%d nota(s) de R$ 100,00"%qtd)
        a = a%100
    else:
        print("0 nota(s) de R$ 100,00")
    if(a >= 50):
        qtd = math.floor(a/50)
        print("%d nota(s) de R$ 50,00"%qtd)
        a = a%50
    else:
        print("0 nota(s) de R$ 50,00")
    if(a >= 20):
        qtd = math.floor(a/20)
        print("%d nota(s) de R$ 20,00"%qtd)
        a = a%20
    else:
        print("0 nota(s) de R$ 20,00")
    if(a >= 10):
        qtd = math.floor(a/10)
        print("%d nota(s) de R$ 10,00"%qtd)
        a = a%10
    else:
        print("0 nota(s) de R$ 10,00")
    if(a >= 5):
        qtd = math.floor(a/5)
        print("%d nota(s) de R$ 5,00"%qtd)
        a = a%5
    else:
        print("0 nota(s) de R$ 5,00")
    if(a >= 2):
        qtd = math.floor(a/2)
        print("%d nota(s) de R$ 2,00"%qtd)
        a = a%2
    else:
        print("0 nota(s) de R$ 2,00")
    if(a >= 1):
        qtd = math.floor(a/1)
        print("%d nota(s) de R$ 1,00"%qtd)
        a = a%1
    else:
        print("0 nota(s) de R$ 1,00")