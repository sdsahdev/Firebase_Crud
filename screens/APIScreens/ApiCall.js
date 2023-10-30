ApiCall;
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ViewMoreText from 'react-native-view-more-text';

const ApiCall = () => {
  const [myuserdata, setUserdata] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    asyncCall();
  }, []);

  const asyncCall = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=de6a9397f8e948099ffbe8f51efa0651',
      );
      const mydata = await response.json();
      setLoading(false);
      console.log(mydata.articles);

      setUserdata(mydata);
    } catch (error) {}
  };

  return (
    <View
      style={{
        width: '100%',
        color: 'red',
        backgroundColor: '#a784ce',
        alignItems: 'center',
        flex: 1,
      }}>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" Colors="#0000ff" />
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <FlatList
            data={myuserdata.articles}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View style={styles.imageContenor}>
                  {''}
                  <Image
                    resizeMode="cover"
                    source={{uri: item.urlToImage}}
                    style={styles.imageStyle}
                  />
                </View>

                <View>
                  <View style={styles.bioDataContainer}>
                    <Text style={styles.bioData}> Article Details</Text>
                    <Text style={styles.ibNum}> {item.id} </Text>
                  </View>
                  <View style={styles.mainContainer}>
                    <Text style={styles.myName}>Name : {item.source.name}</Text>
                    <Text style={styles.myName}>author : {item.author}</Text>
                    <Text style={styles.myName}>content : </Text>
                    <ViewMoreText
                      style={styles.mainContainer}
                      numberOfLines={3}
                      textStyle={{textAlign: 'center'}}>
                      <Text style={styles.myName}>{item.content}</Text>
                    </ViewMoreText>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageStyle: {width: '100%', height: 180},
  imageContenor: {
    padding: 10,
  },
  bioData: {
    fontSize: 20,
    color: '#fff',
  },
  ibNum: {fontSize: 30, color: 'rgba(255,255,255,0.5)'},

  bioDataContainer: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    backgroundColor: '#353535',
  },
  mainContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    padding: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#707276',
    numberOfLines: 2,
    ellipsizeMode: 'tail',
  },
  loader: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  myName: {
    padding: 5,
    ellipsizeMode: 'tail',
    color: 'white',
  },
  mianHeader: {fontSize: 30, color: '#fff', backgroundColor: '#fff'},
});

export default ApiCall;
/* 
1) working in printer
2) working on map apis
3) Working on in app purchase
4) working on notifications
5) Working on social meadia type applications(Instagram)
6) Working on chat app
7) working in  launguage localtion
8) Working on deply app on playstor and app store
9) Working on booking app
10) working on firebase and complex APIS
11) Working on pluzzel game 
12) Working on vi
*/