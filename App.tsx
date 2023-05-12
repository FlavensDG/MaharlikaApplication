import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import Navigation from './src/navigation';
import * as SecureStore from "expo-secure-store";
import { PrimaryButton } from './src/components/CustomButton';

const CLERK_PUBLISHABLE_KEY = "";

const tokenCache = {
  getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

const SignOut = () => {
  const { isLoaded,signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.signOutPos}>
      <PrimaryButton
        text="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SafeAreaView style={styles.container}>
            <SignedIn>
                <View style={styles.textContainer}>
                    <Text>Hi user. You are now Signed In</Text>
                </View>
                <SignOut />
            </SignedIn>
            <SignedOut>
                <Navigation />
            </SignedOut>
          <StatusBar style="auto" />
        </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  loginText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutPos: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    },
});
