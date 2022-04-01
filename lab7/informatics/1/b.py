a = int(input())

s1= 'The next number for the number {} is {}.'
s2 = 'The previous number for the number {} is {}.'
print(s1.format(a, a+1))
print(s2.format(a, a-1))