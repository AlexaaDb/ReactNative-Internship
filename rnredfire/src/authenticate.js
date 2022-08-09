import React,{useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from "formik";

import { Input,Button,CheckBox } from "react-native-elements";
import firebase from "./fbase/firebase";

const Authenticate = () => {
    const [register,setRegister]=useState(false)

    const handleSubmit=async({email,password})=>{
        
        try{
            if(register){
                //register
                //alert('register')
                const response = await firebase.auth()
                .createUserWithEmailAndPassword(email,password);

                const {user}=response;
                console.log(user,response);
                
            } else {
                //log in
                //alert('log in')
                const response=await firebase.auth()
                .signInWithEmailAndPassword(email,password);

                const {user}=response;
                console.log(user);
            }

        } catch (error){
            console.log(error,email,password)
        }
            
            
    }

    return(
        <>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values => handleSubmit(values)}
            >
                {({handleChange,handleBlur,handleSubmit,values})=>(
                    <View style={{padding:'10%'}}>
                        <Input
                            placeholder="Enter your email"
                            leftIcon={{type:'MaterialIcons',name:'email'}}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Input
                            placeholder="Enter your password"
                            leftIcon={{type:'MaterialIcons',name:'fingerprint'}}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <Button
                            title="Submit"
                            onPress={handleSubmit}
                        />
                    </View>
                )}

            </Formik>
            <CheckBox
                title={register ? 'Register' : 'Login'}
                checked={register}
                onPress={ ()=>setRegister(!register)}
            />
        </>
    )
}

export default Authenticate;