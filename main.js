

const nums = [1,2,3,45,5,6];

function makeMiddle(nums){
    let middle = Math.floor(nums.length / 2)
    return [nums[middle-1],nums[middle]]
}

const a = makeMiddle(nums)

console.log(a)