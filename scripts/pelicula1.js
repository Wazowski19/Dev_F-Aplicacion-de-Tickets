class Venom{
    static contador = 0;
    static nombre = "Venom 2: Carnage Liberado";
    static duracion = "98 min";

    constructor(asiento){
        this._nombre = Venom.nombre;
        if(Venom.contador > 100){
            this._cont = ++Venom.contador;
            this._id = "VNM-" + this._cont;
        }else if(Venom.contador > 10 && Venom.contador < 100){
            this._cont = ++Venom.contador;
           this._id = "VNM-0" + this._cont;
        }else if(Venom.contador < 10){
            this._cont = ++Venom.contador;
            this._id = "VNM-00" + this._cont;
        }
        this._duracion = Venom.duracion;
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