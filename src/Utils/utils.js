export const handleValidation = (req) => {
    let errors = {};
    let formIsValid = true;

    if (!req.firstName) {
        formIsValid = false;
        errors["First Name"] = "Cannot be empty";
    }
    else if (typeof req.firstName !== "undefined") {
        if (!req.firstName.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["First Name"] = "Only letters";
        }
    }

    if (!req.lastName) {
        formIsValid = false;
        errors["Last Name"] = "Cannot be empty";
    }
    else if (typeof req.lastName !== "undefined") {
        if (!req.lastName.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["Last Name"] = "Only letters";
        }
    }

    if (!req.dateOfBirth) {
        formIsValid = false;
        errors["Date Of Birth"] = "Cannot be empty";
    }

    if (!req.courseName) {
        formIsValid = false;
        errors["Course Name"] = "Cannot be empty";
    }

    if (!req.hours) {
        formIsValid = false;
        errors["Hours"] = "Cannot be empty";
    } else if (req.hours < 1) {
        formIsValid = false;
        errors["Hours"] = "Must be greater than 0";
    }

    if (!req.price) {
        formIsValid = false;
        errors["Price"] = "Cannot be empty";
    } else if (req.price < 0.01) {
        formIsValid = false;
        errors["Price"] = "Must be greater than 0.00";
    }

    if (!formIsValid) {
        console.error({ errors: errors });
        alert(getErrorMessages(errors));
    }
    return formIsValid;
};

const getErrorMessages = (errors) => {
    var text = "";
    for (const item in errors) {
        text += item + " : " + errors[item] + "\r\n";
    }
    return text;
}

export const getFormattedDate = (date) => {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '/' + month + '/' + year;
}

// module.exports = { handleValidation, getFormattedDate }; 