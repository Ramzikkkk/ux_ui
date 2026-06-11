import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone } from 'lucide-react';
import { Button, Input, BackButton } from '../components/UI';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col p-6 bg-slate-white">
      <header className="flex items-center gap-4 mb-8 pt-8">
        <BackButton onClick={() => navigate('/auth')} />
        <h1 className="text-3xl font-bold text-slate-dark">Создайте аккаунт</h1>
      </header>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-slate-gray text-sm mb-8">Присоединяйтесь к нам для быстрого обслуживания</p>

        <div className="space-y-4">
          <Input
            label="Полное имя"
            icon={User}
            placeholder="Иван Иванов"
          />
          <Input
            label="Email"
            icon={Mail}
            placeholder="example@mail.com"
            type="email"
          />
          <Input
            label="Телефон"
            icon={Phone}
            placeholder="+7 (999) 000-00-00"
          />
          <Input
            label="Пароль"
            icon={Lock}
            placeholder="••••••••"
            type="password"
          />
          <Input
            label="Повторите пароль"
            icon={Lock}
            placeholder="••••••••"
            type="password"
          />

          <Button
            className="w-full py-4 text-lg"
            onClick={() => navigate('/dashboard')}
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>

      <div className="pb-8 text-center">
        <p className="text-sm text-slate-gray">
          Уже есть аккаунт?{' '}
          <button
            onClick={() => navigate('/auth')}
            className="text-primary font-bold hover:underline"
          >
            Войти
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;