
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var numInner=nums[0]; 
    var numSum=[];
    for(var i=1; i<=nums.length; i++){
        numSum.push(numInner);
        numInner=numInner+nums[i];
    }
    return numSum;
};
