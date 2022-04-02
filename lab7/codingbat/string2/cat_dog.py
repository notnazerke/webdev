def cat_dog(str):
  def cnt(s, str):
    c=0
    for i in range(len(str)-2):
      if str[i]==s[0] and str[i+1]==s[1] and str[i+2]==s[2]:
        c+=1
  
    return c
  
  if cnt('cat', str) == cnt('dog', str):
    return True
  return False