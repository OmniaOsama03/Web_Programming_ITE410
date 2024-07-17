let array = [1, 2, 3, 4, 5];

array.forEach( (n, m, y) =>
{
    console.log(n, m, y);
})

console.log("_____________________________");
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

array.filter( n => n >3 && n %2 == 0).forEach( n => console.log(n))
