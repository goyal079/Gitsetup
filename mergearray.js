function mergeArr(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  let f = nums1.concat(nums2);
  return f.sort();
}
arr1 = [1, 2, 3, 0, 0, 0];
arr2 = [2, 5, 6];
console.log(mergeArr(arr1, 3, arr2, 3));
