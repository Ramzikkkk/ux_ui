import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, Calendar } from 'lucide-react';
import { Button, Card, BackButton } from '../components/UI';

const MyAppointments = () => {
  const navigate = useNavigate();

  const appointments = [
    { id: 1, service: 'Плановое ТО-15000', car: 'Toyota Camry', date: '12 Окт, 10:00', status: 'upcoming' },
    { id: 2, service: 'Шиномонтаж', car: 'BMW X5', date: '05 Окт, 14:00', status: 'completed' },
    { id: 3, service: 'Диагностика', car: 'Toyota Camry', date: '20 Сент, 09:00', status: 'completed' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-white">
      <header className="p-6 pt-12 flex items-center gap-4">
        <BackButton onClick={() => navigate('/dashboard')} />
        <h1 className="text-2xl font-bold text-slate-dark">Мои записи</h1>
      </header>

      <div className="flex-1 px-6 pb-24 overflow-y-auto space-y-8">
        {/* Upcoming Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-gray uppercase tracking-wider ml-1">Предстоящие</h3>
          <div className="space-y-4">
            {appointments.filter(a => a.status === 'upcoming').map(app => (
              <Card
                key={app.id}
                className="p-4 cursor-pointer hover:border-primary transition-all"
                onClick={() => navigate(`/appointment/${app.id}`)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-dark">{app.service}</h4>
                      <p className="text-xs text-slate-gray">{app.car}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-blue-50 px-2 py-1 rounded-full uppercase">
                    Ожидается
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-gray mt-4">
                  <Calendar size={14} />
                  {app.date}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-gray uppercase tracking-wider ml-1">Архив записей</h3>
          <div className="space-y-4">
            {appointments.filter(a => a.status === 'completed').map(app => (
              <Card
                key={app.id}
                className="p-4 opacity-70 grayscale-[0.5]"
                onClick={() => navigate(`/appointment/${app.id}`)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 text-slate-400 rounded-lg">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-dark">{app.service}</h4>
                      <p className="text-xs text-slate-gray">{app.car}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-full uppercase">
                    Завершено
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-gray mt-4">
                  <Calendar size={14} />
                  {app.date}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyAppointments;