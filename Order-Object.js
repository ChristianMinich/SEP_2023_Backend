
class Order_Object{
    constructor(token, time_stamp, employee_id, first_name, last_name, street, house_number, zip_code, number_of_packages, package_size, handling_info){
        this._token = token,
        this._time_stamp = time_stamp,
        this._employee_id = employee_id,
        this._first_name = first_name,
        this._last_name = last_name,
        this._street = street,
        this._house_number = house_number,
        this._zip_code = zip_code,
        this._number_of_packages = number_of_packages,
        this._package_size = package_size,
        this._handling_info = handling_info
    }

    get token(){
        return this._token
    }

    get time_stamp(){
        return this._time_stamp
    }

    get employee_id(){
        return this._employee_id
    }

    get first_name(){
        return this._first_name
    }

    get last_name(){
        return this._last_name
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

    get number_of_packages(){
        return this._number_of_packages
    }

    get package_size(){
        return this._package_size
    }

    get handling_info(){
        return this._handling_info
    }
}