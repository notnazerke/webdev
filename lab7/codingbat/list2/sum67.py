def sum67(nums):
    
  s = 0
  ignore = False
      
  for i in range(len(nums)):
      if nums[i] == 6:
          ignore = True
      if not ignore:
          s += nums[i]
      if nums[i] == 7 and ignore:
          ignore = False
            
  return s