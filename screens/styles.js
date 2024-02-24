import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: '10%',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  subtitle: {
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '2%',
    marginLeft: '20%',
    marginRight: '20%',
    textAlign: 'center',
    color: 'green',
  },
  textTwo: {
    marginTop: '10%',
    marginBottom: 30,
    marginLeft: '20%',
    marginRight: '20%',
    textAlign: 'center',
  },
  textListContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textList: {
    marginLeft: '5%',
  },
  resultListCorrect: {
    marginLeft: '5%',
    color: 'green',
  },
  resultListIncorrect: {
    marginLeft: '5%',
    color: 'red',
  },
  questionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  questionBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});