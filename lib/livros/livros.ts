'use server'
import { pool } from '@/lib/db'

export async function addlivros(nome: string, autor: string, assunto: string, redumo: string, data_lancamento : string,  preco_sugerido: string) {
  await pool.query(`insert into carros (modelo, fabricante, ano_fabricacao, cor, quilometros_rodados) values ( '${nome}', '${autor}', '${assunto}', '${redumo}', '${data_lancamento}', '${ preco_sugerido}')`)
}
