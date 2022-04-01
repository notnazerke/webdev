n = int(input())
dic = {}
for i in range( n):
    dic.update({ input() : float(input()) })

m = sorted(dic.values())[1]

for k, v in dic.items():
    if v==m:
        print(k)