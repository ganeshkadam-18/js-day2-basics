let x = [1,2,93,5,6,88]
// for loop
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    console.log(element)
}
x.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

// while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// for of loop
for (const element of x) {
    console.log(element )
}