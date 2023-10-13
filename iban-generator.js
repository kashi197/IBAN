function generateIBAN() {
    const country = 'AE';
    const bankCode = String(Math.floor(100 + Math.random() * 899)).padStart(3, '0');
    const accountNumber = String(Math.floor(1e15 + Math.random() * 9e15)).padStart(16, '0');
    const bban = bankCode + accountNumber;
    const converted = bban + '291400'; 
    const mod97 = 98 - BigInt(converted) % 97n;
    const checkDigits = String(mod97).padStart(2, '0');
    const iban = country + checkDigits + bban;
    document.getElementById('iban').innerText = iban;
}
