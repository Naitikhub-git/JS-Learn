// let arr=[43,23,21]

// //array map method
// let a =arr.map((value)=>{console.log(value)
//     return value+1;
// })
// console.log(a)

// let b =arr.map((value,index,array)=>{console.log(value,index,array)
//     return value+index;
// })
// console.log(b)

// //array filter method
// let arr2=[43,23,219,46,399]
// let a2=arr2.filter((value)=>{
//     return value>100;
// })
// console.log(a2)

//array reduce method
let arr3=[43,23,219,46,399]
let num=arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(num)
const reduce_func=(h1,h2)=>{
    return h1+h2;
}
let num1=arr3.reduce(reduce_func)
console.log(num1)