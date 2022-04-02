def in1to10(n, outside_mode):
  if n in range(1,11) and outside_mode==False or n not in range(2,10) and outside_mode==True:
    return True
  return False