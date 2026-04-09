import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "@/components/ContactModal";

const ContactCtx = createContext<() => void>(() => {});

export const useContactModal = () => useContext(ContactCtx);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <ContactCtx.Provider value={() => setOpen(true)}>
      {children}
      <ContactModal open={open} onOpenChange={setOpen} />
    </ContactCtx.Provider>
  );
};
