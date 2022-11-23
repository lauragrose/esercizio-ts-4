class Inventario {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number
    constructor(_id: number, _codprod: number, _collezione: string, _capo: string, _modello: number, _quantita: number, _colore: string, _prezzoivaesclusa: number, _prezzoivainclusa: number, _disponibile: string, _saldo: number) {
        this.id = _id,
            this.codprod = _codprod,
            this.collezione = _collezione
        this.capo = _capo,
            this.modello = _modello,
            this.quantita = _quantita,
            this.colore = _colore,
            this.prezzoivaesclusa = _prezzoivaesclusa,
            this.prezzoivainclusa = _prezzoivainclusa,
            this.disponibile = _disponibile,
            this.saldo = _saldo
    }
    //calcolo il valore dello sconto
    getsaldocapo(): number {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    //ricavo il prezzo una volta decurtato lo sconto
    getacquistocapo(): number {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}

var array: [];
function getDati(): void {
    fetch('http://localhost:3000/vestiti').then((response) => {
        return response.json();
    }).then((data) => {
        array = data;

        console.log(array); //stampa tutti gli elementi

        array.map(function (element:any) {
            let articolo = new Inventario(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
            console.log(articolo);
            console.log(articolo.getacquistocapo());
        })
    })
}

console.log(getDati());