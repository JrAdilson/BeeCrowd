import math
a = (input().split(" "))
b = (input().split(" "))

x1, y1 = a
x2, y2 = b
tot = math.sqrt(((float(x2) - float(x1))*(float(x2) - float(x1))) + ((float(y2)-float(y1)) *(float(y2)-float(y1))))
print("%0.4f"%tot)