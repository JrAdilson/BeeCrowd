lista = (input().split(" "))
a,b,c,d = lista
a = float(a)
b = float(b)
c = float(c)
d = float(d)
media = ((a*2)+(b*3)+(c*4)+d)/10
if(media >= 7):
    print('Media: %.1f'%media)
    print('Aluno aprovado.')
elif(media < 5):
    print('Media: %.1f'%media)
    print('Aluno reprovado.')
else:
    print('Media: %.1f'%media)
    print('Aluno em exame.')
    exame = float(input())
    print('Nota do exame: %.1f'%exame)
    if(exame >= 5):
        print('Aluno aprovado.')
        final = (exame+media)/2
        print('Media final: %.1f'%final)
    else:
        print('Aluno reprovado.')
        final = (exame+media)/2
        print('Media final: %.1f'%final)