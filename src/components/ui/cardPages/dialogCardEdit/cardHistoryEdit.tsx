"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../dialog";
import { TransactionForm, Finance } from "./form/formedittransacao";
import { useState } from "react";

type CardHistoryEditProps = {
  finance: Finance; // a transação que vai ser editada
  onUpdate: (updated: Finance) => void; // callback para atualizar lista no pai
};

export const CardHistoryEdit: React.FC<CardHistoryEditProps> = ({ finance, onUpdate }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-start text-sm hover:bg-zinc-800 p-1 mb-2 rounded-md w-full">
       Editar
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Transações</DialogTitle>
          <DialogDescription>Edite suas transações</DialogDescription>
        </DialogHeader>

        <TransactionForm
          finance={finance}
          onSuccess={(updated) => {
            onUpdate(updated); // atualiza lista no pai
            setOpen(false); // fecha modal
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
