function arrayMap(arr, target) {
   
    let left = 0;          //at the beginning of the array initialized the first pointer .
    let currentSum = 0;  //to keep track of the sum of elements in the current window.
    
    for (let right = 0; right < arr.length; right++) { //by using the second pointer"Right" It iterate through the loop consecutively.
        currentSum += arr[right];
        

        // check if the currentSum exceeds the targetSum, then move the left pointer to the right and 
        // subtract the elements from currentSum until currentSum is less than or equal to the target.

        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }
        // check currentSum then if equal to the targetSum it return true
        if (currentSum === target) {
            return true;
        }
    }
    
    return false; //  otherwise return false.
}

// case for  test.

const arr = [1,5,6,3,7,7];
const target = 14;
console.log(arrayMap(arr,target));