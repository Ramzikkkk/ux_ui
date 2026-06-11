import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Wrench, ShieldCheck, Disc, Activity } from 'lucide-react';
import { Button, Card, BackButton } from '../components/UI';

const Catalog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Все');

  const categories = [
    { name: 'Все', icon: null },
    { name: 'ТО', icon: ShieldCheck },
    { name: 'Ремонт', icon: Wrench },
    { name: 'Шины', icon: Disc },
    { name: 'Диагностика', icon: Activity },
  ];

  const services = [
    { id: 1, category: 'ТО', name: 'Плановое ТО-15000', price: 'от 5 000₽', desc: 'Замена масла, фильтров и общая проверка.' },
    { id: 2, category: 'ТО', name: 'Плановое ТО-30000', price: 'от 12 000₽', desc: 'Расширенное ТО с заменой свечей и тормозной жидкости.' },
    { id: 3, category: 'Ремонт', name: 'Ремонт тормозной системы', price: 'от 3 000₽', desc: 'Замена колодок и дисков, прокачка системы.' },
    { id: 4, category: 'Ремонт', name: 'Ремонт подвески', price: 'от 4 500₽', desc: 'Замена амортизаторов и сайлентблоков.' },
    { id: 5, category: 'Шины', name: 'Шиномонтаж (4 колеса)', price: 'от 2 500₽', desc: 'Снятие, балансировка и установка резины.' },
    { id: 6, category: 'Диагностика', name: 'Компьютерная диагностика', price: 'от 1 500₽', desc: 'Поиск ошибок в ЭБУ и проверка датчиков.' },
  ];

  const filteredServices = activeCategory === 'Все'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 space-y-6">
        <div className="flex items-center gap-4">
          <BackButton onClick={() => navigate(-1)} />
          <h1 className="text-3xl font-bold text-slate-dark">Каталог услуг</h1>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={18} />
          </div>
          <input
            className="w-full bg-white border border-slate-200 rounded-ui py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Поиск услуги..."
          />
        </div>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.name
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-slate-gray border border-slate-100 hover:bg-slate-50'
              }`}
            >
              {cat.icon && <cat.icon size={16} />}
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="flex items-center justify-between p-4 cursor-pointer hover:border-primary transition-all"
              onClick={() => navigate(`/service/${service.id}`)}
            >
              <div className="space-y-1">
                <h4 className="font-bold text-slate-dark">{service.name}</h4>
                <p className="text-xs text-slate-gray line-clamp-1">{service.desc}</p>
                <p className="text-sm font-bold text-primary">{service.price}</p>
              </div>
              <Button variant="ghost" className="p-2 rounded-full text-primary">
                <ChevronRight size={20} />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default Catalog;