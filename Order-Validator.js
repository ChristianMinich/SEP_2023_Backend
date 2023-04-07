
export function validateOrder(token, time_stamp, employee_id, first_name, last_name, street, house_number, zip_code, number_of_packages, package_size, handling_info){
    if(
        token !== null &&
        time_stamp !== null &&
        employee_id !== null &&
        first_name !== null &&
        last_name !== null &&
        street !== null &&
        house_number !== null &&
        zip_code !== null &&
        number_of_packages !== null &&
        package_size !== null &&
        handling_info !== null
        ) 
        {
            if(1 === 1) // Token + TimeStep valid?
            {
                if(1 === 1) //
                {
                    if(1 === 1)
                    { //SQL Querys
                        return true;
                    }
                }
            }
        }
        else
        {
            return false;
        }

    // 2nd Option
    const myObj = new Order_Object();

    if(Object.values(myObj) !== null){
        
    }
}