const sumuj = (sumArr) =>
{
    let sum = 0;
    sumArr.forEach(num => sum += num);

    console.log("Suma wynosi: " + sum);

}

let newArr = [1,2,3,4,5,6];

sumuj(newArr);