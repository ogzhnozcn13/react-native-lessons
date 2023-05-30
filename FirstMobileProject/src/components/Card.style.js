import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'e0e0e0',
  },
  card_container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
  },
  card_body: {
    padding: 15,
  },
  card_title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 18,
    margin: 10,
    marginTop: 3,
  },
  card_button_container: {
    backgroundColor: '#00c2ff',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_button_title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
export default styles