import {
  Card,
  CardContent,
  CardDescription,

  CardTitle,
} from "@/components/ui/card";

import { ChartBarActive } from "./barcategory/barcategory";

export function Cardcategory() {
  return (
    <div className=" p-2 flex flex-col md:w-196">
      <Card className="md:w-full bg-primary/20 border-2 border-primary p-4">
        <div>
          <CardTitle className="text-xl text-zinc-300">
            Gasto por categoria
          </CardTitle>
          <CardDescription></CardDescription>
        </div>
        <CardContent>
          <div className="mt-7">
            <ChartBarActive />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
