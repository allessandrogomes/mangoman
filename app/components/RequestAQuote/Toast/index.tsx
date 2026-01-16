import { Check, CircleX } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  visible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  type = 'success',
  visible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`
         fixed mx-5 md:mx-0 bottom-4 md:right-4 z-[9999]
         flex items-center gap-1
         px-4 py-3 rounded-lg shadow-lg text-sm text-white
         ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}
       `}
    >
      {type === 'success' ? <Check /> : <CircleX />}
      {message}
    </div>
  );
}
