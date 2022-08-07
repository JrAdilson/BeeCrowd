lista = (input().split(" "))
a,b,c = lista 
maior = (int(a) + int(b) + abs(int(a)-int(b)))/2
result = (int(maior) + int(c) + abs(int(maior) - int(c)))/2
print("%d eh o maior"%result)