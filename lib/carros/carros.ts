'use server'
import { pool } from '@/lib/db'

export async function addCarro(fabricante: string, modelo: string, ano_fabricacao: number, cor: string, quilometros_rodados: number) {
  await pool.query(`insert into carros (modelo, fabricante, ano_fabricacao, cor, quilometros_rodados) values ( 

        $1,
        $2,
        $3,
        $4,
        $5)`,


[

  fabricante,
  modelo,
  ano_fabricacao,
  cor,
  quilometros_rodados
  
])

}
