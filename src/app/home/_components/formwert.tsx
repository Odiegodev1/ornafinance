
import { getCategorias } from "../actions/get-category"
import { Formcreatewallet } from "./formcreatewallet"

export default async function FormWrapper() {
  const categorias = await getCategorias()
  return <Formcreatewallet categorias={categorias} />
}
