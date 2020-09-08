

let jsonPracownicy = 
{
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

jsonPracownicy.pracownicy.forEach((element, index) => 
{
    console.log(`${index + 1}. Imię: ${element.firstName} | Nazwisko: ${element.lastName}`);
});