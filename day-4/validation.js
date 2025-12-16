function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateAmount(amount) {
    return amount > 0 && amount <= 10000;
}

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = message;
        el.style.color = 'red';
    }
}

function clearError(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = '';
    }
}

function validateLoginForm(email, password) {
    let isValid = true;
    
    if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format');
        isValid = false;
    } else {
        clearError('emailError');
    }
    
    if (!validatePassword(password)) {
        showError('passwordError', 'Password must be at least 8 characters');
        isValid = false;
    } else {
        clearError('passwordError');
    }
    
    return isValid;
}

function validateRechargeForm(phone, amount) {
    let isValid = true;
    
    if (!validatePhone(phone)) {
        showError('phoneError', 'Invalid phone number');
        isValid = false;
    } else {
        clearError('phoneError');
    }
    
    if (!validateAmount(amount)) {
        showError('amountError', 'Amount must be between 1 and 10000');
        isValid = false;
    } else {
        clearError('amountError');
    }
    
    return isValid;
}