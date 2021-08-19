/*import React from'react'; 
import { TouchableOpacity, View } from 'react-native'; 
import {NavigationContainer, DefaultTheme} de'@ react-navigation/native';
//Importar a tela inicial react-nativa. importar SplashScreen de"react-native-splash-screen"; 
import {Login} de"./screens"; tema const={ ...Tema Padrão, cores: { ... DefaultTheme.colors, borda:"transparente", } } const App=()=> { //Oculta a tela inicial ao carregar o aplicativo. 
    React.useEffect (()=> { SplashScreen.hide (); }); 
    Retorna ( ); }; 
    exportação padrão ()=> { 
        Retorna ; 
    }; */

      
/**
 * SplashScreen
 * 启动屏
 * from：http://www.devio.org
 * Author:CrazyCodeBoy
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 * @flow
 
'use strict';*/


import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
//import App from '../App';

class example extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }


    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={(e)=> {
                    Linking.openURL('https://coding.imooc.com/class/304.html');
                }}
            >
                <View >
                    <Text style={styles.item}>
                        SplashScreen 启动屏
                    </Text>
                    <Text style={styles.item}>
                        @：http://www.devio.org/
                    </Text>
                    <Text style={styles.item}>
                        GitHub:https://github.com/crazycodeboy
                    </Text>
                    <Text style={styles.item}>
                        Email:crazycodeboy@gmail.com
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop: 30
    },
    item: {
        fontSize: 20,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})

export default App;