import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function withAuth(OldComp) {
  // receives an OLD component

  return () => {
    // return a NEW/MODIFIED/OLD component

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
      if (!token) {
        navigate('/customers/login');
        return;
      }
    }, [token]);

    return <OldComp />;
  };
}
