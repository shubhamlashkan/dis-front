var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirm_password = AC.get('confirm_password').value; // to get value in input tag
        if (password !== confirm_password) {
            console.log('false');
            AC.get('confirm_password').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());
export { PasswordValidation };
//# sourceMappingURL=password-validation.js.map