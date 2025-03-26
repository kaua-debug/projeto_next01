'use server'
import { pool } from "../db"

export async function addInstrumento(nome: string, tipo: string) {
    await pool.query(
        `INSERT INTO instrumentos (
            nome, tipo
        ) VALUES ('${nome}', '${tipo}')`
    );
}

export async function getInstrumentos() {
    return (await pool.query(`SELECT * FROM instrumentos`)).rows;
}

export async function updateInstrumento(
    id: number, 
    nome: string, 
    tipo: string
) {
    await pool.query(
        `
        UPDATE instrumentos SET 
            nome = '${nome}',
            tipo = '${tipo}'
        WHERE id = ${id}
        `
    );
}

export async function removeInstrumento(id: number) {
    await pool.query(`DELETE FROM instrumentos WHERE id = ${id}`);
}
