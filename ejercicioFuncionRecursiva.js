
let array = [1,2,[3,4,[5,6]], 5, [6]];
function recursiveArraySum(arr){
    if(Array.isArray(arr)){
        let sum = 0;
        for(let i = 0;i <arr.length; i++){
            sum += recursiveArraySum(arr[i]);
        
        }return sum;
    }else{
        return arr;
    }
}

console.log(recursiveArraySum(array));