def sum13(nums):
    ans=[]
    if len(nums)<1 or nums[0]==13 and len(nums)==1:
        return 0
    if len(nums)==1:
        return nums[0]
    if nums[0]!=13:
        ans.append(nums[0])

    for i in range(1,len(nums)):
        if nums[i]!=13 and nums[i-1]!=13:
            ans.append(nums[i])

    return sum(ans)
print(sum13([1, 2, 2, 1, 13]))