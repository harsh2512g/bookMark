'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter(); 
    const {user}=useAuth();
    useEffect(() => {
     

      if (!user) {
        // If not authenticated, redirect to login page
        router.replace('/login');
      }
    }, []);

    // If the user is authenticated, render the original component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
