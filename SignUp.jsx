import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add your sign-up validation/signup logic here if needed
    navigate('/home'); // Redirect to home page after sign up
  };