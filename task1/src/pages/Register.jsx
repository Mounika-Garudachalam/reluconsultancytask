import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container} from "react-bootstrap";

import Form from "../components/Form";
import { CustomModal } from "../components/Modal";
import Popup from "../components/Popup";
import axios from 'axios';

export default function Register(){
    const navigate=useNavigate();
    const [showPopup,setShowPopup]=useState(false);
    const [popupmessage,setPopupMessage]=useState('');
    const [showModal,setShowModal]=useState(false);

    const handleCloseModal=()=>{
        setShowModal(false);
    }
    const handlePathModal=()=>{
        navigate('/login');
    }
    const template={
        fields:[
            {
                element:'input',
                type:'text',
                name:'username',
                placeholder:'Enter Username',
                autocomplete:"username",
                registerOptions:{
                    required:{
                        value:true,
                        message:'name is required'
                    }
                }
            },
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
                    }},
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
                    }},
            }
        ]
    };

    //register end point

    const handleClosePopup=()=>{
        setShowPopup(false);
    };

     //register end point
     const registerpage=async(formData,reset)=>{
        
        try{
            const {data}=await axios.post('/register',formData);
            setShowModal(true);
            console.log('successfull',data);
        }catch(error){
            console.log(error);
            if(error.response && error.response.status===400){
                setShowPopup(true);
                setPopupMessage('Error:Email is already registered');
            }else{
                setShowPopup(true);
                setPopupMessage('Error:Failed to Register')
            }
        }
    }
    return (
        <React.Fragment>
        <Container className="homepage">
            <div>
            <Form 
                template={template} 
                onSubmit={registerpage}
                buttonLabel="Register" 
            />
            {/* render popup component conditionallyy */}
            <Popup message={popupmessage} showPopup={showPopup} setShowPopup={setShowPopup} handleClose={handleClosePopup}/>
            <CustomModal
                show={showModal}
                handlePath={handlePathModal}
                handleClose={handleCloseModal}
                title="Registration Successful"
                body="Please login to continue.."
                add="Login"/>
            </div>
        </Container>
        </React.Fragment>
    );
}