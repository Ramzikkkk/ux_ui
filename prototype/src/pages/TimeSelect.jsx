import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const TimeSelect = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(null);

  const slots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Выберите время</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        <div className="bg-white p-6 rounded-card border border-slate-100 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-6 text-slate-dark">
            <Clock size={20} className="text-primary" />
            <span className="font-bold">Доступные слоты</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`py-3 rounded-lg text-sm font-medium transition-all ${
                  selectedTime === slot
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-dark hover:border-primary'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <Button
          className="w-full py-4 text-lg shadow-lg"
          disabled={!selectedTime}
          onClick={() => navigate('/options')}
        >
          Подтвердить время
        </Button>
      </div>
    </div>
  );
};

export default TimeSelect;