import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e5f3e8', // Fundo verde claro
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2b6c2b',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aadca7',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5ba05b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#2b6c2b',
    textAlign: 'center',
    marginTop: 20,
  },
});
