a = int(input())
lst = list(map(int, input().split()))
cnt=0
for i in range(1, a-1):
    if lst[i]>lst[i-1] and lst[i]>lst[i+1]: cnt+=1

print(cnt)