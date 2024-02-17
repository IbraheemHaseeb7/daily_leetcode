/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = 0;

  for (let counter: number = 0; counter < n; counter++) {
    nums1[m + i] = nums2[i];
    i++;
  }

  nums1.sort((a: number, b: number) => a - b);
}

export { merge };
