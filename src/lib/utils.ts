const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function checkInvalidEmail(email: string) {
    return !EMAIL_REGEX.test(email);
}

export function checkInvalidPassword(password: string) {
    console.log("asdasdasdasdasdasd ", password);
    return password.length < 6;
}