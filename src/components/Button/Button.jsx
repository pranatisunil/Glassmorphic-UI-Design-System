import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../theme/ThemeContext';
import './Button.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  ariaLabel,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 8px 32px rgba(108, 92, 231, 0.3)',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.button
      className={`button button--${variant} button--${size} ${
        theme === 'dark' ? 'button--dark' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || children}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
