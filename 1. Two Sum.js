/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let nmap=new Map()
    
    for (let i=0;i<nums.length;i++){
        let c=target-nums[i]
        if (nmap.has(c)){
            return [nmap.get(c),i]
        }
        nmap.set(nums[i],i)
    }
    return []
};
