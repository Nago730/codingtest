function solution(nums) {
    let result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let k = i + 1; k < nums.length - 1; k++) {
            for (let j = k + 1; j < nums.length; j++) {
                let amount = nums[i] + nums[k] + nums[j];
                if (check(amount)) {
                    result.push(amount);
                }
            }
        }
    }
    return result.length;
}

function check(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}