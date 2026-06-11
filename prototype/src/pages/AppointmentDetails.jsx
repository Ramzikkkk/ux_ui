import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Car, AlertTriangle } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const AppointmentDetails = () => {
  const navigate = useNavigate();

  const appointment = {
    id: 1,
    service: 'Плановое ТО-15000',
    car: 'Toyota Camry, 2022',
    date: '12 Октября 2023',
    time: '10:00',
    price: '5 000₽',
    status: 'Confirmed',
    details: 'Замена масла, фильтров и общая диагностика систем автомобиля.'
  };

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Детали записи</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto space-y-6">
        <div className="bg-white p-6 rounded-card border border-slate-100 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-dark">{appointment.service}</h2>
            <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-1 rounded-full uppercase">
              {appointment.status}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <Car size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-gray uppercase font-bold">Автомобиль</p>
                <p className="text-sm font-medium text-slate-dark">{appointment.car}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-gray uppercase font-bold">Дата</p>
                <p className="text-sm font-medium text-slate-dark">{appointment.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-primary rounded-lg">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-gray uppercase font-bold">Время</p>
                <p className="text-sm font-medium text-slate-dark">{appointment.time}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <p className la="text-[10px] text-slate-gray uppercase font-bold">Описание работ</p>
            <p className="text-sm text-slate-dark leading-relaxed">{appointment.details}</p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="text-slate-gray font-medium">Стоимость:</span>
            <span className="text-lg font-bold text-primary">{appointment.price}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="secondary"
            className="py-4 gap-2"
            onClick={() => alert('Связь с мастером установлена!')}
          >
            📞 Связаться
          </Button>
          <Button
            variant="danger"
            className="py-4 gap-2"
            onClick={() => {
              if(confirm('Вы уверены, что хотите отменить запись?')) {
                alert('Запись успешно отменена');
                navigate('/my-appointments');
              }
            }}
          >
            <AlertTriangle size={18} /> Отменить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;