import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
// import { auth, fb } from '../Firebase';
// import * as firebase from "firebase/app";
// import 'firebase/auth';
import { Button } from "react-native";
import auth from "@react-native-firebase/auth";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleSignin, GoogleSigninButton, statusCodes } from "react-native-google-signin";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["email"],
      webClientId: "330039579103-p2dup7gqqn3f7u32flge2j8c02ao0s61.apps.googleusercontent.com",
    });
  }, []);

  async function onGoogleButtonPress() {
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    // const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);

    // try {
    //     const provider = new fb.default.auth.GoogleAuthProvider();
    //     // You can add additional scopes to the provider:
    //     provider.addScope('email');
    //     await auth().signInWithPopup(provider)
    // } catch (error) {
    //     console.log('====================================');
    //     console.log(error, "error");
    //     console.log('====================================');
    // }

    // // googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly")
    // //   const google = new firebaseInst.default.auth.GoogleAuthProvider()
    // //   google.addScope("email")
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Button title="Google Sign-In" onPress={() => onGoogleButtonPress().then(() => console.log("Signed in with Google!"))} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
