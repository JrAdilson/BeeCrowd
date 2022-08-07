countA = 0;
countB = 0;
par = 0
impar = 0;
for i in range(1,6):
    a = int(input())
    ij = a % 2
    if(ij == 0):
        par = par+1
        if(a > 0 and a != 0):
            countA = countA + 1
        elif(a < 0 and a != 0):
            countB = countB + 1
    else:
        impar = impar+1
        if(a > 0 and a != 0):
            countA = countA+1
        elif(a < 0 and a != 0):
            countB = countB+1
print('%d valor(es) par(es)'%par)
print('%d valor(es) impar(es)'%impar)
print('%d valor(es) positivo(s)'%countA)
print('%d valor(es) negativo(s)'%countB)