export const FPhoneNumber = (value: string) => {
    let tmp3 = value.toString().trim();
    let tmp2 = tmp3.replace(/\./g, '');
    let tmp = tmp2.replace(/\ /g, '');
    // console.log(tmp);
    if (tmp.length > 3 && tmp.length < 6) {
        return tmp?.replace(/^(.{3})(.*)$/, '$1 $2');
    } else if (tmp.length > 6) {
        return tmp?.replace(/^(.{3})(.{3})(.*)$/, '$1 $2 $3');
    } else {
        return value;
    }
};

export const FCardNumber = (cardNumber: string) => {
    return cardNumber.replace(/\W/g, '').replace(/(.{4})/g, '$1 ').trim();
};