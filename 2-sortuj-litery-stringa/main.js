const sortStr = (strRev) =>
{
    strRev = strRev.split("");
    strRev = strRev.sort();
    return strRev.join("");

}


console.log(sortStr("Akademia 108"));