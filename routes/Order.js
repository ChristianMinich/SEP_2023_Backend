import { validateOrder } from "../Order-Validator";
exports.order = function(req, res) {
    const { 
        token,
        time_stamp,
        employee_id,
        first_name,
        last_name,
        street,
        house_number,
        zip_code,
        number_of_packages,
        package_size,
        handling_info
        } = req.body; 
    
    if(validateOrder(token, time_stamp, employee_id, first_name, last_name, street, house_number, zip_code, number_of_packages, package_size, handling_info)){
       // SQL INSERT QUERY
        res.status(200).json({ status: '200' })
    }
    /*
    res.send(JSON.stringify(token) + JSON.stringify(time_stamp) 
    + " " + JSON.stringify(employee_id) + " " + JSON.stringify(first_name) + " " + JSON.stringify(last_name)
    + " " + JSON.stringify(street) + " " + JSON.stringify(house_number + " " + JSON.stringify(zip_code) + " " + JSON.stringify(number_of_packages)
    + " " + JSON.stringify(package_size) + " " + JSON.stringify(handling_info)));
    */
    res.status(400).json({ status: '400' })
}