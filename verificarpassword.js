// passwordValidator.js
function validatePassword(password) {
    const minLength = /.{8,}/;            // Sin comillas
    const hasUpperCase = /[A-Z]/;         // Sin comillas
    const hasLowerCase = /[a-z]/;         // Sin comillas
    const hasNumber = /[0-9]/;            // Sin comillas
    const hasSpecialChar = /[!@#$%^&*()_+{}|:<>?]/; // Sin comillas

    return (
        minLength.test(password) &&
        hasUpperCase.test(password) &&
        hasLowerCase.test(password) &&
        hasNumber.test(password) &&
        hasSpecialChar.test(password)
    );
}

module.exports = { validatePassword };