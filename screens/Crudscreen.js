import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import {firebaseAuth} from '../firebaseConnection';
import firebase from '../firebaseConnection';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return(
    <View />
  )
}

export class Crudscreen extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      name: '',
      phone: 0,
      age: 0,
      login : false,
    };
  }



  Insert_now = () => {
    this.setState({login : true})

    firebase
      .database()
      .ref('users/' + this.state.phone)
      .set({
      
        fname: this.state.name,
        age: this.state.age,
        
      })
      setTimeout(() => {this.setState({login: false})}, 2000)


  };

  Update_now = () => {
   

    this.setState({login : true})
    let ref = firebase.database().ref('users/');
    ref.once('value').then(snapshot => {
      var key = Object.keys(snapshot.val());
      console.log(key);

      if (key.indexOf(this.state.phone) >= 0) {
        firebase
          .database()
          .ref('users/' + this.state.phone)
          .update({
            age: this.state.age,
            fname: this.state.name,
          });
          this.setState({login : false})
      } else {

        Alert.alert('Your data is not found');
        this.setState({login : false})
      }
    });
    // this.setState({login : false})

  };

  Delete_now = () => {
    this.setState({ login: true })

    let ref = firebase.database().ref('users/');
    ref.once('value').then(snapshot => {
      var key = Object.keys(snapshot.val());
      console.log(key);

      if (key.indexOf(this.state.del_phone) >= 0) {
        firebase
          .database()
          .ref('users/' + this.state.del_phone)
          .remove();
          this.setState({ login: false })
      } else {
        Alert.alert('Your data is not found');
        this.setState({ login: false })
      }
    });
    
  };

  View_my_data = () => { 
    this.setState({ login: true })

    firebase
      .database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        var keys = Object.keys(snapshot.val());
        if (keys.includes(this.state.del_phone)) {
          //if user is exits
          firebase
            .database()
            .ref('users/' + this.state.del_phone)
            .once('value')
            .then(snapshot => {
              Alert.alert(
                `Age: ${snapshot.val().age} Name: ${snapshot.val().fname}`,
              );
              this.setState({ login: false })

            });
        } else {
          this.setState({ login: true })
          Alert.alert('Your data is not found');
          this.setState({ login: false })

        }
      });
      // this.setState({ login: false })

  };
  Sign_out = () => {
    this.setState({ login: true })

    firebaseAuth.signOut();

    // this.setState({ login: false })

  };
  render() {
    console.log(this.state.login);
    return (

      <View style={styles.container}>

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>CRUD APP</Text>
        </View>

        <View style={{flex: 5, marginHorizontal: 5}}>
          <ScrollView>
            <TextInput
              onChangeText={fname => {
                this.setState({name: fname});
              }}
              style={styles.textnputStyle}
              placeholder="Name"
            />
            <TextInput
              value={this.state.text}
              minLength={9}
              onChangeText={phone => {
                this.setState({phone: phone});
              }}
              keyboardType="number-pad"
              maxLength={10}
              style={styles.textnputStyle}
              placeholder="Phone"
            />
            <TextInput
              onChangeText={age => {
                this.setState({age: age});
              }}
              keyboardType="number-pad"
              style={styles.textnputStyle}
              placeholder="Age"
            />
            <TouchableOpacity
              onPress={this.Insert_now}
              style={{
                backgroundColor: '#34cf48',
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
              <Text>Insert</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.Update_now}
              style={{
                backgroundColor: 'orange',
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
              <Text>Update</Text>
            </TouchableOpacity>
          
            
          </ScrollView>
        </View>

        <View style={{position: 'absolute', top: '50%', left: '40%'}}>
        {
         this.state.login === true ? ( <ActivityIndicator size={50} />) :
          null 
        }
                 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  textnputStyle: {
    borderColor: '#000',
    flex: 1,
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
});

export default Crudscreen;
