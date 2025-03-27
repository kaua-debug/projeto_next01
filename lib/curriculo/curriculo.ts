'use server'

import { pool } from "../db";

export async function addCurriculo(nome: string, endereco: string, curriculo: string, habilidades: string) {
    await pool.query(
        `INSERT INTO curriculo (nome, endereco, curriculo, habilidades) VALUES ($1, $2, $3, $4)`,
        [nome, endereco, curriculo, habilidades]
    );
}

export async function getCurriculos() {
    const result = await pool.query(`SELECT * FROM curriculo`);
    return result.rows;
}

export async function updateCurriculo(id: number, nome: string, endereco: string, curriculo: string, habilidades: string) {
    await pool.query(
        `UPDATE curriculo SET nome = $1, endereco = $2, curriculo = $3, habilidades = $4 WHERE id = $5`,
        [nome, endereco, curriculo, habilidades, id]
    );
}

export async function removeCurriculo(id: number) {
    await pool.query(`DELETE FROM curriculo WHERE id = $1`, [id]);
}
