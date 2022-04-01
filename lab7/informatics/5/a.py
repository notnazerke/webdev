def Min(a,b,c,d):
    m = a
    if b<a and b<c and b<d:
        m = b
    if c<a and b>c and c<d:
        m = c
    if d<a and d<c and b>d:
        m = d

    return m

a,b,c,d = map(int, input().split())
print(Min(a,b,c,d ))