    function charcount(stringToCount, param)
    {
        let counter = 0;

        for(let i=0; i<stringToCount.length; i++)
        {
            if (stringToCount[i] == param.toUpperCase() ||  stringToCount[i] == param.toLowerCase())
            {
                counter ++;
            }
        }

        return counter;
    }

    console.log(charcount("Szkoła Programowania Akademia 108", "a"));