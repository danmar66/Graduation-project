const Admin = require("../models/Admin");

module.exports = async (req, res, next) => {
    try {
        const isFirst = await Admin.find();
        if (isFirst.length > 0) {
            next();
        }

        await Admin.create({
            username: process.env.ADMIN_USERNAME,
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
        })

        // const admin = new Admin({
        //   username: process.env.ADMIN_USERNAME,
        //   email: process.env.ADMIN_EMAIL,
        //   password: process.env.ADMIN_PASSWORD,
        // });
        //
        // await admin.save();
        next();
    } catch (e) {
        console.log(e);
    }
};
