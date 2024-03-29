const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is empty";
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is empty";
    } else if (!Validator.isEmail(data.email)){
        errors.email = "Invalid email address"
    }

    if(Validator.isEmpty(data.password)){
        errors.name = "Password field is empty";
    }

    return {errors, isValid:isEmpty(errors)};


}