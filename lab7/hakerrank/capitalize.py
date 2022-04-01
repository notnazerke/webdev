s = input().strip().split()
for i in s:
    
    if not i[0].isdigit():
        print(i.capitalize(), end=' ')
    else:
        print(i, end=" ")
