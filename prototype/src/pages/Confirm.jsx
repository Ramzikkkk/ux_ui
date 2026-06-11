import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, Car } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Подтверждение</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto space-y-6">
        <div className="bg-white p-6 rounded-card border border-slate-100 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-dark mb-4">Проверьте данные записи:</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <Car size={20} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-gray uppercase font-bold">Автомобиль</p>
                <p className="text-sm font-medium text-slate-dark">Toyota Camry, 2022</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <Calendar size={20} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-gray uppercase font-bold">Дата</p>
                <p className="text-sm font-medium text-slate-dark">12 Октября, 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <Clock size={20} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-gray uppercase font-bold">Время</p>
                <p className="text-sm font-medium text-slate-dark">10:00</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <CheckCircle size={20} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-gray uppercase font-bold">Услуга</p>
                <p className="text-sm font-medium text-slate-dark">Плановое ТО-15000</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="text-slate-gray font-medium">Итоговая стоимость:</span>
            <span className="text-xl font-bold text-primary">5 000₽</span>
          </div>
        </div>

        <Button
          className="w-full py-4 text-lg shadow-lg"
          onClick={() => navigate('/success')}
        >
          Подтвердить и записаться
        </Button>
      </div>
    </div>
  );
};

export default Confirm;