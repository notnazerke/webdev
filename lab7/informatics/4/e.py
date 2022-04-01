a = int(input())
lst = list(map(int, input().split()))
cnt='NO'
for i in range(1, a):
    if lst[i]>0 and lst[i-1]>0 or lst[i]<0 and lst[i-1]<0:
        cnt='YES'
        break

print(cnt)