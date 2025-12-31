class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n_map={}
        for i, num in enumerate(nums):
            c=target-num
            if c in n_map:
                return [n_map[c],i]
            n_map[num]=i
        return []
        
        
