sal = float(input())
newSal = 0
dif = 0
if(0 <= sal <= 400.00):
    newSal = sal+(sal*0.15)
    dif = newSal - sal
    print('Novo salario: %.2f'%newSal)
    print('Reajuste ganho: %.2f'%dif)
    print('Em percentual: 15 %')
elif(400.01 <= sal <= 800.00):
    newSal = sal+(sal*0.12)
    dif = newSal - sal
    print('Novo salario: %.2f'%newSal)
    print('Reajuste ganho: %.2f'%dif)
    print('Em percentual: 12 %')
elif(800.01 <= sal <= 1200.00):
    newSal = sal+(sal*0.10)
    dif = newSal - sal
    print('Novo salario: %.2f'%newSal)
    print('Reajuste ganho: %.2f'%dif)
    print('Em percentual: 10 %')
elif(1200.01 <= sal <= 2000.00):
    newSal = sal+(sal*0.07)
    dif = newSal - sal
    print('Novo salario: %.2f'%newSal)
    print('Reajuste ganho: %.2f'%dif)
    print('Em percentual: 7 %')
elif(sal > 2000.00):
    newSal = sal+(sal*0.04)
    dif = newSal - sal
    print('Novo salario: %.2f'%newSal)
    print('Reajuste ganho: %.2f'%dif)
    print('Em percentual: 4 %')