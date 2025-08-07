import React from 'react';
import { motion } from 'framer-motion';
import './Card.scss';

const Card = ({ children, title, onClick, ariaLabel }) => {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__content">{children}</div>
    </motion.div>
  );
};

export default Card;
