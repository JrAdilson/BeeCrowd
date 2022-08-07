import math
a = float(input())
notas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00]
print("NOTAS:")
for notas in notas:
    aux = math.floor(a/notas[int(notas)])
    print("%0.2f nota(s)"%aux + "de R$ %0.2f"%notas[notas])
    a = a%notas[notas]
print("MOEDAS:")
moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
for moedas in moedas:
    aux = math.floor(a/moedas[int(moedas)])
    print("%0.2f moeda(s)"%aux + "de R$ %0.2f"%moedas[moedas])
    a = a%moedas[moedas] + 0.00001
 