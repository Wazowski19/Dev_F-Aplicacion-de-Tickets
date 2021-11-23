class Duna{
    static contador = 0;
    static nombre = "Duna";
    static duracion = "157 min";

    constructor(asiento){
        this._nombre = Duna.nombre;
        if(Duna.contador > 100){
            this._cont = ++Duna.contador;
            this._id = "DUN-" + this._cont;
        }else if(Duna.contador > 10 && Duna.contador < 100){
            this._cont = ++Duna.contador;
           this._id = "DUN-0" + this._cont;
        }else if(Duna.contador < 10){
            this._cont = ++Duna.contador;
            this._id = "DUN-00" + this._cont;
        }
        this._duracion = Duna.duracion;
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