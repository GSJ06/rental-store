import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { Toast as ToastType } from '../types';

interface ToastProps extends ToastType {
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg transition-all transform animate-slide-up
      ${type === 'success' ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100' : 
                            'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100'}`}>
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <XCircle className="w-5 h-5" />
      )}
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-75 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}