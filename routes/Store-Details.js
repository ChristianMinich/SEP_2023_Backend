// DB Import
/**
 * Function that returns all store-details in a JSON Format.
 * @param {*} req
 * @param {*} res
 */
exports.store_details = function (req, res) {
    //
    //  TODO: Turn into SQL Querys
    //

    res.status(200).json([
        {
            id: "WB",
            name: "WillenBrock",
            owner: "Hendrick Willenbrock",
            street: "Bernd-Rosemeyer-Straße",
            houseNumber: "40",
            zip: "49809",
            city: "Lingen",
            telephone: "0591 963360",
            email: "wb@wb.de",
            logo: "https://connect.grapealliance.com/wp-content/uploads/2021/07/51095814_10161155587155618_7555144092695396352_n.png",
            coordinates: {
                longitude: 7.318337,
                latitude: 52.518285,
            },
        },
        {
            id: "WL",
            name: "Weltladen",
            owner: "Lingen",
            street: "Grosse Str.",
            houseNumber: "4",
            zip: "49808",
            city: "Lingen",
            telephone: "01234 567890",
            email: "welt@laden.de",
            logo: "https://cdn.shopify.com/s/files/1/0347/6792/9403/collections/24_1200x1200.png?v=1584600278",
            coordinates: {
                longitude: 7.315843,
                latitude: 52.522687,
            },
        },
        {
            id: "LWT",
            name: "Weltladen",
            owner: "Lingen",
            street: "Grosse Str.",
            houseNumber: "4",
            zip: "49808",
            city: "Lingen",
            telephone: "01234 567890",
            email: "welt@laden.de",
            logo: "https://cdn.shopify.com/s/files/1/0347/6792/9403/collections/24_1200x1200.png?v=1584600278",
            coordinates: {
                longitude: 7.315843,
                latitude: 52.522687,
            },
        },
    ]);
};
