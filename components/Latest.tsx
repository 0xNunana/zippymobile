import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Latest = () => {
  return (
    <View style={{ flex: 1,backgroundColor:'#F4F4F4' }}>
     
     
        {/* Your long content goes here */}
        {Array.from({ length: 50 }, (_, index) => (
             <View style={styles.card} key={index}>
                <View>
                <Image source={require('../assets/images/bike.png')}/>
                </View>
           
            <View style={{flex:1}}>
            <View>
                <Text>To: Hagan Kwame</Text>
                <Text>East Legon - Dzorwulu</Text>
                <Text style={{color:'#1680E4'}}>15th Jan,2024-3:00pm</Text>
                </View>
            </View>
           


                <View style={{backgroundColor:'yellow',paddingHorizontal:7,paddingVertical:5,borderRadius:8}}>
                    <Text>In Progress</Text>
                    </View>
         </View>
        ))}
    
    </View>
  );
};

export default Latest;

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        alignItems:'center',
        gap:7,
        padding:15,
        marginVertical:2,
     backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
     
        borderRadius:8,
        elevation:0.5
    }
});
