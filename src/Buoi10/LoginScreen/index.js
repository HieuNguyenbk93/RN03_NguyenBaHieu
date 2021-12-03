import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validateSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email không hợp lệ')
        .required('Email bắt buộc nhập'),
    password: Yup.string()
        .min(5, 'Tối thiểu 5 chữ số')
        .required('Password bắt buộc nhập')
})

export default class LoginScreen extends Component {

    onSubmit = (values) => {
        console.log(values);
    }

    render() {
        const {navigation} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Formik
                    validationSchema = {validateSchema}
                    initialValues= {{email: '', password: ''}}
                    onSubmit={this.onSubmit}
                >
                    { ({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                        <View style={styles.footer}>
                            <Text style={styles.text_footer}> User </Text>
                            <View style={styles.user_input}>
                                <AntDesign name="user" size={30}/>
                                <TextInput
                                    style={styles.text_input}
                                    placeholder="User name"
                                    autoCapitalize="none"
                                    keyboardAppearance={'light'}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur = {handleBlur('email')}
                                />
                            </View>
                            <Text>{errors.email}</Text>
                            <Text style={styles.text_footer}> Password </Text>
                            <View style={styles.user_input}>
                                <Feather name="lock" size={30}/>
                                <TextInput
                                    style={styles.text_input}
                                    // secureTextEntry={user.secureTextEntry}
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur = {handleBlur('password')}
                                />
                                <TouchableOpacity
                                    >
                                    
                                </TouchableOpacity>
                            </View>
                            <Text>{errors.password}</Text>
                            <View style={styles.button_group}>
                                <TouchableOpacity 
                                    style={[styles.button, styles.button_signin]}
                                    onPress = {handleSubmit}
                                    >
                                    <Text style={[styles.text_button, {color:'#fff'}]}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles.button, styles.button_signup]}
                                    onPress = {() => {navigation.navigate('Signup')} }
                                    >
                                    <Text style={[styles.text_button, {color:'#2980b9'}]}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    user_input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginBottom: 10,
    },
    text_input: {
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16,
        width: '80%'
    },
    button_group: {
        alignItems: 'center',
        marginTop: 30,
    },
    text_button: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 350,
        height: 50,
        marginBottom: 20,
    },
    button_signin: {
        borderColor: '#2980b9',
        backgroundColor: '#2980b9',
    },
    button_signup: {
        borderColor: '#2980b9',
        backgroundColor: '#fff',
    }
})

