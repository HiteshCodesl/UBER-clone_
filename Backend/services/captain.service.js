const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
    firstname, lastname, email, password,  plate, vehicleType, color, capacity
}) => {
    if (!firstname || !lastname || !email || !password || !plate || !vehicleType || !color || !capacity) {
     throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle :{
            color,
            plate,
            capacity,
            vehicleType
        },
    })

    return captain;
}