import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';
import { Button, Card, BackButton } from '../components/UI';

const CarSelect = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry', year: '2022', color: 'Silver' },
    { id: 2, brand: 'BMW', model: 'X5', year: '2019', color: 'Black' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Выберите автомобиль</h1>
      </header>

      <div className="flex-1 px-6 pb-24 space-y-4 overflow-y-auto">
        <p className="text-sm text-slate-gray mb-6">Выберите автомобиль из вашего гаража, для которого требуется обслуживание</p>

        {cars.map((car) => (
          <Card
            key={car.id}
            className="flex items-center justify-between p-4 cursor-pointer hover:border-primary transition-all group"
            onClick={() => navigate('/select-date')}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-primary transition-all">
                <Car size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-dark">{car.brand} {car.model}</h4>
                <p className="text-xs text-slate-gray">{car.year} • {car.color}</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-primary transition-all flex items-center justify-center">
               <div className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </Card>
        ))}

        <Button
          variant="secondary"
          className="w-full py-4 gap-2"
          onClick={() => navigate('/add-car')}
        >
          <PlusC icon="plus" /> Добавить новый автомобиль
        </Button>
      </div>
    </div>
  );
};

const PlusC = ({ icon }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
)

export default CarSelect;