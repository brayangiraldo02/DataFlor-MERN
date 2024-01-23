import React from 'react';
import NavBar from '../../components/layout/nav/NavBar';
import Carousel from '../../components/carousel/Carousel';
import './Home.css';

const Home = () => {
  const slides = [
    { url: '/img/carousel_amarillas.jpg', title: 'Image 1' },
    { url: '/img/carousel_girasol.jpg', title: 'Image 2' },
    { url: '/img/carousel_moradas.jpg', title: 'Image 3'},
    { url: '/img/carousel_rosa_rosada.jpg', title: 'Image 4'}
  ];

  return (
    <div>
      <NavBar />
      <h1>¡Bienvenido a DataFlor!</h1>
      <h3>El equipo de DataFlor le da la bienvenida a la plataforma líder en el manejo de inventarios para floristerías.</h3>
      <h3>Somos la solución número uno para ayudar a su negocio a prosperar y crecer.</h3>

      <Carousel slides={slides} />

      <h3>¡Nuestra misión es facilitarle la vida a la gente!</h3>
      <h3>Nos esforzamos por brindar a nuestros clientes las herramientas necesarias para simplificar la gestión de sus inventarios.</h3> 
      <h3>Con DataFlor, usted puede concentrarse en lo que realmente importa: <div class="text">Su pasión por las flores y la satisfacción de sus clientes.</div></h3>
    </div>
  );
};

export default Home;
