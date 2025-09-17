import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your sign-in validation/login logic here if needed
    navigate('/home'); // Redirect to home page after sign in
  };