import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Dimensions, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types'; // Certifique-se de ter um arquivo de tipos de rota

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<SignInScreenNavigationProp>();  // Tipagem correta da navegação

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            });

            if (response.data.token) {
                Alert.alert('Login bem-sucedido!', `Token: ${response.data.token}`);
                // Redireciona para a tela Home
                navigation.navigate('Home');
            }
        } catch (error) {
            Alert.alert('Erro', 'Credenciais inválidas');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <Button title="Entrar" onPress={handleLogin} color="#007bff" />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.signUpLink}>
                    <Text style={styles.signUpText}>Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    formContainer: {
        width: '80%',
        maxWidth: 400,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#343a40',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
    },
    signUpLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    signUpText: {
        color: '#007bff',
        fontSize: 16,
    },
});

export default SignInScreen;
