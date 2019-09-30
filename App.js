import React from "react";
import { View, Text, StyleSheet,Image,SafeAreaView,TextInput,TouchableOpacity,Alert,TouchableWithoutFeedback,Keyboard} from "react-native";

const currencyperRupee={
  DOLLAR:0.013,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.925,
  AUSDOLLAR: 0.020,
  CANDOLLAR:0.018,
  YEN:1.47,
  DINAR:0.0042,
  BITCOIN:0.0000041
}

export default class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state={
      inputValue:"",
      resultValue:"0.0"
    }
  }

  buttonPressed = currency => {
    if(this.state.inputValue === ""){
      Alert.alert("Enter Some Value")
    }
    let result= parseFloat(this.state.inputValue)*currencyperRupee[currency]
    this.setState({resultValue:result.toFixed(2)});
  }

  render(){

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
     <View style={styles.screenView}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>
            {this.state.resultValue}
          </Text>
        </View>
        {/* //input values */}
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            selectionColor="#FFFFFF"
            keyboardType="numeric"
            placeholder="Enter Value"
            value={this.state.inputValue}
            onChangeText={ inputValue => this.setState({
              inputValue
            }) }
          />

        </View>
        {/* //CONVERTOR BUTTONS */}
        <View style={styles.convertorbuttonContainer}>
            <TouchableOpacity
            onPress={() => this.buttonPressed("DOLLAR") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  $
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("EURO") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  EURO
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("POUND") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  POUND
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("RUBEL") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  RUBEL
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("AUSDOLLAR") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  AUS DOLLAR
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("CANDOLLAR") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  CAN DOLLAR
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("YEN") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  YEN
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("DINAR") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  DINAR
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.buttonPressed("BITCOIN") }
            style={styles.convertorButton}>
                <Text style={styles.convertorbuttonText}>
                  BITCOIN
                </Text>
                
            </TouchableOpacity>
            
        </View>
          
     </View>
     <Text style={styles.heading}>INR To Any Currency Converter</Text>
     <Image source= {{uri:"https://images-na.ssl-images-amazon.com/images/I/71KCrU0Zw4L._SY355_.png"}}
            style={{width:200,height:200,alignItems:"center",justifyContent:"center",flexDirection:"column",paddingLeft:10}} />
            
      </SafeAreaView>
      </TouchableWithoutFeedback>
      //generally we use safeareaview in place to view to avoid camera notches which is generally A PROBLEM FOR IOS DEVICES
      //Also in android we do have back sign to minimize keyboard and see app but in IOS we dont have such thing so we have
      //certain area where we can tap so the keyboard gets dismissed
    )
    
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#8395A7",
 
  },
  heading:{
    fontSize:18,
    fontWeight:"bold",
    color:"#2B2B52",
    justifyContent:"center",
     alignItems:"center",
  },
  screenView:{
    flex:1
  },
  resultContainer:{
    height:70,
    marginTop:40,
    justifyContent:"center",
    borderColor:"#c1c1c1",
    backgroundColor:"#2B2B52",
    alignItems:"center",
    borderWidth:2
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#c1c1c1"
  },
  inputContainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1",
    backgroundColor:"#2B2B52"
  },
  input:{
    fontSize:30,
    fontWeight:"bold",
    color:"#c1c1c1"
  },
  convertorbuttonContainer:{
    // here if we use column it will come in next line so better to use row
    flexDirection:"row",
    //this helps to wrap all elements in multiple line
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2

  },
  convertorButton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2B2B52",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    // now we want 3 buttons in entire 1 row 100%width so 100/3=33.3%
    width:"33.3%"
  },
  convertorbuttonText:{
    fontSize:30,
    fontWeight:"bold",
    color:"#c1c1c1"
  }

})