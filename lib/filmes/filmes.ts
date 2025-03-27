'use server'

import { pool } from '@/lib/db'

export async function addFilmes (nome: string, diretor: string, assunto: string,  classificacao_etaria: string ) {
    await pool.query(`insert into filmes
        (    nome,
             diretor,
             assunto,
             classificacao_etaria
           
            ) values (

                '${nome}', '${diretor}', '${assunto}', ${classificacao_etaria}

            )`)
}

    export async function getFilmes() {
        
        return (await pool.query(`select * from filmes`)).rows

    }

        export async function updateFilmes(

            id: number, 
            nome: string, 
            diretor: string, 
            assunto: string, 
            classificacaoEtaria: number

        ) {

            await pool.query(
                `update filmes set
                
                nome = '${nome}'
                diretor = '${diretor}'
                assunto = '${assunto}'
                classificacao_etaria = '${classificacaoEtaria}'
                WHERE id = ${id}
                `
            );

        }

        export async function removeFilme(id:number) {
                
                await pool.query(`delete from filme where id = ${id}`);

        }