import  { firebase, googleAuthProvider, gitHubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLoginGoogle = () => {
    return () => {      
            return firebase.auth().signInWithPopup(googleAuthProvider);          
       }
    };

// export const startLoginGitHub = () => {
//     return () => {      
//             return firebase.auth().signInWithPopup(gitHubAuthProvider);          
//         }
//     };

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
        };
};