import React, { useState } from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons} from "@expo/vector-icons"
import ImgBgnd from "./assets/images.png"
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,  
  TextInput, 
  TouchableOpacity,
  ImageBackground,  
} from "react-native"

const Stack = createNativeStackNavigator();


function Login (props){

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [olho, setOlho] = useState('')
  const usuarioSenha = 'fiap' 
  

  return(
    <SafeAreaView style={estilos.tela}>
      
        <Text style={estilos.cabecalho}> Area de login </Text>
          <View style={estilos.area}>  
            <TextInput style={estilos.input1}
              onChangeText={(txt) => setUsuario(txt)}
              placeholder="Digite seu Usuário" 
              placeholderTextColor= "#000"                   
            />
          </View>

          <View style={estilos.area}>
            <TextInput 
              style={estilos.input2}
              placeholder="Digite sua senha"
              placeholderTextColor= "#000"                                    
              onChangeText={(txt) => setSenha(txt)}
              secureTextEntry={olho}                             
            />
            <TouchableOpacity 
              style={estilos.icon} 
              onPress={() => setOlho(!olho)}> 
              {olho ?
                <Ionicons name='eye' size={25} /> :
                <Ionicons name='eye-off' size={25} />
              }
            </TouchableOpacity>            
          </View>


          <View>
            <TouchableOpacity                         
                onPress={() => {
                  const usuarioSenhaCorreto = (senha == usuarioSenha && usuario == usuarioSenha)                 
                  if( usuarioSenhaCorreto )
                    {props.navigation.navigate('Sistema', {usuario})                   
                  }else{
                    alert("senha ou usuario inválido")
                  }
                  }}>
                        
              <Text style={estilos.cabecalho}> Login </Text>          
            </TouchableOpacity>      
          </View> 
              
    </SafeAreaView>

  );
}

function Sistema (props){
  const { usuario } = props.route.params;
  return(
    <SafeAreaView style={estilos.tela}>
      <Text style={estilos.cabecalho}> "Agora você está logado!!!" </Text>          
      <Text style={estilos.cabecalho}> {usuario} </Text> 
    </SafeAreaView>

  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sistema" component={Sistema} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const estilos = StyleSheet.create({
  tela:{
    flex:1,
    backgroundColor: '#F0E68C',
    alignItems:'center',
    justifyContent:"flex-start", 
    width: '100%'
  },
  cabecalho:{
    fontSize: 20,
    margin:20,
    color: "#000"
  },
  area:{
    flexDirection: 'row',
    width: '90%',
    backgroundColor:'#ccc',
    borderRadius:8,
    height: 50,
    marginBottom:16,    
    alignItems: 'center'    
  },
  input1: {
    width: '100%',
    height: 50,
    color: '#fff',
    padding: 8,
    fontSize: 18
  }, 
  input2: {
    width: '85%',
    height: 50,
    color: '#fff',
    padding: 8,
    fontSize: 18
  },
  icon:{
    width:"15%",
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8
  }
})