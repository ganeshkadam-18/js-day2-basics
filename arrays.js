let arr = [1,2,3,4,5,7,8]
// Index   0,1,2,3,4,5,6
console.log(arr);
arr[0] = 5666;
console.log(arr.length)
console.log(arr[0])
console.log(arr[4])
console.log(arr[6])
// pop
let a = [12,23,43,15,32,3]
a.pop()
console.log(a)
//push
a.push("raj")
console.log(a)

//shift
a.shift()
console.log(a)

//unshift
a.unshift("ganesh")
console.log(a)

//delete
delete a[4]
console.log(a)

// slice

 let num = [21,32,43,22,64,54];
 num.slice(2)
 console.log(num)