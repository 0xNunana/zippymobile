import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'; // Import useNavigation hook
import { Eye, Sms } from '@/components/Icons';
import { useData } from '@/DataContext';
const Login = () => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {setData}=useData()

  const handleLogin = async () => {
    try {
      const response = await fetch('https://coding.zippy.com.gh/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const success = await response.json()

      if (response.ok) {
        setData(success)
        router.navigate('/(tabs)'); // Navigate to the tabs screen on successful login
      } else {
        setError('Incorrect email or password'); // Set error message for incorrect login
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login'); // Set error message for other errors
    }
  };

  const togglePasswordVisibility = () => {
    // Toggle password visibility
    // You need to implement this function to toggle the secureTextEntry property
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.image}>
        <Image source={require('../assets/images/logo.png')} />
      </View>

      <Text style={styles.H1}>Get Started Now</Text>
      <Text style={styles.small}>Enter your credentials to access your account</Text>

      <View style={styles.form}>
        <Text>Email:</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Sms />
          </TouchableOpacity>
        </View>

        <Text>Password:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry // Password field is initially hidden
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Eye />
          </TouchableOpacity>
        </View>

        {/* {error ? <Text style={styles.error}>{error}</Text> : null} Show error message if present */}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginVertical: 10
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#00635C',
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 40
  },
  H1: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#0F0609'
  },
  small: {
    fontFamily: 'Plus',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10
  },
  image: {
    paddingBottom: 40
  },
  error: {
    color: 'red',
    marginTop: 10
  }
});
