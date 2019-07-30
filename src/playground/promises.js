const promise = new Promise((resolve, reject) => {
    setTimeout( ()=>{

        //resolve('This is my resolved data');
        // resolve('This is my another resolved data');  //ignored
        //reject('This is rejected');
        reject(new Error('This is rejected'))
    },1000)
});
console.log('Before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
});

// promise.then(
//     (data) => console.log(data),
//     (errorData) => console.log(errorData)
// );

const onPromise=(data) => {
    console.log(data);
}


console.log('After');
