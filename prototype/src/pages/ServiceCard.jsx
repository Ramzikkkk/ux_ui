import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, Clock, Wallet } from 'lucide-react';
import { Button, BackButton } from '../components/UI';

const ServiceCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const services = {
    1: { name: 'Плановое ТО-15000', price: '5 000₽', desc: 'Базовое техническое обслуживание автомобиля. Включает полную проверку всех систем, замену моторного масла и масляного фильтра, диагностику ходовой части и проверку уровней всех технических жидкостей.' },
    2: { name: 'Плановое ТО-30000', price: '12 000₽', desc: 'Расширенное обслуживание. Помимо стандартного ТО, производится замена воздушного и салонного фильтров, проверка тормозных колодок, замена свечей зажигания и полная диагностика электроники.' },
    3: { name: 'Ремонт тормозной системы', price: '3 000₽', desc: 'Полный комплекс работ по тормозам: замена передних или задних колодок, проверка износа тормозных дисков, прокачка тормозной жидкости и проверка эффективности торможения.' },
    4: { name: 'Ремонт подвески', price: '4 500₽', desc: 'Диагностика и ремонт элементов подвески. Замена амортизаторов, сайлентблоков, рычагов. Устранение стуков и посторонних шумов при движении.' },
    5: { name: 'Шиномонтаж (4 колеса)', price: '2 500₽', desc: 'Профессиональный шиномонтаж с использованием современного оборудования. Снятие старых шин, мойка дисков, балансировка и установка новой резины.' },
    6: { name: 'Компьютерная диагностика', price: '1 500₽', desc: 'Глубокий анализ всех систем автомобиля с помощью диагностического сканера. Считывание ошибок ЭБУ, проверка работы всех датчиков и исполнительных механизмов.' },
  };

  const service = services[id] || services[1];

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate(-1)} />
        <h1 className="text-xl font-bold text-slate-dark">Детали услуги</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto space-y-8">
        <div className="w-full h-48 bg-slate-200 rounded-card flex items-center justify-center text-slate-400">
          <img
            src={`https://via.placeholder.com/400x200?text=${encodeURIComponent(service.name)}`}
            alt={service.name}
            className="w-full h-full object-cover rounded-card"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-dark">{service.name}</h2>
          <p className="text-lg font-bold text-primary">{service.price}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-gray uppercase tracking-wider">Что включено:</h3>
          <div className="space-y-3">
            {[
              'Полный осмотр автомобиля',
              'Квалифицированные мастера',
              'Гарантия на выполненные работы',
              'Использование профессионального оборудования'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-slate-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-card border border-slate-100 flex items-center gap-3">
            <Clock size={20} className="text-primary" />
            <span className="text-xs font-medium text-slate-dark">~ 2-4 часа</span>
          </div>
          <div className="bg-white p-4 rounded-card border border-slate-100 flex items-center gap-3">
            <Wallet size={20} className="text-primary" />
            <span className="text-xs font-medium text-slate-dark">Оплата картой</span>
          </div>
        </div>

        <Button
          className="w-full py-4 text-lg shadow-lg"
          onClick={() => navigate('/select-car')}
        >
          Записаться на услугу
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;