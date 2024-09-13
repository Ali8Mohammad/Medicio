import React, { useState } from 'react'

const AppointmentData = () => {
    const fields = [
        { type: 'text', placeholder: 'Enter your name', name: 'name' },
        { type: 'email', placeholder: 'Enter your email', name: 'email' },
        { type: 'text', placeholder: 'Enter your phone number', name: 'phone' },
        { type: 'date', name: 'date' },
        {
          type: 'select',
          name: 'department',
          options: [
            { label: 'Select Department', value: '' },
            { label: 'Cardiology', value: 'cardiology' },
            { label: 'Neurology', value: 'neurology' },
            { label: 'Orthopedics', value: 'orthopedics' },
          ],
        },
        {
          type: 'select',
          name: 'doctor',
          options: [
            { label: 'Select Doctor', value: '' },
            { label: 'Dr. Smith', value: 'dr-smith' },
            { label: 'Dr. Johnson', value: 'dr-johnson' },
            { label: 'Dr. Brown', value: 'dr-brown' },
          ],
        },
        { type: 'textarea', placeholder: 'Enter your message', name: 'message' },
      ];
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        department: '',
        doctor: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
          
  return {fields, formData ,handleChange, handleSubmit}
}

export default AppointmentData