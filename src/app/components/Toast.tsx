'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.toast}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeBtn}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}
