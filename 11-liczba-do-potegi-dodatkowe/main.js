function potegowanie (podstawa = 1,wykladnik = 1)
{
    if (wykladnik == 0)
    {
        return 1;
    }

    else if (wykladnik == 1)
    {
        return podstawa;
    }

    let s = potegowanie (podstawa, wykladnik-1);
    
    return podstawa * s;
}


console.log(potegowanie (2,4));