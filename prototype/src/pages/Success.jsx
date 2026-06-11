import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/UI';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6 bg-slate-white text-center">
      <div className="bg-white p-8 rounded-card shadow-xl border border-slate-100 flex flex-col items-center max-w-xs">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-2xl font-bold text-slate-dark mb-3">Вы успешно записаны!</h1>
        <p className="text-slate-gray text-sm mb-8">
          Мы отправили подтверждение на вашу почту. Ждем вас в нашем сервисе!
        </p>
        <Button
          className="w-full py-3"
          onClick={() => navigate('/my-appointments')}
        >
          Перейти в мои записи
        </Button>
      </div>
    </div>
  );
};

export default Success;