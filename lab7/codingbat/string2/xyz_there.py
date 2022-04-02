def xyz_there(str):
  arr = str.split('.')
  if 'xyz' in arr[0]:
    return True
  for s in arr[1:]:
    if 'xyz' in s[1:]:
      return True

  return False