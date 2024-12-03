import { StyleSheet, Text, View } from 'react-native';

export default function Cronometro() {
 return (
  <View style={styles.container}>
    <Text >Test Cronometro</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });