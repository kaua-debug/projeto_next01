import { pool } from '@/lib/db'

export async function addFilmes (nome: string, diretor: string, assunto: string,  classificacao_etaria: string ) {
    await pool.query(`insert into alunos(nome, nome_pai, nome_mae, data_nascimento, cor_pele) values ( '${nome}', '${diretor}',  '${assunto}'  '${classificacao_etaria}')`)
}