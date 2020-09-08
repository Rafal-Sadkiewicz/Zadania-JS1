const reverseStr = (strRev) =>
{
    strRev = strRev.split("");
    strRev = strRev.reverse();
    return strRev.join("");

}


console.log(reverseStr("Akademia 108"));