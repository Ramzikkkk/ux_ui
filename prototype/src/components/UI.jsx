import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-3 rounded-ui font-semibold transition-all active:scale-95 flex items-center justify-center text-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 shadow-sm',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-blue-50',
    ghost: 'bg-transparent text-slate-dark hover:bg-slate-200',
    danger: 'bg-soft-red text-white hover:bg-red-600',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const BackButton = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 -ml-2 text-slate-dark hover:bg-slate-100 rounded-full transition-all flex items-center justify-center ${className}`}
    >
      <ArrowLeft size={24} />
    </button>
  );
};

export const Input = ({ label, icon: Icon, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-slate-dark ml-1">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon size={18} />
          </div>
        )}
        <input
          className={`w-full bg-white border border-slate-200 rounded-ui py-3 ${Icon ? 'pl-10' : 'px-4'} pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
          {...props}
        />
      </div>
    </div>
  );
};

export const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-card p-4 shadow-sm border border-slate-100 ${className}`}
    >
      {children}
    </div>
  );
};