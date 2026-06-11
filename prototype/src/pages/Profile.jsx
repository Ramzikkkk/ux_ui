import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Car, Bell, LogOut, ChevronRight } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate('/dashboard')} />
        <h1 className="text-xl font-bold text-slate-dark">Профиль</h1>
      </header>
      <div className="px-6 pt-4 text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="w-full h-full bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-white">
            ИВ
          </div>
          <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-md border border-slate-100 text-primary">
            <User size={14} />
          </button>
        </div>
        <h1 className="text-xl font-bold text-slate-dark">Иван Иванов</h1>
        <p className="text-sm text-slate-gray">ivan.ivanov@example.com</p>
      </div>

      <div className="flex-1 px-6 space-y-4 overflow-y-auto pb-24 mt-8">
        <section className="space-y-2">
          <h3 className="text-xs font-bold text-slate-gray uppercase tracking-wider ml-1">Аккаунт</h3>
          <div className="bg-white rounded-card overflow-hidden border border-slate-100">
            <button
              onClick={() => navigate('/garage')}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-primary rounded-lg">
                  <Car size={20} />
                </div>
                <span className="text-sm font-medium text-slate-dark">Мои автомобили</span>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>

            <button className="w-full flex items-center justify-between p-4 border-t border-slate-100 hover:bg-slate-50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-primary rounded-lg">
                  <Bell size={20} />
                </div>
                <span className="text-sm font-medium text-slate-dark">Уведомления</span>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-slate-gray uppercase tracking-wider ml-1">Система</h3>
          <div className="bg-white rounded-card overflow-hidden border border-slate-100">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-primary rounded-lg">
                  <User size={20} />
                </div>
                <span className="text-sm font-medium text-slate-dark">Редактировать профиль</span>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>

            <button
              onClick={() => navigate('/auth')}
              className="w-full flex items-center justify-between p-4 border-t border-slate-100 text-soft-red hover:bg-red-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-soft-red rounded-lg">
                  <LogOut size={20} />
                </div>
                <span className="text-sm font-medium">Выйти из аккаунта</span>
              </div>
              <ChevronRight size={18} className="text-soft-red" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;