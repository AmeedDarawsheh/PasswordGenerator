
function generatePassword() {
    const length = document.getElementById("length").value;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#.";
    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.value === "") {
        alert("There is no password to copy!");
        return;
    }

    passwordField.select();
    navigator.clipboard.writeText(passwordField.value)
        .then(() => alert("The password has been copied!"))
        .catch(() => alert("An error occurred during copying."));
}
