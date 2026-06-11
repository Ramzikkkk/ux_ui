import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Button, Input } from '../components/UI';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col p-6 bg-slate-white">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-slate-dark mb-2">С возвращением!</h1>
        <p className="text-slate-gray text-sm mb-8">Войдите, чтобы управлять своими записями</p>

        <div className="space-y-4">
          <Input
            label="Email или Телефон"
            icon={Mail}
            placeholder="example@mail.com"
            type="email"
          />
          <Input
            label="Пароль"
            icon={Lock}
            placeholder="••••••••"
            type="password"
          />

          <div className="flex justify-end">
            <button
              onClick={() => navigate('/recover')}
              className="text-sm text-primary font-medium hover:underline"
            >
              Забыли пароль?
            </button>
          </div>

          <Button
            className="w-full py-4 text-lg"
            onClick={() => navigate('/dashboard')}
          >
            Войти
          </Button>
        </div>
      </div>

      <div className="pb-8 text-center">
        <p className="text-sm text-slate-gray">
          Нет аккаунта?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-primary font-bold hover:underline"
          >
            Создать аккаунт
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;