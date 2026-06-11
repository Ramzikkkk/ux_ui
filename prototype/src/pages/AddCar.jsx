import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Save } from 'lucide-react';
import { Button, Input, BackButton } from '../components/UI';

const AddCar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-slate-white p-6">
      <header className="flex items-center gap-4 mb-8 pt-8">
        <BackButton onClick={() => navigate('/garage')} />
        <h1 className="text-xl font-bold text-slate-dark">Новый автомобиль</h1>
      </header>

      <div className="flex-1 space-y-6">
        <div className="bg-white p-6 rounded-card border border-slate-100 space-y-4">
          <Input
            label="Марка автомобиля"
            placeholder="Например: Toyota"
          />
          <Input
            label="Модель"
            placeholder="Например: Camry"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Год выпуска"
              placeholder="2022"
              type="number"
            />
            <Input
              label="Цвет"
              placeholder="Серебристый"
            />
          </div>
          <Input
            label="VIN-код"
            placeholder="17-значный номер"
          />
        </div>

        <Button
          className="w-full py-4 text-lg gap-2"
          onClick={() => navigate('/garage')}
        >
          <Save size={20} /> Сохранить автомобиль
        </Button>
      </div>
    </div>
  );
};

export default AddCar;