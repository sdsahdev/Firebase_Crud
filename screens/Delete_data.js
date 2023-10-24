//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, Alert,StyleSheet,TouchableOpacity ,TextInput,ScrollView,ActivityIndicator} from 'react-native';
import {firebaseAuth} from '../firebaseConnection';

import firebase from '../firebaseConnection';




const Delete_data = () =>  {

const [data,setData] = useState('')
const [loading,setLoading] = useState(false)
View_my_data = () => { 
    setLoading(true)

    firebase
      .database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        var keys = Object.keys(snapshot.val());
        if (keys.includes(data)) {
          //if user is exits
          firebase
            .database()
            .ref('users/' + data)
            .once('value')
            .then(snapshot => {
              Alert.alert(
                `Age: ${snapshot.val().age} Name: ${snapshot.val().fname}`,
              );
              setLoading(false)


            });
        } else {
            setLoading(true)
            Alert.alert('Your data is not found');
            setLoading(false)

        }
      });
      // this.setState({ login: false })

  };
  Sign_out = () => {
   setLoading(true)

    firebaseAuth.signOut();
    setLoading(false)
  };
Delete_now = () => {
    setLoading(true)


    let ref = firebase.database().ref('users/');
    ref.once('value').then(snapshot => {
      var key = Object.keys(snapshot.val());
      console.log(key);

      if (key.indexOf(data) >= 0) {
        firebase
          .database()
          .ref('users/' + data)
          .remove();
          setLoading(false)

      } else {
        Alert.alert("Your datab is not found");

        setLoading(false)

      }
    });
  };

    return (
        <View style={styles.container}>
       <View style={{flex: 5, marginHorizontal: 5}}>
          <ScrollView>
           
            <TextInput
            value={data}
              onChangeText={del_phone => {
                setData(del_phone)
              }}
              keyboardType="phone-pad"
              maxLength={10}
              style={styles.textnputStyle}
              placeholder="Phone"
            />

            <TouchableOpacity
              onPress={this.Delete_now}
              style={{
                backgroundColor: 'red',
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
              <Text>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.View_my_data}
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
             
              <Text>View</Text>
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
              <Text style={{color: 'white'}}>Sign out</Text>
            </TouchableOpacity>
            
          </ScrollView>
        </View>
        <View style={{position: 'absolute', top: '50%', left: '40%'}}>
   {
    loading === true ? ( <ActivityIndicator size={50} />) :
          null 
   }
    
          
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
      },
      textnputStyle: {
        borderColor: '#000',
        flex: 1,
        margin:20,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        marginBottom: 15,
      },
      loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });;

//make this component available to the app
export default Delete_data;
