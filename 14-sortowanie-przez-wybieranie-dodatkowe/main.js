let arr = [6,4,5,2,3,1];
let buff = 0;

console.log(arr);

for (let i = 1; i<arr.length; i++)
{
    for (let j = i; j>0; j--)
    {
        console.log(`Przed: i=${i}. j=${j} | ${arr}`);
        if (arr[j-1] <= arr[j])
        {
            break;
        }
        
        buff = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = buff;

        console.log(`Po: i=${i}. j=${j} | ${arr}`);
    }

    

}

console.log(arr);