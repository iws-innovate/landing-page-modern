'use client';

import { motion } from 'framer-motion';
import '../styles/Hero.css'; 

export default function Hero() {
  return (
    <div className="hero-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title">Landing pages que impressionam</h1>
        <p className="hero-subtitle">
          Mostre que seu negócio sabe o que faz. A primeira é gratuita.
        </p>
        <a href="https://wa.me/SEUNUMEROAQUI" className="hero-button">
          Quero minha landing agora
        </a>
      </motion.div>
    </div>
  );
}
