import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// Global UI state: which overlay is open (search, appointment, chat, mobile menu)
// plus a lightweight toast message.
const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [overlay, setOverlay] = useState(null); // 'search' | 'appointment' | 'chat' | 'menu' | null
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const value = useMemo(
    () => ({
      overlay,
      open: (name) => setOverlay(name),
      close: () => setOverlay(null),
      toast,
      showToast,
    }),
    [overlay, toast, showToast],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside <UIProvider>');
  return ctx;
};