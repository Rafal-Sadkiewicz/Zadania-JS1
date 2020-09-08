const bubbleSort = (forSort) =>
{
    let bufor = 0;

    for (let i = forSort.length - 1 ; i > 0; i--)
    {
        for (let j = 0 ; j<=i; j++)
        {
            if (forSort[j] > forSort[j+1])
            {
                bufor           = forSort[j+1];
                forSort[j+1]    = forSort[j];
                forSort[j]      = bufor;
                
            }
            console.log(`i = ${i} | j = ${j}`);
            console.log(forSort);
            
        }

        console.log("------------");
    }

    return forSort;
}

let newArr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];


console.log(`Tablica po sortowaniu bąbelkowym: ${bubbleSort(newArr)}`);