let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
 
function mergeArray(nums1,m, nums2,n){
     // approach:
    // instead of merging from front (which can overwrite values),
    // we start filling from the end where empty space is available

    // p1 → last valid element in nums1
    // p2 → last element in nums2
     let p1=m-1;
     let p2=n-1;
     
      // i → position where next largest element should be placed
     for(let i=m+n-1; i >=0; i--){ 
         
         // if nums2 is completely used, nums1 is already sorted
         if(p2<0){
             break;
         }
         
        // compare last elements of both arrays
        // place the larger one at current position
         if( p1 >= 0 && nums1[p1] > nums2[p2]) {  // if nums1 is exhausted (p1 < 0), we can't compare anymore
// so we directly copy elements from nums2
         nums1[i] = nums1[p1];
         p1--; // move pointer in nums1
         }
         else {
             nums1[i] = nums2[p2];
             p2--; // move pointer in nums2
         }
         
     }
     // nums1 now contains merged sorted array
     return nums1;
}
 
console.log(mergeArray(nums1,m, nums2,n)) //[1,2,2,3,5,6]