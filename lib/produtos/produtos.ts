'use server'
import { pool } from '@/lib/db'
export async function addProduto(
  nome: string,
  valorUnitario: number,
  validade: string,
  descricao: string
) {
  await pool.query(
    `insert into produtos(

      nome,
      valor_unitario,
      validade,
      descricao

    ) values (
        $1,
        $2, 
        $3,
        $4
     )`,
   [
    nome,
    valorUnitario,
    validade,
    descricao

   ])
}