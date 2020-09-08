class Book 
{
    constructor(bookName = 'NULL', author = 'ANONIM', isReaded = false)
    {
        this.tytul          = bookName;
        this.autor          = author;
        this.przeczytana    = isReaded;
    }

    opiszKsiążkę()
    {
        if (this.przeczytana == true)
        {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana`);
        }

        else
        {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana`);
        }
    }
}

const ilośćPrzeczytanych = (booksArr) =>
{
    let i = 0;

    booksArr.forEach(element => {
        if (element.przeczytana == true)
        {
            i++;
        }
        element.opiszKsiążkę();
    });

    return i;    
}

let lod         = new Book ("Lód", "Jacek Dukaj", false);
let inkwyzytor  = new Book ("Sługa Boży", "Jacek Piekara", true);
let conan       = new Book ("Conan Barbarzyńca", "Rober E. Howard", true);

let arrBooks    = [lod, inkwyzytor, conan]; 

console.log(`Ilość przeczytanych książek: ${ilośćPrzeczytanych(arrBooks)}`);