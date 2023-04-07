
class Seller{
    constructor(name, owner, street, house_number, zip_code, telephone_number, e_mail){
        this._name = name;
        this._owner = owner;
        this._street = street;
        this._house_number = house_number;
        this._zip_code = zip_code;
        this._telephone_number = telephone_number;
        this._e_mail = e_mail;
    }

    get name(){
        return this._name
    }

    get owner(){
        return this._owner
    }

    get street(){
        return this._street
    }

    get house_number(){
        return this._house_number
    }

    get zip_code(){
        return this._zip_code
    }

    get telephone_number(){
        return this._telephone_number
    }

    get e_mail(){
        return this._e_mail
    }
}