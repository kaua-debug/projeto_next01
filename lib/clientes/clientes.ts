'use server'

import { pool } from '@/lib/db'

export async function addCliente (
  nome: string,
  endereco: string,
  data_de_nascimento: string,
  numero_de_telefone: number,
  email: string,
  cpf: string
) {
  await pool.query(
    `INSERT INTO cliente (nome, endereco, data_nascimento, numero_de_telefone, email, cpf) 
     VALUES ($1, $2, $3, $4, $5, $6)`, 
     [nome, endereco, data_de_nascimento, numero_de_telefone, email, cpf]
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
  numero_de_telefone: number,
  email: string,
  cpf: string
) {
  await pool.query(
    `UPDATE cliente SET
      nome = $1,
      endereco = $2,
      data_nascimento = $3,
      numero_de_telefone = $4,
      email = $5,
      cpf = $6
    WHERE id = $7`,
    [nome, endereco, data_de_nascimento, numero_de_telefone, email, cpf, id]
  );
}

export async function removeCliente (id: number) {
  await pool.query(`DELETE FROM cliente WHERE id = $1`, [id]);
}
