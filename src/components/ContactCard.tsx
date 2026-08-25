import React from 'react';
import { Mail, Phone, Trash2, Building2 } from 'lucide-react';
import type { Contact, Department } from '../types';

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

const departmentColors: Record<Department, string> = {
  Ventas: "bg-green-100 text-green-800 border-green-200",
  Desarrollo: "bg-blue-100 text-blue-800 border-blue-200",
  Marketing: "bg-purple-100 text-purple-800 border-purple-200",
  Soporte: "bg-orange-100 text-orange-800 border-orange-200"
};

export const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
      <button
        onClick={() => onDelete(contact.id)}
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
        title="Eliminar contacto"
      >
        <Trash2 size={18} />
      </button>
      
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 pr-8 truncate">
            {contact.name}
          </h3>
          <span className={`inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium border ${departmentColors[contact.department]}`}>
            {contact.department}
          </span>
        </div>

        <div className="space-y-2 mt-2">
          <div className="flex items-center text-sm text-gray-600 gap-2">
            <Mail size={16} className="text-gray-400 shrink-0" />
            <span className="truncate">{contact.email}</span>
          </div>
          
          {contact.phone && (
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <Phone size={16} className="text-gray-400 shrink-0" />
              <span>{contact.phone}</span>
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-600 gap-2 sm:hidden">
            <Building2 size={16} className="text-gray-400 shrink-0" />
            <span>{contact.department}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
