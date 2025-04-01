'use server'
import { pool } from "../db"

export async function addCasa(
    tipo: string,
    endereco: string,
    area_terreno: number,
    areaconstruida: number,
    quartos: number,
    banheiros: number,
    edicula: boolean,
    churrasqueira: boolean,
    piscina: boolean,
    valorcondominio: number | null,
    precovenda: number
) {
    await pool.query(
        `INSERT INTO casa (
            tipo, endereco, area_terreno, areaconstruida, 
            quantidade_quartos, quantidade_banheiros, 
            edicula, churrasqueira, piscina, piscina, 
            valorcondominio, precovenda
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [tipo, endereco, area_terreno, areaconstruida, quartos, banheiros, edicula, churrasqueira, piscina, piscina, valorcondominio, precovenda]
    );
}

export async function getCasas() {
    return (await pool.query(`SELECT * FROM casa`)).rows;
}

export async function updateCasa(
    id: number,
    tipo: string,
    endereco: string,
    area_terreno: number,
    areaconstruida: number,
    quartos: number,
    banheiros: number,
    edicula: boolean,
    churrasqueira: boolean,
    piscina: boolean,
    valorcondominio: number | null,
    precovenda: number
) {
    await pool.query(
        `UPDATE casa SET 
            tipo = $1, endereco = $2, area_terreno = $3, areaconstruida = $4,
            quantidade_quartos = $5, quantidade_banheiros = $6,
            edicula = $7, churrasqueira = $8, piscina = $9,
            valorcondominio = $10, precovenda = $11
        WHERE id = $12`,
        [tipo, endereco, area_terreno, areaconstruida, quartos, banheiros, edicula, churrasqueira, piscina, valorcondominio, precovenda, id]
    );
}

export async function removeCasa(id: number) {
    await pool.query(`DELETE FROM casa WHERE id = $1`, [id]);
}
