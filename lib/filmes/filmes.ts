'use server'

import { pool } from '@/lib/db'

export async function addFilmes (nome: string, diretor: string, assunto: string,  classificacao_etaria: string ) {
    await pool.query(`insert into filmes(nome, diretor, assunto, classificacao_etaria) values ( '${nome}', '${diretor}',  '${assunto}', '${classificacao_etaria}')`)
}