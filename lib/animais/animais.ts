'use server'
import { pool } from "../db";

export async function addAnimal(nome: string, nomeCientifico: string, especie: string, grupo: string) {
    await pool.query(
        `INSERT INTO animais (nome, nome_cientifico, especie, grupo) 
         VALUES ($1, $2, $3, $4)`,
        [nome, nomeCientifico, especie, grupo]
    );
}

export async function getAnimais() {
    return (await pool.query(`SELECT * FROM animais`)).rows;
}

export async function updateAnimal(id: number, nome: string, nomeCientifico: string, especie: string, grupo: string) {
    await pool.query(
        `UPDATE animais SET 
         nome = $1, 
         nome_cientifico = $2, 
         especie = $3, 
         grupo = $4 
         WHERE id = $5`,
        [nome, nomeCientifico, especie, grupo, id]
    );
}

export async function removeAnimal(id: number) {
    await pool.query(
        `DELETE FROM animais WHERE id = $1`,
        [id]
    );
}
