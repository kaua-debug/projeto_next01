'use server'
import { pool } from "../db"
export async function addHino(titulo: string, numero: number, letra: string) {
    await pool.query(
        `insert into hinos (
            titulo, numero, letra
        ) values ('${titulo}', ${numero}, '${letra}')`
        )
}

export async function getHinos() {
    return (await pool.query(`select * from hinos`)).rows;
}

export async function updateHino(
    id: number, 
    titulo: string, 
    numero: number, 
    letra: string
) {
    await pool.query(
        `
        update hinos set 
            titulo = '${titulo}',
            letra = '${letra}',
            numero = ${numero}
        where id = ${id}
        `
    )
}
export async function removeHino(
    id: number
) {
    await pool.query(`delete from hinos where id = ${id}`);
}