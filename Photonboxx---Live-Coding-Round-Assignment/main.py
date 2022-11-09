
n = int(input());

num1 = 0
num2 = 1

if n==1:
    print(num1)
elif n==2:
    print(num2)
else:
    for i in range(3,n+1):
        temp=num1
        num1=num2
        num2 = temp+num2
    print(num2)    