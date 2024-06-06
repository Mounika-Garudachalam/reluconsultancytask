import React from 'react';
import {Container} from 'react-bootstrap';
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';

export default function Home(){
    const navigate=useNavigate();
    const register=()=>{
        navigate('/register');
    }
    const loginpage=()=>{
        navigate('/login');
    }
    return (
        <Container className='homepage'>
            <div className='wrapper'>
                <Button onClick={register}>Register</Button>
                <Button onClick={loginpage}>Login</Button>
            </div>
        </Container>
    );
}