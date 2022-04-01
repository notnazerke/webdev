def Power(a, n):
    ans=1
    for i in range(n):
        ans*= a
    return ans

a, n = map(int, input().split())
print(Power(a, n))