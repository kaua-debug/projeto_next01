'use server'

import { pool } from '@/lib/db'

export async function addFilmes (nome: string, diretor: string, assunto: string,  classificacao_etaria: string ) {
    await pool.query(`insert into filmes
        (    nome,
             diretor,
             assunto,
             cssificacao_etaria
           
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
            classificacao_etaria: number

        ) {

            await pool.query(
                `
                update filmes set
                nome = $1,
                diretor = $2,
                assunto = $3,
                classificacao_etaria = $4,
                where id = $5
                `
                
                
            );

            [

                nome,
                diretor, 
                assunto, 
                classificacao_etaria, 
                id

            ]

        }

        export async function removeFilme(id:number) {
                
                await pool.query(`delete from filme where id = ${id}`);

        }