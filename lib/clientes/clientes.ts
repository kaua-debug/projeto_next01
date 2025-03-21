'use server'

import { pool } from '@/lib/db'

export async function addCliente (
  nome: string,
  endereco: string,
  data_de_nascimento: string,
  telefone: string,
  email: string,
  cpf: string
) {
  await pool.query(
    `INSERT INTO cliente (nome, endereco, data_nascimento, telefone, email, cpf) 
     VALUES ('${nome}', '${endereco}', '${data_de_nascimento}', '${telefone}', '${email}', '${cpf}')`
  );
}

export async function getClientes () {
  return (await pool.query(`SELECT * FROM cliente`)).rows;
}

export async function updateCliente (
  id: number,
  nome: string,
  endereco: string,
  data_de_nascimento: string,
  telefone: string,
  email: string,
  cpf: string
) {
  await pool.query(
    `UPDATE cliente SET
      nome = '${nome}',
      endereco = '${endereco}',
      data_nascimento = '${data_de_nascimento}',
      telefone = '${telefone}',
      email = '${email}',
      cpf = '${cpf}'
    WHERE id = ${id}`
  );
}

export async function removeCliente (id: number) {
  await pool.query(`DELETE FROM clientes WHERE id = ${id}`);
}
