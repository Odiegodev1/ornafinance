
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FormCategory } from "./formcategory";

export const CategoryCompónents = () => {
    return(
    <Dialog>
    <DialogTrigger className="text-center text-sm hover:bg-zinc-800 p-1 mb-2 rounded-md w-full">Criar uma categoria</DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Criar uma categoria</DialogTitle>
        <DialogDescription>
        Adicione uma nova categoria
        </DialogDescription>
         
        </DialogHeader>
      <FormCategory />
    </DialogContent>
    </Dialog>
    )
}