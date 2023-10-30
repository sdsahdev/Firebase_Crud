import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Crudscreen } from './Crudscreen';
import Delete_data from './Delete_data';
import ApiCall from './APIScreens/ApiCall';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { firebaseAuth } from '../firebaseConnection';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { signInWithPopup, getAuth, auth } from 'firebase/auth';
import firebase from '../firebaseConnection';
import { provider } from '../firebaseConnection';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// const auth = getAuth();
// function signUp() {
//   console.log('deiwhdiwdfiewf');

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       // const credential = GoogleAuthProvider.credentialFromResult(result);
//       // const token = credential.accessToken;

//       // The signed-in user info.
//       const user = result.user;
//       console.log('123');

//       alert(user.displayName);
//       // ...
//     })
//     .catch(error => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       alert(errorMessage);
//       console.log('deiwhdiwdfiewf');
//       console.log(errorMessage);
//       // ...
//     });
// }
GoogleSignin.configure({
  webClientId: '76551342983-r53aeuj34n2t5j5ej68s26su526td7jn.apps.googleusercontent.com'
})
const googleSignin = async () => {
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

function Home({ navigation }) {
  Sign_out = () => {
    firebaseAuth.signOut();
  };

  return (
    <View style={styles.viewStyle}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 50 }}>
          CRUD APP
        </Text>

        <Image
          style={{ height: 90, width: '90%', margin: 10 }}
          resizeMode="cover" // or 'stretch'
          source={require('../asserts/fire.png')}
        />
      </View>
      <View style={{ justifyContent: 'center', marginTop: '20%' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Crudscreen')}
          style={{
            backgroundColor: '#3c84ff',
            paddingVerticalV: 5,
            alignItems: 'center',
            fontSize: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 8,
            margin: 10,
          }}
          icon="camera"
          mode="contained">
          <Text>Insert and Update Data</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('Delete_data')}
          style={{
            backgroundColor: '#4bff8f',
            paddingVerticalV: 5,
            alignItems: 'center',
            fontSize: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 8,
            margin: 10,
          }}
          icon="camera"
          mode="contained">
          <Text>Delete and View Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => googleSignin()}
          style={{
            backgroundColor: '#3c84ff',
            paddingVerticalV: 5,
            alignItems: 'center',
            fontSize: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 8,
            margin: 10,
          }}
          icon="camera"
          mode="contained">
          <Text>Google Signing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.Sign_out}
          style={{
            backgroundColor: '#e765ff',
            paddingVerticalV: 5,
            alignItems: 'center',
            fontSize: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 8,
            margin: 10,
          }}
          icon="camera"
          mode="contained">
          <Text style={{ color: 'white' }}>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ApiCall')}
          style={{
            backgroundColor: '#fee45a',
            paddingVerticalV: 5,
            alignItems: 'center',
            fontSize: 10,
            marginBottom: 10,
            borderRadius: 15,
            padding: 8,
            margin: 10,
          }}
          icon="camera"
          mode="contained">
          <Text style={{ color: '#000' }}>News API</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MyComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: '100%' }}>
      <NavigationContainer>
        <View style={{ flex: 1, width: '100%' }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Firebase' }}
            />
            <Stack.Screen
              name="Crudscreen"
              component={Crudscreen}
              options={{ title: 'Crudscreen' }}
            />
            <Stack.Screen
              name="Delete_data"
              component={Delete_data}
              options={{ title: 'Delete_data' }}
            />
            <Stack.Screen
              name="ApiCall"
              component={ApiCall}
              options={{ title: 'ApiCall' }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    backgroundColor: '#e765ff',
    paddingVerticalV: 5,
    alignItems: 'center',
    fontSize: 10,
    position: 'absolute',
    marginBottom: 10,
    borderRadius: 15,
    padding: 8,
    margin: 10,
  },
  viewStyle: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
});

export default MyComponent;
