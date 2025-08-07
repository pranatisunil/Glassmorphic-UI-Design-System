import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children, title, ariaLabel }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabel}
          >
            <div className="modal__header">
              <h2 id={ariaLabel}>{title}</h2>
              <button
                className="modal__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            <div className="modal__content">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
