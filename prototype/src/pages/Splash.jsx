import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white p-6 text-center">
      <div className="bg-white p-6 rounded-full mb-6 shadow-xl">
        <Car size={64} className="text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">AutoService</h1>
      <p className="text-blue-100 opacity-80">Ваш автомобиль в надежных руках</p>

      <div className="absolute bottom-12 w-8 h-8 border-4 border-blue-200 border-t-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Splash;