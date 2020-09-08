const reverseStr = (strRev) =>
{
    strRev = strRev.split("");
    strRev = strRev.sort();
    return strRev.join("");

}


console.log(reverseStr("Akademia 108"));