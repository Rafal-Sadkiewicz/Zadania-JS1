const sumuj = (sumArr) =>
{
    let sum = 0;
    sumArr.forEach(num => sum += num*num);

    console.log("Suma wynosi: " + sum);

}

let newArr = [1,2];

sumuj(newArr);