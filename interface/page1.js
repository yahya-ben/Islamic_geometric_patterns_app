import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableWithoutFeedback, Alert} from 'react-native';


export default function App() {
  const handleNewDesignPress = () => {
    // Ajoutez ici votre logique pour gérer l'appui sur le bouton "Nouveau design"
    Alert.alert('Button Pressed');
  };

  const handleSaveDesignsPress = () => {
    // Ajoutez ici votre logique pour gérer l'appui sur le bouton "Designs enregistrés"
    Alert.alert('Button Pressed');
  };

  return (
  <View style={styles.container}>

   <Image source={require('./assets/logo_png.png')}  />

 <TouchableWithoutFeedback onPress={handleNewDesignPress}>

 <View style={{
          borderRadius:5,
          marginTop: 20,
          backgroundColor:"#d7603a",
          height: 60,
          width: 290,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
        }}

        >
          <Text style={{
          color:"#e8dccd",
          fontWeight: 'bold',
          fontSize: 30,
          fontStyle :'italic',
          }}>Nouveau design</Text>
         
  
 </View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={handleSaveDesignsPress}>

  <View style={{
          borderRadius:5,
          marginTop: 20,
          backgroundColor:"#ddc099",
          height: 50,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}
      
        >
          <Text style={{
          color:"#d66a42",
          fontWeight: 'bold',
          fontSize: 19,
          fontStyle :'italic',
        
        }}>Designs enregistrés</Text>
         
</View> 

</TouchableWithoutFeedback>
      <StatusBar   
        barStyle="#e4d2c2"
        backgroundColor="#d66a42" />
         
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 800,
    width: 360,
    flex: 1,
    backgroundColor: '#e8dccd',
    alignItems: 'center',
    justifyContent: 'center',

  },

});


