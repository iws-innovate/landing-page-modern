'use client';
import { motion } from 'framer-motion';
import '../styles/Showcase.css';

export default function Showcase() {
  return (
    <section className="showcase-container">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        O que você recebe:
      </motion.h2>
      <motion.div
        className="mockup"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/img/mockup.png" alt="Exemplo de site entregue" />
      </motion.div>
    </section>
  );
}
