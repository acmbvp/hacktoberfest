export const numberToString = (number = 0) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")