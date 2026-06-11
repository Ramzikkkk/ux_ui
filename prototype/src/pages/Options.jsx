import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Package } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const Options = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState('стандарт');
  const [parts, setParts] = useState('оригинал');

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Детали записи</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto space-y-8">
        {/* Budget Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-dark">
            <DollarSign size={20} className="text-primary" />
            <h3 className="font-bold">Выберите бюджет</h3>
          </div>
          <div className="flex bg-slate-200 p-1 rounded-ui">
            {['эконом', 'стандарт', 'премиум'].map((option) => (
              <button
                key={option}
                onClick={() => setBudget(option)}
                className={`flex-1 py-2 text-xs font-medium rounded-lg capitalize transition-all ${
                  budget === option
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-slate-gray hover:text-slate-dark'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Parts Selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-dark">
            <Package size={20} className="text-primary" />
            <h3 className="font-bold">Тип запчастей</h3>
          </div>
          <div className="space-y-3">
            {['Оригинал', 'Аналог', 'Свои запчасти'].map((option) => (
              <label
                key={option}
                className={`flex items-center justify-between p-4 rounded-card border transition-all cursor-pointer ${
                  parts === option
                  ? 'border-primary bg-blue-50 text-primary'
                  : 'border-slate-100 bg-white text-slate-dark'
                }`}
              >
                <span className="text-sm font-medium">{option}</span>
                <input
                  type="radio"
                  name="parts"
                  className="w-4 h-4 text-primary focus:ring-primary"
                  checked={parts === option}
                  onChange={() => setParts(option)}
                />
              </label>
            ))}
          </div>
        </div>

        <Button
          className="w-full py-4 text-lg shadow-lg"
          onClick={() => navigate('/confirm')}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default Options;