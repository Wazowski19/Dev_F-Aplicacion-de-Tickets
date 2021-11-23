class Demonio{
    static contador = 0;
    static nombre = "Cuando el demonio llama";
    static duracion = "88 min";

    constructor(asiento){
        this._nombre = Demonio.nombre;
        if(Demonio.contador > 100){
            this._cont = ++Demonio.contador;
            this._id = "CDL-" + this._cont;
        }else if(Demonio.contador > 10 && Demonio.contador < 100){
            this._cont = ++Demonio.contador;
           this._id = "CDL-0" + this._cont;
        }else if(Demonio.contador < 10){
            this._cont = ++Demonio.contador;
            this._id = "CDL-00" + this._cont;
        }
        this._duracion = Demonio.duracion;
        this._asiento = asiento;
    }
    
    getId(){
        return this._id;
    }

    getCont(){
        return this._cont;
    }

    getNombre(){
        return this._nombre;
    }

    getDuracion(){
        return this._duracion;
    }

    getAsiento(){
        return this._asiento;
    }

    setAsiento(asiento){
        this._asiento = asiento;
    }
}