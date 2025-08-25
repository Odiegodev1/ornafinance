
import { auth } from "@/lib/auth";

import { redirect } from "next/navigation";



export default async function Header() {
   const session = await auth();
  
    if(!session?.user){
      redirect("/")
    }

  

  return (
    <>
   
    
    {!session?.user && <div className="text-2xl text-red-500">Faça Login para ter acesso</div>}
    </>
  );
}
