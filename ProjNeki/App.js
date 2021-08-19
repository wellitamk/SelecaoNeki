import React, {useEffect, useState} from 'react';
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Logo from './assets/logo2.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 150, y: 150}));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 55,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
      }),
    ]).start();
  }

  return (
    
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
      <Image
        style={styles.logo}
        source={Logo}
      />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#808080"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#808080"
            autoCorrect={false}
            onChangeText={() => {}}
            secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => {setShouldShow(!shouldShow)}} style={styles.icon}>
              <Icon name="eye-off-outline" color="#000" size={30}/>
            </TouchableOpacity>
          
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Cadastre-se</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}