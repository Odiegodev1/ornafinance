import { Search } from "lucide-react"
import { Input } from "./ui/input"



export const SeacrhInput =  () => {
    return(
         <div className="flex-1 max-w-[400px] relative">
    <Input  
    placeholder="Busque por um curso"
    className="h-9 pl-9 peer"
    
    />
    <Search
    size={16} 
    className="absolute left-3 text-muted-foreground top-1/2 -translate-y-1/2 peer-focus:text-primary transition-all" />

    </div>
    )
}