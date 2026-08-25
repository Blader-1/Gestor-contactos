import React from 'react';
import type { Contact } from '../types';
import { ContactCard } from './ContactCard';
import { EmptyState } from './EmptyState';
import { SkeletonLoader } from './SkeletonLoader';

interface ContactListProps {
  contacts: Contact[];
  isLoading: boolean;
  onDelete: (id: string) => void;
}

export const ContactList: React.FC<ContactListProps> = ({ contacts, isLoading, onDelete }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((n) => (
          <SkeletonLoader key={n} />
        ))}
      </div>
    );
  }

  if (contacts.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {contacts.map((contact) => (
        <ContactCard 
          key={contact.id} 
          contact={contact} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};
