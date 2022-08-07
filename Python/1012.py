lista = (input().split(" "))
a,b,c = lista
tri = (float(a)*float(c))/2
cir = (float(c)*float(c))*3.14159
tra = ((float(a)+float(b))*float(c))/2
qua = (float(b)*float(b))
ret = (float(a)*float(b))
print("TRIANGULO: %0.3f"%tri)
print("CIRCULO: %0.3f"%cir)
print("TRAPEZIO: %0.3f"%tra)
print("QUADRADO: %0.3f"%qua)
print("RETANGULO: %0.3f"%ret)