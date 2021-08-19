import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Hero } from '../../../assets/images/hero.svg';
import './_header.scss';

export default function Header() {
  return (
    <div className="header">
      <Hero />
      <div>
        <h1>Tus canciones favoritas</h1>
        <h2>Todo el <FontAwesomeIcon icon={faSun} /> y toda la <FontAwesomeIcon icon={faMoon} /></h2>
      </div>
    </div>
  );
}
