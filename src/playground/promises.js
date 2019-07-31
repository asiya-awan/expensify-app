const promise = new Promise((resolve, reject) => {
    setTimeout( ()=>{
        resolve('This is my resolved data');
        // resolve('This is my another resolved data');  //ignored
        //reject('This is rejected');
        // reject(new Error('This is rejected'))
    },1000)
});
console.log('Before');

promise.then((data) => {
    console.log('Then data: ',data);
    return data;
}).then((data) => {
    
   console.log('another then data: ',data); 
   return new Promise((resolve, reject) => {
       resolve('This is another promise')
   })
}).then((data) => {
    console.log('another then data: ',data);
}).catch((error) => {
    console.log(error)
});

console.log('After');

// promise.then(
//     (data) => console.log(data),
//     (errorData) => console.log(errorData)
// );

// const onPromise=(data) => {
//     console.log(data);
// }


