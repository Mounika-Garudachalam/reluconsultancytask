import React,{useState} from "react";
import { Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";
import Popup from "../components/Popup";

export default function LoginPage(){
    const navigate=useNavigate();
    const [showPopup,setShowPopup]=useState(false);
    const [popupMessage,setPopupMessage]=useState('');
    const handleLogin=()=>{
        navigate('/page');
    }
    const template={
        fields:[
            {
                element:'input',
                type:'text',
                name:'email',
                placeholder:'Enter Email',
                autocomplete:'email',
                registerOptions:{
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message:'Invalid email format'
                    }}
            },
            {
                element:'input',
                type:'password',
                name:'password',
                placeholder:'Enter Password',
                autocomplete:'current-password',
                registerOptions:{
                    minLength:{
                        value:6,
                        message:'password must be atleast 6 characters long'
                    }}
            }
        ]
    };
    //login end point
    const loginpage=async (formData)=>{
        try{
            const {data}=await axios.post('/login',formData);
                //handle successful login
                handleLogin();
        }catch(error){
            console.log(error);
            if(error.response && error.response.status===400){
                setPopupMessage(`Error:${error.response.data.error}`);
                setShowPopup(true);
            }else{
                setPopupMessage('Error:Internal error');
                setShowPopup(true);
            }
        }
    }
    
    const handleClosePopup=()=>{
        setShowPopup(false);
    }

    return (
        <Container>
            <Form template={template} onSubmit={loginpage} buttonLabel="Login"/>
            {/* render popup component conditionally */}
            <Popup message={popupMessage} showPopup={showPopup} setShowPopup={setShowPopup} handleClose={handleClosePopup}/>
        </Container>
    );
}