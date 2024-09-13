import React, { useState } from 'react'
import cardiologyImage from './../assets/img/departments-1.jpg'
import neurologyImage  from './../assets/img/departments-2.jpg'
import HepatologyImage from './../assets/img/departments-3.jpg'
import pediatricsImage from './../assets/img/departments-4.jpg'
import ophthalmologistsImage from './../assets/img/departments-5.jpg'
const DepartmentData = () => {
    const tabs = [
        'Cardiology',
        'Neurology',
        'Hepatology',
        'Pediatrics',
        'Ophthalmologists'
      ];
      const content = {
        Cardiology: {
          text: {
            p1: 'Cardiology is a branch of medicine that deals with the disorders of the heart.',
            p2: 'It is a specialty of internal medicine concerned with the diagnosis and treatment of heart disorders.'
          },
          imageSrc: cardiologyImage
        },
        Neurology: {
          text: {
            p1: 'Neurology is a branch of medicine dealing with disorders of the nervous system.',
            p2: 'Neurologists diagnose and treat conditions of the brain, spinal cord, nerves, and muscles.'
          },
          imageSrc: neurologyImage
        },
        Hepatology: {
          text: {
            p1: 'Hepatology is a sub-specialty of gastroenterology concerned with the liver.',
            p2: 'It involves the study and treatment of liver diseases and disorders.'
          },
          imageSrc: HepatologyImage
        },
        Pediatrics: {
          text: {
            p1: 'Pediatrics is a branch of medicine that involves the medical care of infants, children, and adolescents.',
            p2: 'Pediatricians manage the physical, behavioral, and mental care for children.'
          },
          imageSrc: pediatricsImage
        },
        Ophthalmologists: {
          text: {
            p1: 'Ophthalmologists are medical doctors specializing in the diagnosis and treatment of eye disorders.',
            p2: 'They perform eye surgery and manage complex eye diseases.'
          },
          imageSrc: ophthalmologistsImage
        }
      };
      const [activeTab, setActiveTab] = useState(tabs[0]);

      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
                
  return {tabs , content , activeTab, handleTabClick}
}

export default DepartmentData