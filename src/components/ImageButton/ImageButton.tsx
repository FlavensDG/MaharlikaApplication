import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../OAuth/OAuth";

type ImageProp = {
    onPress;
    text: string;
};

WebBrowser.maybeCompleteAuthSession();

const ImageButtonFb = (props:ImageProp) => {

    useWarmUpBrowser();

      const { startOAuthFlow } = useOAuth({ strategy: "oauth_facebook" });

      const onFacebookPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();

          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
    
    return(
        <TouchableOpacity onPress = {onFacebookPress} style={[styles.container]}>
            <Image 
                style={styles.logo}
                source={require('../../../assets/images/Facebook-logo.png')}
            />
        </TouchableOpacity>
    )
}

const ImageButtonGl = (props:ImageProp) => {

    useWarmUpBrowser();

      const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

      const onGooglePress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();

          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

    return(
        <TouchableOpacity onPress = {onGooglePress} style={[styles.container]}>
            <Image 
                style={styles.logo}
                source={require('../../../assets/images/google-logo.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        height: 60,
        width: 60,

        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 15,
    },
    logo: {
        width: 30,
        height: 30,
    }
});

export {ImageButtonFb, ImageButtonGl};
