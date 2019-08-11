import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "",
            method: "",
            ans: "0",
            v1: "",
        };
    }
    btnZero() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "0";
        this.setState({ ans: value, method: "" });
    }
    btnOne() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "1";
        this.setState({ ans: value, method: "" });
    }
    btnTwo() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "2";
        this.setState({ ans: value, method: "" });
    }
    btnThree() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0")
            value = "";
        value = value + "3";
        this.setState({ ans: value, method: "" });
    }
    btnFour() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "4";
        this.setState({ ans: value, method: "" });
    }
    btnFive() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "5";
        this.setState({ ans: value, method: "" });
    }
    btnSix() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "6";
        this.setState({ ans: value, method: "" });
    }
    btnSeven() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "7";
        this.setState({ ans: value, method: "" });
    }
    btnEight() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "8";
        this.setState({ ans: value, method: "" });
    }
    btnNine() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = value + "9";
        this.setState({ ans: value, method: "" });
    }
    btnDot() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        if (value.indexOf(".") == -1) 
            value = value + ".";
        this.setState({ ans: value });
        this.setState({ method: "" });
    }
    btnAc() {
        var value = this.state.ans;
        if (this.state.method == "waiting") 
            value = "";
        if (this.state.ans == "0") 
            value = "";
        value = "0";
        this.setState({ ans: "0", method: "" });
    }
    btnPlus() {
        this.setState({ v1: this.state.ans });
        this.setState({ status: "plus" })
        this.setState({ method: "waiting" })
    }
    btnMinus() {
        this.setState({ v1: this.state.ans });
        this.setState({ status: "minus" })
        this.setState({ method: "waiting" })
    }
    btnMultiply() {
        this.setState({ v1: this.state.ans });
        this.setState({ status: "multiply" })
        this.setState({ method: "waiting" })
    }
    btnDivide() {
        this.setState({ v1: this.state.ans });
        this.setState({ status: "divide" })
        this.setState({ method: "waiting" })
    }
    btnMod() {
        this.setState({ v1: this.state.ans });
        this.setState({ status: "mod" })
        this.setState({ method: "waiting" })
    }
    btnAns() {
        var value = this.state.ans;
        if (this.state.status == "plus") 
            value = Number(value) + Number(this.state.v1);
        
        if (this.state.status == "minus") 
            value = Number(this.state.v1) - Number(value);
        
        if (this.state.status == "multiply") 
            value = Number(value) * Number(this.state.v1);
        
        if (this.state.status == "divide") 
            value = Number(this.state.v1) / Number(value);
        
        if (this.state.status == "mod") 
            value = Number(this.state.v1) / 100;
        this.setState({ ans: value });
        this.setState({ method: "waiting" })
    }
    render() {
        return (
            <LinearGradient
                colors={['#000000', '#000000', '#000000']}
                style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }} />
                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: 'black' }} />
                        <Text style={Styles.ans}>{(this.state.ans)}</Text>
                    </View>

                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn3} onPress={() => this.btnAc()}>
                                <Text style={Styles.txt2} > AC  </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn3}>
                                <Text style={Styles.txt2}> +/- </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn3} onPress={() => this.btnMod()} >
                                <Text style={Styles.txt2}> % </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn2} onPress={() => this.btnDivide()} >
                                <Text style={Styles.txt}> ÷ </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnSeven()}>
                                <Text style={Styles.txt}> 7 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnEight()}>
                                <Text style={Styles.txt}> 8 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnNine()}>
                                <Text style={Styles.txt}> 9 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn2} onPress={() => this.btnMultiply()}>
                                <Text style={Styles.txt}> * </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnFour()}>
                                <Text style={Styles.txt}> 4 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnFive()}>
                                <Text style={Styles.txt}> 5 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnSix()}>
                                <Text style={Styles.txt}> 6 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn2} onPress={() => this.btnMinus()}>
                                <Text style={Styles.txt}> - </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnOne()}>
                                <Text style={Styles.txt}> 1 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnTwo()}>
                                <Text style={Styles.txt}> 2 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnThree()} >
                                <Text style={Styles.txt}> 3 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn2} onPress={() => this.btnPlus()}>
                                <Text style={Styles.txt}> + </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ flex: 2, backgroundColor: 'black' }}>
                            <TouchableOpacity
                                style={Styles.btn4} onPress={() => this.btnZero()}>
                                <Text style={Styles.txt3}>0 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn} onPress={() => this.btnDot()} >
                                <Text style={Styles.txt}> . </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'black' }}>
                            <TouchableOpacity style={Styles.btn2} onPress={() => this.btnAns()}>
                                <Text style={Styles.txt}> = </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}
const Styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#566573',
        padding: 15,
        margin: 10,
        borderRadius: 50
    },
    btn2: {
        alignItems: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#F39C12',
        padding: 15,
        margin: 10,
        borderRadius: 50
    },
    btn3: {
        alignItems: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#B2BABB',
        padding: 15,
        margin: 10,
        borderRadius: 50
    },
    txt: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 35,
        width: 40
    },
    txt2: {
        textAlign: 'center',
        fontSize: 30,
        width: 50,
        colour: 'black'
    },
    btn4: {
        width: 190,
        height: 90,
        backgroundColor: '#566573',
        padding: 20,
        margin: 10,
        borderRadius: 50
    },
    txt3: {
        color: '#ffffff',
        width: 40,
        fontSize: 30,
    },
    ans: {
        paddingRight: 25,
        fontSize: 90,
        fontWeight: 'bold',
        textAlign: 'right',
        color: "white"
    }
});
