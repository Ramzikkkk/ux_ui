import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar as CalendarIcon, Check } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const DateSelect = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    { day: '12', date: 'Окт', available: true },
    { day: '13', date: 'Окт', available: true },
    { day: '14', date: 'Окт', available: false },
    { day: '15', date: 'Окт', available: true },
    { day: '16', date: 'Окт', available: true },
    { day: '17', date: 'Окт', available: false },
    { day: '18', date: 'Окт', available: true },
    { day: '19', date: 'Окт', available: true },
    { day: '20', date: 'Окт', available: true },
    { day: '21', date: 'Окт', available: false },
    { day: '22', date: 'Окт', available: true },
    { day: '23', date: 'Окт', available: true },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Выберите дату</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        <div className="bg-white p-6 rounded-card border border-slate-100 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-6 text-slate-dark">
            <CalendarIcon size={20} className="text-primary" />
            <span className="font-bold">Октябрь 2023</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {dates.map((item, idx) => (
              <button
                key={idx}
                disabled={!item.available}
                onClick={() => setSelectedDate(item.day)}
                className={`h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                  !item.available
                  ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                  : selectedDate === item.day
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white border border-slate-100 text-slate-dark hover:border-primary'
                }`}
              >
                {item.day}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-card border border-blue-100 mb-8">
          <p className="text-xs text-blue-800 leading-relaxed">
            Даты, отмеченные серым цветом, уже заняты. Пожалуйста, выберите любую доступную дату.
          </p>
        </div>

        <Button
          className="w-full py-4 text-lg shadow-lg"
          disabled={!selectedDate}
          onClick={() => navigate('/select-time')}
        >
          Подтвердить дату
        </Button>
      </div>
    </div>
  );
};

export default DateSelect;