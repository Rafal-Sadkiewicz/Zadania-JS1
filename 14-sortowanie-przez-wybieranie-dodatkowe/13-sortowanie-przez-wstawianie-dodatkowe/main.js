let arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
let buff = 0;

for (let i=0; i<(arr.length-1); i++)
{
    for(let j=i; j<(arr.length-1); j++)
    {
        console.log(`przed: ${arr} | i= ${i} | j=${j}`);
        if (arr[i]>arr[j+1])
        {
            buff = arr[j+1];
            arr[j+1] = arr[i];
            arr[i] = buff;
            console.log('swap');
        }

        console.log(`po: ${arr} | i= ${i} | j=${j}`);
    }
}


console.log(arr);