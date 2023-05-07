import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Navigation from './src/navigation';

const CLERK_PUBLISHABLE_KEY = "";
export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
        <SafeAreaView style={styles.container}>
            <SignedIn>
                <Text>You are logged in.</Text>
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
  },
  loginText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
