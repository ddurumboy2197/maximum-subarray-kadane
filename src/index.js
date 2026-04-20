function maximumSubarray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maximumSubarray([1, 2, 3, 4, 5])); // 15
console.log(maximumSubarray([-1, -2, -3, -4, -5])); // -1
```

Kodda Kadane algoritmi qo'llanilgan, u quyidagilar bilan ishlaydi:

- `maxSum` - eng katta yig'indi beruvchi ketma-ket subarrayning yig'indisini saqlaydi.
- `currentSum` - hozirgi ketma-ket subarrayning yig'indisini saqlaydi.
- `i` - ro'yxat elementlarini o'rganish uchun indeks.
- `nums[i]` - ro'yxatning `i` -chi elementi.
- `Math.max(nums[i], currentSum + nums[i])` - hozirgi ketma-ket subarrayning yig'indisini yangilaydi.
- `Math.max(maxSum, currentSum)` - eng katta yig'indi beruvchi ketma-ket subarrayning yig'indisini yangilaydi.
