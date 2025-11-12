import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CreateButtonWallet } from "./createbuttonwallet";
import { Formcreatewallet } from "./formcreatewallet";
import { getCategorias } from "../actions/get-category";
export async function CreateDialog() {
  const categorias = await getCategorias();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <CreateButtonWallet />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Transação</DialogTitle>
            <DialogDescription>crie uma nova transação</DialogDescription>
          </DialogHeader>
          <Formcreatewallet categorias={categorias} />
        </DialogContent>
      </Dialog>
    </>
  );
}
