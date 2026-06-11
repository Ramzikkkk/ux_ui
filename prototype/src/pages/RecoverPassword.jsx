import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button, Input, BackButton } from '../components/UI';

const RecoverPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col p-6 bg-slate-white">
      <header className="flex items-center gap-4 mb-8 pt-8">
        <BackButton onClick={() => navigate('/auth')} />
        <h1 className="text-3xl font-bold text-slate-dark">Сброс пароля</h1>
      </header>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-slate-gray text-sm mb-8">Введите ваш Email, чтобы получить ссылку для восстановления</p>

        <div className="space-y-6">
          <Input
            label="Email"
            icon={Mail}
            placeholder="example@mail.com"
            type="email"
          />

          <Button
            className="w-full py-4 text-lg"
            onClick={() => {
              alert('Ссылка для восстановления отправлена на почту!');
              navigate('/auth');
            }}
          >
            Отправить ссылку
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;