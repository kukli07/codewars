function remainder(n, m) {
    const nums = [n, m];

    // check which num is larger
    const largerIdx = n > m ? 0 : 1;

    // calculate remainder
    return nums[largerIdx] % nums[1 - largerIdx];
}

// Nedlessly complex solution, just for fun
// TIL: Convert 0->1 or 1->0 by just doing x => 1 - x
// 1 => 1 - 1 => 0
// 0 => 1 - 0 => 1
