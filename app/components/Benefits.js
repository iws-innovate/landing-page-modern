'use client';
import '../styles/Benefits.css';

export default function Benefits() {
  const items = [
    { emoji: '⚡', text: 'Entrega em até 24h' },
    { emoji: '📱', text: '100% responsivo' },
    { emoji: '💡', text: 'Design moderno e funcional' },
    { emoji: '🔒', text: 'Código limpo e otimizado' },
  ];

  return (
    <section className="benefits-section">
      <h2>Por que escolher a gente?</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <span className="emoji">{item.emoji}</span> {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
