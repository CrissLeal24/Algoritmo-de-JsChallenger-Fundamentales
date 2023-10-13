const  number = (a) => {
    return a.toString().split('').map((num)=> Number(num))
}
console.log(number(10));