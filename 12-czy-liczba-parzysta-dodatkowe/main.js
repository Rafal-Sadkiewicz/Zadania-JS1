function even (intLiczba)
{
    if (intLiczba % 2 == 0)
    {
        return true;
    }

    return false;
}

function inttobinnary(intInt)
{
    let arrBin= [0];
    arrBin.length =0;
    //arrBin.length = 0;

    let i =0;
    while (intInt !=0)
    {
        
        arrBin.push(intInt % 2)
        //console.log(`i = ${i}| int = ${intInt}| % = ${intInt%2}| tablica: ${arrBin}`);
        intInt = parseInt(intInt / 2);
        i ++;

        
    }

    arrBin.reverse ();

    return arrBin.join(" ");
}



console.log(inttobinnary(0));

