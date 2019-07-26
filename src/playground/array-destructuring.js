console.log('Array destrucring');

 const address = [undefined, 'Philadelphia', 'Pennsylvania','19432'];
//const address = [ 'Philadelphia', 'Pennsylvania','19432'];

console.log(`You are in ${address[1]}  ${address[2]} `);
// const [street, city, state, zip] = address;
const [street = 'Allegheny drive', , , yourzip] = address;

// console.log(`Street: ${street}, City: ${city}, State: ${state}, Zip: ${zip}`);
console.log(`Street: ${street}, Zip: ${yourzip}`);


const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);



const persons = [
    {
        name: 'Andrew',
        age: 26,
        location: {
            city: 'Philladelphia',
            temp: 92
        }
    },
    {
        name: 'Ali',
        age: 24,
        location: {
            city: 'Phsdia',
            temp: 99
        }
    },
    {
        name: 'Saia',
        age: 22,
        location: {
            city: 'Lome',
            temp: 92
        }
    },
];