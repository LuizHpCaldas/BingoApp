// SignInScreen.tsx
import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Dimensions } from 'react-native';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Password" secureTextEntry style={styles.input} />
                <View style={styles.buttonContainer}>
                    <Button title="Entrar" onPress={() => {}} color="#007bff" />
                </View>
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
        width: '33%',  // Ocupa 1/3 da largura da tela
        maxWidth: 400, // Limita a largura máxima em telas maiores
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
        textAlign: 'center', // Centraliza o título
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
});

export default SignInScreen;
