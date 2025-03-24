'use server'

import { pool } from "../db"
export async function addMaterias(nome: string, descricao: string, ano_letivo: string) {

    await pool.query(
        `INSERT INTO materias (nome, descricao, ano_letivo) VALUES ($1, $2, $3)`,
        [nome, descricao, ano_letivo]
    );
    

}

export async function getMaterias() {
    return (await pool.query(`select * from materias`)).rows;
}

export async function updateMateria(
    id: number, 
    nome: string, 
    descricao: string, 
    ano_letivo: string
) {
    await pool.query(
        `
        update materias set 
            nome = '${nome}',
            descricao = '${descricao}',
            ano_letivo = ${ano_letivo}
        where id = ${id}
        `
    )
}
export async function removeMateria(
    id: number
) {
    await pool.query(`delete from materias where id = ${id}`);
}