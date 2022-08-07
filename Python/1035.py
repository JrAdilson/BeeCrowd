lista = (input().split(" "))
A,B,C,D = lista
if(int(B) > int(C) and int(D) > int(A) and (int(C)+int(D)) > (int(A)+int(B)) and int(C) > 0 and int(D) > 0 and int(A)%2==0):
    print("Valores aceitos")
else:
    print("Valores nao aceitos")
