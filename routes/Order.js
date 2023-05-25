const database = require("../Database");
exports.order = function (req, res) {
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
        handling_info,
    } = req.body;
    // TODO: Validate Request with JWT
    /* if(validateOrder(token, time_stamp, employee_id, first_name, last_name, street, house_number, zip_code, number_of_packages, package_size, handling_info)){
       // SQL INSERT QUERY
        res.status(200).json({ status: '200' })
    } */

    const db = database.getConnection();

    if (
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
    ) {
        db.then((conn) => {
            conn.query("INSERT INTO ORDER1 VALUES (?, ?, ?, ?, ?, ?, ?)", [
                token,
                time_stamp,
                employee_id,
                "M",
                "01-01-1900",
                "cdp",
                124,
            ]);
            conn.end;
        });

        db.then((conn) => {
            conn.query("INSERT INTO RECIPIENT VALUES (?, ?, ?, ?, ?, ?)", [
                token,
                first_name,
                last_name,
                street,
                house_number,
                zip_code,
            ]);
            conn.end;
            res.status(200).send("Order successfully placed " + token);
        });
    }

    /* res.send(JSON.stringify(token) + JSON.stringify(time_stamp)
    + " " + JSON.stringify(employee_id) + " " + JSON.stringify(first_name) + " " + JSON.stringify(last_name)
    + " " + JSON.stringify(street) + " " + JSON.stringify(house_number + " " + JSON.stringify(zip_code) + " " + JSON.stringify(number_of_packages)
    + " " + JSON.stringify(package_size) + " " + JSON.stringify(handling_info)));
    */
    // res.status(400).json({ status: '400' })
};
