
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {
    GoogleSignin,
    statusCodes
    } from '@react-native-google-signin/google-signin';


  GoogleSignin.configure({
    webClientId:'76551342983-r53aeuj34n2t5j5ej68s26su526td7jn.apps.googleusercontent.com'
  })
const MyComponent = () => {

    const googleSignin  = async () => {
            try {
              await GoogleSignin.hasPlayServices();
              const userInfo = await GoogleSignin.signIn();
              this.setState({ userInfo });
              console.log(userInfo);
            } catch (error) {
                console.log(error);
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
              } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
              } else {
                // some other error happened
              }
            }
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=> googleSignin()}>

            <Text>MyComponent</Text>
        </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default MyComponent;







// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import GoogleButton from "react-google-button";
// import { signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
// import { auth, provider } from "../firebaseConnection";
// import firebase from '../firebaseConnection';
// import React, {Component, useEffect,useState} from 'react';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';


// export default function App() {
//     // const [authenticated, setAuthenticated] = useState(false);
  
//     useEffect(() => {
//       GoogleSignin.configure({
//         webClientId:
//           '76551342983-r53aeuj34n2t5j5ej68s26su526td7jn.apps.googleusercontent.com',
//       });
//     }, []);
  
//     async function onGoogleButtonPress() {
//       // Get the users ID token
//       const { idToken } = await GoogleSignin.signIn();
  
//       // Create a Google credential with the token
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
//       // Sign-in the user with the credential
//       return auth().signInWithCredential(googleCredential);
//     }
  
//     auth().onAuthStateChanged((user) => {
//       if (user) {
//         setAuthenticated(true);
//       } else {
//         setAuthenticated(false);
//       }
//     });
  
//     // if (authenticated) {

//         <View style={{ marginTop: 30 }}>
//           <Button title="Signout" onPress={() => firebase.auth.signOut()} />
//         </View>

//     }
  
//     return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
//   }


// // export default function GoogleSignin() {
// //     console.log("deiofheuifh");
// //   function SignUp() {
// //     firebase.auth.GOOGLE_SIGN_IN_METHOD(auth, provider)
// //       .then((result) => {
// //         // This gives you a Google Access Token. You can use it to access the Google API.
// //         // const credential = GoogleAuthProvider.credentialFromResult(result);
// //         // const token = credential.accessToken;
// //         // The signed-in user info.
// //         const user = result.user;

// //         // name = user.displayName
// //         // email = user.email
// //         // photo = user.photoURL

// //         // your code here
// //         alert(user.displayName);
// //       })
// //       .catch((error) => {
// //         // Handle Errors here.
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         // The email of the user's account used.
// //         const email = error.email;
// //         // The AuthCredential type that was used.
// //         const credential = GoogleAuthProvider.credentialFromError(error);
// //         console.log(errorMessage);
// //         // ...
// //       });
// //   }

// //   function SignOut() {
// //     signOut(auth)
// //       .then(() => {
// //         // Sign-out successful.
// //         // your code
// //       })
// //       .catch((error) => {
// //         // An error happened.

// //         console.log(error);
// //       });
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text>Firebase Auth!</Text>
// // <TouchableOpacity onPress={()=> SignUp()}>
// //     <View >
// // <Text >deqdeqiodf</Text>
// //     </View>
// // </TouchableOpacity>
// //       {/* <GoogleButton  /> */}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });