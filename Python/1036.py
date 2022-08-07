import math
lista = (input().split(" "))
a,b,c = lista
a = float(a)
b = float(b)
c = float(c)
try:
    r1 = (-b+(math.sqrt((b*b)-4*a*c)))/(2*a)
    r2 = (-b-(math.sqrt((b*b)-4*a*c)))/(2*a)
    print("R1 = %.5f"%r1)
    print("R2 = %.5f"%r2)
except:
    print("Impossivel calcular")

