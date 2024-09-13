import logoImg from './../assets/img/logo.png';

const NavBarData = () => {
  const logo = { img: logoImg, text: 'Medicio' };
  const items = [
    { id: 'Home', name: 'Home' },
    { id: 'About', name: 'About' },
    { id: 'Services', name: 'Services' },
    { id: 'Departments', name: 'Departments' },
    { id: 'Doctors', name: 'Doctors' },
    { id: 'Contact', name: 'Contact' },
  ];

  return { logo, items }; // يجب إعادة البيانات هنا
};

export default NavBarData;
