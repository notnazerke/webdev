def caught_speeding(speed, is_birthday):
  if is_birthday and speed<=65 or speed <=60 :
    return 0
  if is_birthday and 66<=speed<=85 or 61<=speed<=80:
    return 1
  else:
    return 2
