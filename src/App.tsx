import {useState, useEffect, useMemo} from 'react';
import { Plus } from 'lucide-react';
import type { Contact, Department } from './types';
import { ContactList } from './components/ContactList';
import { FilterBar } from './components/FilterBar';
import { ContactForm } from './components/ContactForm';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import initialData from './data.json';

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | ''>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simular la carga inicial asíncrona para mostrar el skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setContacts(initialData as Contact[]);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filtrado reactivo en tiempo real combinando nombre y departamento
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesSearch = contact.name.toLowerCase().includes(search.toLowerCase());
      const matchesDepartment = selectedDepartment === '' || contact.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [contacts, search, selectedDepartment]);

  const handleAddContact = (newContact: Contact) => {
    setContacts((prev) => [...prev, newContact]);
    setIsModalOpen(false);
  };

  const handleDeleteContact = (id: string) => {
    if (window.confirm('¿Seguro que deseas eliminar este contacto?')) {
      setContacts((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Directorio de Contactos</h1>
            <p className="text-gray-500 mt-1">Gestiona tu equipo y sus departamentos</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <Plus size={20} />
            Nuevo Contacto
          </Button>
        </header>

        <FilterBar 
          search={search}
          onSearchChange={setSearch}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
          totalResults={filteredContacts.length}
        />

        <main>
          <ContactList 
            contacts={filteredContacts}
            isLoading={isLoading}
            onDelete={handleDeleteContact}
          />
        </main>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Agregar Nuevo Contacto"
      >
        <ContactForm 
          onSubmit={handleAddContact} 
          onCancel={() => setIsModalOpen(false)} 
        />
      </Modal>
    </div>
  );
}

export default App;
