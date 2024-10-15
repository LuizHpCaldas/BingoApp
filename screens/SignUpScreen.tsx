// SignUpScreen.tsx
import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} />
            <Button title="Registrar" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
});

export default SignUpScreen;
