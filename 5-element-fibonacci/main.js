const fibbonaci = (nElm) =>
{
    
    if (nElm < 1)
    {
        console.log("Należy podać n-ty element ciągu większy od zera");
    }

    else if (nElm == 0)
    {
        return 0;
    }

    else if (nElm == 1 || nElm == 2)
    {
        return 1;
    }
    
    else
    {
        let arrFib = [1,1,0];
        
        for (let i = 0; i<nElm-2; i++)
        {
            arrFib[2] = arrFib[1] + arrFib[0];

            arrFib[0] = arrFib[1];
            arrFib[1] = arrFib[2];
        }

        return arrFib[2];
    }
}

console.log(fibbonaci(19));