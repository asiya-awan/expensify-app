const person = {
    //name: 'Andrew',
    age: 26,
    location: {
        city: 'Philladelphia',
        temp: 92
    }
};

//renaming  name(old)  firstName (new)
const {name:firstName = 'Anonymous', age, location} = person;

const {city, temp:temparature} = person.location;

console.log(`${firstName}  ${age}  ${location.city}  ${temparature}`);   


function myFunc({name = 'Default user', age = 'N/A'}) {
    console.log(`${name} ${age} `);
}


myFunc(person);    //Adrew 26
//myFunc();  //throws error; name undefined


//Allowing the configuration object to be optional
function myFunc1({name = 'Default user', age = 'N/A'} = {}) {
    console.log(`${name} ${age} `);
}

myFunc1(person);     //Adrew 26
myFunc1();            // Default user N/A 



