 'use server'
 
 import { pool } from '@/lib/db'

export async function addMaterias (nome: string, descricao: string, ano_letivo: number ) 
{
    await pool.query(`insert into materias(nome, descricao, ano_letivo
        
        ) values (
         
            $1,
            $2,
            $3
        
        )`,
    [

        nome,
        descricao,
        ano_letivo

    ])
}