const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model")

module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ error: "Captain already exist" });
    }

    const hashedPassword = await captainModel.hashPassword(password);
    try {
        console.log(fullname);
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        })

        res.status(200).json({
            message: "Captain registered successfully"
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports.loginCaptain = async (req, res, next) => {4
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        const captain = await captainModel.findOne({ email }).select("+password");

        if (!captain) {
            return res.status(400).json({ message: "Captain not found" });
        }

        const isMatch = await captain.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const token = captain.generateAuthToken();
        res.status(200).json({ token });

    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.getCaptainProfile = async (req, res, next) => {    
    res.status(200).json({captain: req.captain});    
}   

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistTokenModel.create({
         token: token
    })
    res.clearCookie("token");
    res.status(200).json({ message: "Captain logged out successfully" });
}