// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];     
//         snapshot.forEach((childSnapshot) => {
          
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()         
//         });
//     });
//     console.log('once: ',expenses);
// });


// database.ref('expenses')
//     .on('value',  (snapshot) => {
//         const expenses = [];    
//         snapshot.forEach((childSnapshot) => {
          
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()         
//         });
//     });
//     console.log('on - db changed',expenses);
// });

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Child Removed',snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('child_changed',snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('child_added',snapshot.key, snapshot.val());
// });

// database.ref('expenses').push( {
//     description: 'buy Gum',
//     note: '',
//     amount: 109500,
//     createdAt: 9763446456
//  });

//  database.ref('expenses').push( {
//     description: 'Phone bill',
//     note: 'phone bil note',
//     amount: 5900,
//     createdAt: 936346456
//  });

//  database.ref('expenses').push( {
//     description: 'Food',
//     note: 'pay rent note',
//     amount: 12000,
//     createdAt: 836346456
//  });

// database.ref('notes/-Ll32LvrYghZHgw_NNNn').update({
//     body: 'buy food'
// });
// database.ref('notes/-Ll32ZfSLdtGTL9r2Yd5').remove();



// database.ref('notes').set(notes);  //array converted to object structure
//difficult to find node by id



// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//         console.log(val);
//     }).catch( (error) =>{
    
//         console.log('Error in fething data',e)
//     })

  

// firebase.database().ref().set({
//     name: 'Asia Kainat',
//     age:111,
//     job: {
//         title: 'Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     haveSisters: true,
//     location: {
//         city: 'Karachi',
//         country: 'Pakistan'
//     }

// }).then(() => {    
//     console.log('Data is saved')
// }).catch( (error) =>{
//     console.log('Data is rejected')
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("Errror: ",e);
// });


// setTimeout(() => {
//     database.ref('age').set(10);
// },3500);


// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 6900);


// setTimeout(() => {
//     database.ref('age').set(20);
// }, 13500);



//              REMOVING             //
//Removing data from the database using remove
// firebase.database().ref('haveSisters').remove()
//     .then(()=> console.log('removed'))
//     .catch((e) =>  console.log('Error:',e));

    //Removing data from the database using set w/ value null
// firebase.database().ref('haveSisters').set(null)
// .then(()=> console.log('removed'))
// .catch((e) =>  console.log('Error:',e));


//              UDATING             // update object only at the root level

// firebase.database().ref().update({
//     haveSisters: null,  //remove
//     age: 342,
//     name: 'Asia Kainat Awan',
//     // location: {
//     //     city: 'Boston'  //replace the whole location obj
//     // }
//     'location/city':'Boston'  //only change the city
//     })
//     .then(() => console.log('updated'))
//     .catch((e) =>  console.log('Error:',e));

// firebase.database().ref().update({
//     stressLevel: 9,  //remove
//     name: 'Asia Kainat Awan',
//     'job/company':'Philla delphia' , //only change the city,
//     'location/city':'Newyourk'  //only change the city,
//     })
//     .then(() => console.log('updated'))
//     .catch((e) =>  console.log('Error:',e));

//     database.ref().on('value', (snapshot) => {
//         const value = snapshot.val();
//         console.log(`${value.name} is a ${value.job.title} in ${value.job.company}`);
//     });

// firebase.database().ref().set({
//     name: 'Asia Kainat',
//     age:111,
//     haveSisters: true,
//     location: {
//         city: 'Karachi',
//         country: 'Pakistan'
//     }

// }, (error) => {
//     if(error){
//         console.log('Data is rejected')
//     }
//     else {  
//         console.log('Data is saved')
//     }
// })


//override existing data completely
// database.ref().set({
//     age:39
// });

//only overrride that attribute
// database.ref('age').set(27);
// database.ref('location/city').set('Hyderabad');