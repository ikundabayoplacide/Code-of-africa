function stringTransform(input) {
    const length = input.length;
    let result = input;

    // while length is divisible by both 3 and 5 (i.e., by 15),
    // perform both operations in the specified order.

    if (length % 3 === 0 && length % 5 === 0) {

        // Reverse the string

        result = result.split('').reverse().join('');

        // Replace each character with collesponding ASCII code

        result = result.split('').map(char => char.charCodeAt(0)).join(' ');

    } else if (length % 3 === 0) {

        // If length is divisible by 3,  the string will reserved.

        result = result.split('').reverse().join('');

    } else if (length % 5 === 0) {

        // while length is divisible by 5, replace each character with its ASCII code

        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return result;
}

// case tested.

const input = "Placideikundaba";
const transformed = stringTransform(input);
console.log(transformed); // here the out put will be like : "97 98 97 100 110 117 107 105 101 100 105 99 97 108 80"