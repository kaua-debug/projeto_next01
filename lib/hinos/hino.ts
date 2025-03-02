'use server'
import { pool } from "../db"
export async function addHino(titulo: string, numero: number, letra: string) {
    await pool.query(`insert into hinos (titulo, numero, letra) values ('${titulo}', '${numero}', '${letra}')`)
}