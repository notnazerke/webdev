def end_other(a, b):
  a=a.lower()
  b=b.lower()
  if len(b)>=len(a):
    max=b
    min=a
  else:
    max=a
    min=b
  
  if max[-len(min):]==min:
    return True
  return False