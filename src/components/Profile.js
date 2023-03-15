import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style = {{color: 'white', alignSelf: 'center'}}>
        Profile Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE9F56',
    justifyContent: 'center',
  },
});

export default Profile;