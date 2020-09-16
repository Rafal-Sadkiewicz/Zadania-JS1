function charcount(stringToCount = "aaa", param = "a")
{
    let counter = 0;

    for(let i=0; i<stringToCount.length; i++)
    {
        if (stringToCount[i] == param)
        {
            counter ++;
        }
    }

    return counter;
}

console.log(charcount("Szkoła Programowania Akademia 108", "a"));