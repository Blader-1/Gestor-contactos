import React from 'react';
import { Search } from 'lucide-react';
import type { Department } from '../types';
import { cn } from './ui/Button';

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedDepartment: Department | '';
  onDepartmentChange: (val: Department | '') => void;
  totalResults: number;
}

const DEPARTMENTS: Department[] = ["Ventas", "Desarrollo", "Marketing", "Soporte"];

export const FilterBar: React.FC<FilterBarProps> = ({
  search,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  totalResults
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
      <div className="relative w-full md:max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-colors"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onDepartmentChange('')}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-colors border",
              selectedDepartment === ''
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            )}
          >
            Todos
          </button>
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => onDepartmentChange(dept)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors border",
                selectedDepartment === dept
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              )}
            >
              {dept}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
          {totalResults} {totalResults === 1 ? 'resultado' : 'resultados'}
        </div>
      </div>
    </div>
  );
};
