import { StyleSheet, Text, View, TextInput, Button,ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Latest from '@/components/Latest';
import { Search } from '@/components/Icons';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 16 }}>Hi Kwame</Text>
        <Text style={{ color: '#8C8FA5' }}>Track and monitor your packages</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>Track your parcel</Text>
        <Text style={styles.text2}>
          Enter your parcel tracking number
        </Text>
<View style={{flexDirection:'row',gap:4}}>
  <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',padding:5,flex:1,borderRadius:8}}>
    <View style={{paddingLeft:5}}>
    <Search/>
    </View>
  
    <TextInput placeholder='Enter tracking number' style={{padding:5,}}/>
  </View>
  <TouchableOpacity style={styles.button}>
            <Text style={{ color: 'white', fontSize: 12 }}>Search Package</Text>
          </TouchableOpacity>
</View>






      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', padding: 10,marginTop:20 }}>
      <Text style={{fontSize:16,fontWeight:'700'}}>Latest Orders</Text>
      <Text style={{color:'#4CA7A8',fontWeight:'600'}}>See All</Text>
      </View>

      <ScrollView style={styles.latestContainer}>
        <Latest />
      </ScrollView>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  header: {
    padding: 20,
    marginTop:20
  },
  textView: {
    backgroundColor: '#4CA7A8',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 12,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2: {
    color: 'white',
    opacity: 0.7,
    fontSize: 12,
    paddingVertical: 7,
    marginBottom: 10
  },
  input: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5
  },
  field: {
    flexDirection: 'row',
    gap: 4
  },
  button: {
    backgroundColor: '#00635C',
    borderRadius: 8,
    paddingHorizontal:8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  latestContainer: {
    flex: 1
  }
});
