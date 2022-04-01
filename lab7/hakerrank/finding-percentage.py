n = int(input())
dic = {}
for i in range(n):
    lst = list(input().split())
    av = 0
    for x in range(1, len(lst)):
        lst[x] = float(lst[x])
        av+=lst[x]
    
    dic.update({lst[0]: av/3})

print(dic[input()])