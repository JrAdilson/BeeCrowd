lista = (input().split(" "))
a, qtd = lista
if(int(a)==1):
    tot = int(qtd)*4
    print("Total: R$ %.2f"%tot)
elif(int(a)==2):
    tot = int(qtd)*4.50
    print("Total: R$ %.2f"%tot)
elif(int(a)==3):
    tot = int(qtd)*5
    print("Total: R$ %.2f"%tot)
elif(int(a)==4):
    tot = int(qtd)*2
    print("Total: R$ %.2f"%tot)
elif(int(a)==5):
    tot = int(qtd)*1.50
    print("Total: R$ %.2f"%tot)