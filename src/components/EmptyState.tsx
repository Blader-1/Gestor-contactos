import React from 'react';
import { Users } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
  subMessage?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  message = "No hay contactos", 
  subMessage = "Intenta ajustar los filtros o agregar un nuevo contacto." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-xl border border-dashed border-gray-300">
      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <Users size={32} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{message}</h3>
      <p className="text-gray-500 text-sm max-w-sm">{subMessage}</p>
    </div>
  );
};
