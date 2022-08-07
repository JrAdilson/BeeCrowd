seg = int(input())
hr = int(seg/3600)
seg = seg % 3600
mint = int(seg/60)
seg = seg % 60
seg = seg
print("%d"%hr + ":%d"%mint + ":%d"%seg)