import { Image, StyleSheet, Text, View,TextInput, Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Link, router } from 'expo-router'
import { Eye, Sms } from '@/components/Icons';



const Login = () => {
      
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
  
  
    // if (email === '' || password === '') {
    //   return;
    // } else if (email.length > 1 && email.includes('@') && password.length > 1) {
    //   // Navigate to the new screen
    //  router.navigate('/(tabs)')
    // }

    router.navigate('/(tabs)')
  };
  return (
    <View style={styles.container}>
     <View style={styles.image}>
      <Image source={require('../assets/images/logo.png')}/>
     </View>

<Text style={styles.H1}>
  Get Started Now
</Text>
<Text style={styles.small}>
  Enter your credentials to access your account
</Text>


<View style={styles.form}>
<View >
<Text>Email:</Text>
<View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0.2,borderRadius:4,paddingHorizontal:5,marginVertical:10}}>
  <TextInput
    style={styles.input}
    placeholder="Your Email"
    value={email}
    onChangeText={setEmail}
    autoCapitalize="none"
  />
  <View style={{  padding: 4 }}>
  <Sms/>
  </View>
</View>

<Text>Password:</Text>
<View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0.2,borderRadius:4,paddingHorizontal:5,marginVertical:10 }}>
  <TextInput
    style={styles.input}
    placeholder="Your Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
  />
  <View style={{  padding: 4 }}>
    <Eye />
  </View>
</View>

</View>
   
     <Text style={{fontSize:12}}>Forgot Password?</Text>
</View>


<TouchableOpacity   style={styles.button} onPress={handleLogin} >
  <Text style={{color:'white'}}>Login</Text>
</TouchableOpacity>

  

     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  form:{
    width:'100%',
  
   
   
  },
  input: {
    flex: 1,
    height: 40,
    
  
    paddingHorizontal: 10, // Adjust padding as needed
    borderRadius: 5, // Adjust border radius as needed
    marginRight: 8, // Adjust margin as needed
  },
  button:{
    backgroundColor:'#00635C',
    borderRadius:8,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginTop:40
  
},
  H1:{
    fontSize:24,
    fontFamily:'Poppins',
    fontWeight:'bold',
    color:'#0F0609'
  },
  small:{
    fontFamily:'Plus',
    fontSize:16,
    fontWeight:'400',
  marginBottom:10
  }
  ,image:{
paddingBottom:40
  },

})