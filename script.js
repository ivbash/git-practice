function validate() {
    return Math.random() < 0.5;
}

function format(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
