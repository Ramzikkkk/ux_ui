import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Car, User, Settings, Clock, Plus } from 'lucide-react';
import { Button, Card } from '../components/UI';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            ИВ
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-dark leading-tight">Иван Иванов</h2>
            <p className="text-xs text-slate-gray">Привет, добро пожаловать!</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="p-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-dark hover:bg-slate-50"
        >
          <Settings size={20} />
        </button>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/catalog')}
            className="bg-primary text-white p-4 rounded-card shadow-lg flex flex-col items-center justify-center gap-3 text-center hover:bg-blue-700 transition-all"
          >
            <div className="bg-blue-400/30 p-3 rounded-full">
              <Plus size={24} />
            </div>
            <span className="font-semibold text-sm">Записаться</span>
          </button>

          <button
            onClick={() => navigate('/my-appointments')}
            className="bg-white p-4 rounded-card shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 text-center hover:bg-slate-50 transition-all"
          >
            <div className="bg-blue-50 p-3 rounded-full text-primary">
              <Clock size={24} />
            </div>
            <span className="font-semibold text-sm text-slate-dark">Мои записи</span>
          </button>
        </div>

        {/* Car Selection Fast Link */}
        <Button
          variant="secondary"
          className="w-full py-4 rounded-card gap-3"
          onClick={() => navigate('/garage')}
        >
          <Car size={20} />
          Мои автомобили
        </Button>

        {/* Upcoming Appointment Section */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-slate-gray uppercase tracking-wider ml-1">Ближайшая запись</h3>
          <Card className="border-l-4 border-l-primary">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-slate-dark">Плановое ТО-15000</h4>
                <p className="text-xs text-slate-gray">Toyota Camry, 2022</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-primary">12 Окт, 10:00</p>
                <p className="text-[10px] text-slate-gray uppercase">В работе</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full py-2 text-sm"
              onClick={() => navigate('/appointment/1')}
            >
              Подробнее
            </Button>
          </Card>
        </section>

        {/* Info/Promo Section */}
        <div className="bg-blue-50 p-4 rounded-card border border-blue-100">
          <div className="flex gap-3">
            <div className="text-primary font-bold text-xl">💡</div>
            <p className="text-xs text-blue-800 leading-relaxed">
              Регулярная замена масла продлевает жизнь двигателя вашего авто на 30%.
              Запишитесь на проверку прямо сейчас!
            </p>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <nav className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-6 pb-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex flex-col items-center gap-1 text-primary"
        >
          <div className="p-1 bg-blue-50 rounded-lg">
            <User size={24} />
          </div>
          <span className="text-[10px] font-medium">Главная</span>
        </button>
        <button
          onClick={() => navigate('/catalog')}
          className="flex flex-col items-center gap-1 text-slate-gray hover:text-primary"
        >
          <Calendar size={24} />
          <span className="text-[10px] font-medium">Каталог</span>
        </button>
        <button
          onClick={() => navigate('/my-appointments')}
          className="flex flex-col items-center gap-1 text-slate-gray hover:text-primary"
        >
          <Clock size={24} />
          <span className="text-[10px] font-medium">Записи</span>
        </button>
        <button
          onClick={() => navigate('/profile')}
          className="flex flex-col items-center gap-1 text-slate-gray hover:text-primary"
        >
          <Settings size={24} />
          <span className="text-[10px] font-medium">Профиль</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;