import { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Jobizz</Text>
        <Text style={styles.welcomeTitle}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={"#BDBDBD"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={"#BDBDBD"}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or continue with</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../icons/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../icons/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../icons/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>Haven't an account? <Text style={styles.registerLink}>Register</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
    padding: 20,
    justifyContent: 'center',
    
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#356899',
    marginBottom: 20
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  
  },
  wavingHand: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
   
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#356899',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  orText: {
    color: '#999',
    marginBottom: 20,
    textAlign: 'center'
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: '#E0E0E0'
  },
  socialIcon: {
    width: 30,
    height: 30
  },
  registerText: {
    color: '#999',
    textAlign: 'center'
  },
  registerLink: {
    color: '#356899',
    fontWeight: 'bold'
  }
});
