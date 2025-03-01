'use server'
import { pool } from '@/lib/db'
export async function addCliente(
  nome: string,
  endereco: string,
  dataDeNascimento: string,
  telefone: number,
  email : string,
  CPF: number
) {
  await pool.query(
    `insert into cliente (
      nome,
      email,
      numero_de_telefone,
      endereco, 
      data_denascimento,
      CPF
    ) values (
      '${nome}',
      '${email}',
      '${telefone}',
      '${endereco}',
      '${dataDeNascimento}',
      '${CPF}'
     )`
  )
}