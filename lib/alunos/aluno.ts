'use server'

import { pool } from '@/lib/db'

export async function addAluno (nome: string, nome_pai: string, nome_mae: string,  data_nascimento: string, cor_pele: string ) {
    await pool.query(`insert into alunos(nome, nome_pai, nome_mae, data_nascimento, cor_pele) values ( '${nome}', '${nome_pai}',  '${nome_mae}',  '${data_nascimento}', '${cor_pele}')`)
}