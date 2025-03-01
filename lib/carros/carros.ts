'use server'
import { pool } from '@/lib/db'

export async function addCarro(fabricante: string, modelo: string, ano_fabricacao: string, cor: string, quilometros_rodados: string) {
  await pool.query(`insert into carros (modelo, fabricante, ano_fabricacao, cor, quilometros_rodados) values ( '${modelo}', '${fabricante}', '${ano_fabricacao}', '${cor}', '${quilometros_rodados}')`)
}
