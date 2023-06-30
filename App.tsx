import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import {Navigation, NavigationOnSignIn} from './src/navigation';
import * as SecureStore from "expo-secure-store";
import { PrimaryButton } from './src/components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import AddressScreen from './src/screens/AddressScreen';

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
                <NavigationOnSignIn />
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
  signOutPos: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    },
});
