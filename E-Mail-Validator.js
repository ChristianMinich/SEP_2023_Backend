
/**
 * This Function return True if the E-Mail is valid and is not Else
 * @param {*} email 
 * @returns {Boolean}
 */
export function ValidateEmail(email){
    var mailformat = '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';

    if(email.value.match(mailformat)){
        return true;
    }
    else{
        return false;
    }
}