import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import type { Contact, Department } from '../types';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface ContactFormProps {
  onSubmit: (contact: Contact) => void;
  onCancel: () => void;
}

const DEPARTMENTS: Department[] = ["Ventas", "Desarrollo", "Marketing", "Soporte"];

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio').min(3, 'Mínimo 3 caracteres'),
  email: Yup.string().email('Email inválido').required('El email es obligatorio'),
  phone: Yup.string().optional(),
  department: Yup.string().oneOf(DEPARTMENTS, 'Departamento inválido').required('El departamento es obligatorio'),
});

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onCancel }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      department: '' as Department | '',
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      const newContact: Contact = {
        id: uuidv4(),
        name: values.name,
        email: values.email,
        phone: values.phone,
        department: values.department as Department,
      };
      onSubmit(newContact);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <Input
        label="Nombre *"
        id="name"
        name="name"
        placeholder="Ej. Juan Pérez"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
      />

      <Input
        label="Email *"
        id="email"
        name="email"
        type="email"
        placeholder="ejemplo@correo.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
      />

      <Input
        label="Teléfono"
        id="phone"
        name="phone"
        placeholder="Opcional"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
      />

      <div className="w-full">
        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
          Departamento *
        </label>
        <select
          id="department"
          name="department"
          value={formik.values.department}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            formik.touched.department && formik.errors.department ? 'border-red-500 focus:ring-red-500' : ''
          }`}
        >
          <option value="" disabled>Selecciona un departamento</option>
          {DEPARTMENTS.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
        {formik.touched.department && formik.errors.department ? (
          <p className="mt-1 text-sm text-red-500">{formik.errors.department}</p>
        ) : null}
      </div>

      <div className="pt-4 flex justify-end gap-3">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button 
          type="submit" 
          disabled={!formik.isValid}
          className={!formik.isValid ? "opacity-50 cursor-not-allowed" : ""}
        >
          Guardar Contacto
        </Button>
      </div>
    </form>
  );
};
