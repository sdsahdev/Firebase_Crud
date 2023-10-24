
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet , Button } from 'react-native';
import Product from './Product';

//usestate

// const MyComponent = () => {
//     const [count,setcount] = useState(0)
//     return (
//         <View >
//         <Button title='- state'  onPress={() => setcount(10)}/>

//         <Text >
//         {count}

//         </Text>
//         <Button title='+ state'  onPress={() => setcount(count + 1)}/>
//         </View>
//     );
// };


//useeffecect with usestate

// const MyComponent = () => {


//     const [count,setcount] = useState(0)
//     const [data,setdata] = useState('inital data')
//     useEffect(()=> {
//         console.warn("test use effect",count)
//         if(count == 5){
//             setdata("updatd data")
//         }
//     })
//     return (
//         <View >
//         <Button title='- state'  onPress={() => setcount(10)}/>
        
//         <Text style={{fontSize:70 , color:'white'}}>
//  {count}
//         </Text>
//         <Text style={{fontSize:70 , color:'white'}}>
//  {data}
//         </Text>

//         <Button title='+ state'  onPress={() => setcount(count + 1)}/>
//         </View>
//     );
// };

const MyComponent = () => {


    const [count,setcount] = useState(0)

    return (
        <View >
       <Product data={count}/>
        <Button title='- state'  onPress={() => setcount(10)}/>
        
        <Text style={{fontSize:70 , color:'white'}}>

        </Text>


        <Button title='+ state'  onPress={() => setcount(count )}/>
        </View>
    );
};
export default MyComponent;
