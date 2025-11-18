let students =[
    {name:"Ganesh",marks:98},
    {name:"Amit",marks:88},
    {name:"Ravi",marks:53},  
];

for(let s of students){
    if(s.marks>80){
        console.log(s.name + " is a topper");
    }
}