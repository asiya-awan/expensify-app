import * as firebase from 'firebase';
import * as expensesAction from '../actions/expenses';

const config = {
    apiKey: "AIzaSyCgGdpNRHrlkuutId19_npsz3XuMaqqd0o",
    authDomain: "expensify-28bf8.firebaseapp.com",
    databaseURL: "https://expensify-28bf8.firebaseio.com",
    projectId: "expensify-28bf8",
    storageBucket: "expensify-28bf8.appspot.com",
    messagingSenderId: "668737482501",
    appId: "1:668737482501:web:395f140dca8fc76b"

};
firebase.initializeApp(config);
const database = firebase.database();

database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];     
        snapshot.forEach((childSnapshot) => {
          
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()         
        });
    });
    console.log(expenses);
});


database.ref('expenses')
    .on('value',  (snapshot) => {
        const expenses = [];    
        snapshot.forEach((childSnapshot) => {
          
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()         
        });
    });
    console.log(expenses);
});
