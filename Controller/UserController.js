var mongoose = require('../DBSchema/DBConfig');
var UserSchema = mongoose.model('Customer');

var Controller = function () {
    this.addUser = function (data) {
        return new Promise(function (resolve, reject) {
            var user = new UserSchema({
                First_Name: data.First_Name,
                Last_Name: data.Last_Name,
                NIC_Passport_No: data.NIC_Passport_No,
                DateOfBirth: data.DateOfBirth,
                citizenship: data.citizenship,
                Deposit_Amount: data.Deposit_Amount,
                Username: data.Username,
                Password: data.Password,
                Security_Question: data.Security_Question,
                Security_Answer: data.Security_Answer,
                Email_Address: data.Email_Address,
                Address: data.Address,
                Mobile: data.Mobile
            });
            user.save().then(function () {
                resolve({ status: 200, message: "User Added Successfully..... !" });
            }).catch(function (err) {
                reject({ status: 500, message: "Error: " + err });
            })
        });
    }
    this.getAll = function () {
        return new Promise(function (resolve, reject) {
            UserSchema.find().exec().then(function (data) {
                resolve({ status: 200, userdata: data });
            }).catch(function (err) {
                reject({ status: 404, message: "Data Not Available....!" });
            })
        })
    }
    this.searchUser = function (NIC_Passport_No) {
        return new Promise(function (resolve, reject) {
            UserSchema.findOne({ NIC_Passport_No: NIC_Passport_No }).exec().then(function (data) {
                resolve({ status: 200, userSearch: data });
            }).catch(function (err) {
                reject({ status: 404, message: "NIC Not Found......!" });
            })
        })
    }

    this.updateUser = function (NIC_Passport_No, body) {
        return new Promise(function (resolve, reject) {
            UserSchema.updateOne({ NIC_Passport_No: NIC_Passport_No }, body).then(function (data) {
                resolve({ status: 200, userUpdated: data });
            }).catch(function (err) {
                reject({ status: 404, message: "NIC Not Found......!" });
            })
        })
    }

};

module.exports = new Controller();