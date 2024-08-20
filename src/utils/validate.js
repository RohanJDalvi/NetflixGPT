export const checkValidData = (email, password, name = null) => {
    if (name !== null) {
        const isNameValid = /^[A-Za-z\s]{2,50}$/.test(name);
        if (!isNameValid) return "Name is not valid";
    }

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
};
