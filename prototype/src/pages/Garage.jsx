import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Plus, Trash2, ChevronRight } from 'lucide-react';
import { Button, Card, BackButton } from '../components/UI';

const Garage = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', year: '2022', color: 'Silver', vin: 'JTNB123456789' },
    { id: 2, brand: 'BMW', model: 'X5', year: '2019', color: 'Black', vin: 'WBA987654321' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate('/dashboard')} />
        <h1 className="text-xl font-bold text-slate-dark">Мои автомобили</h1>
      </header>

      <div className="flex-1 px-6 space-y-4 pb-24">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-slate-gray">В вашем гараже {cars.length} авто</p>
          <Button
            variant="primary"
            className="text-xs py-2 px-3 gap-1 rounded-ui"
            onClick={() => navigate('/add-car')}
          >
            <Plus size={16} /> Добавить
          </Button>
        </div>

        <div className="space-y-4">
          {cars.map((car) => (
            <Card key={car.id} className="flex items-center justify-between p-4 hover:border-primary transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  <Car size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-dark">{car.brand} {car.model}</h4>
                  <p className="text-xs text-slate-gray">{car.year} • {car.color}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-300 hover:text-soft-red transition-all">
                  <Trash2 size={18} />
                </button>
                <ChevronRight size={20} className="text-slate-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Garage;