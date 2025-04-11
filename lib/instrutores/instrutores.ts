'use server'
import { pool } from "../db"
export async function addInstrutores(
       nome: string, 
       especialidade: string,
       data_nascimento: string,
       endereco: string,
       comum: string
    
    ) {
    await pool.query(`insert into instrutores(nome, especialidade, data_nascimento, endereco, comum
        ) values ($1, $2, $3, $4, $5)`,
         [nome, especialidade, data_nascimento, endereco, comum]
        );
}

        export async function getInstrutores() {
            return (await pool.query (`select *from instrutores`)).rows

        }

        export async function updateInstrutores(
            id: number,
            nome: string,
            especialidade: string,
            data_nascimento: string,
            endereco: string,
            comum: string = ''
        ) {
            await pool.query(
                `UPDATE instrutores 
                 SET nome = $1, especialidade = $2, data_nascimento = $3, endereco = $4, comum = $5
                 WHERE id = $6`,
                [nome, especialidade, data_nascimento, endereco, comum, id]
            );
        }
        

        export async function removeInstrutor(
            id: number
        ) {
            await pool.query(`delete from instrutores where id = ${id}`);
        }