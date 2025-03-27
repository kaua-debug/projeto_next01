'use server'
import { pool } from "../db";

export async function addEscola(nome: string, endereco: string, quantidadeAlunos: number, telefone: string) {
    await pool.query(
        `INSERT INTO escolas (
            nome, endereco, quantidade_alunos, telefone
        ) VALUES ('${nome}', '${endereco}', ${quantidadeAlunos}, '${telefone}')`
    );
}

export async function getEscolas() {
    return (await pool.query(`SELECT * FROM escolas`)).rows;
}

export async function updateEscola(
    id: number, 
    nome: string, 
    endereco: string, 
    quantidadeAlunos: number, 
    telefone: string
) {
    await pool.query(
        `
        UPDATE escolas SET 
            nome = '${nome}',
            endereco = '${endereco}',
            quantidade_alunos = ${quantidadeAlunos},
            telefone = '${telefone}'
        WHERE id = ${id}
        `
    );
}

export async function removeEscola(id: number) {
    await pool.query(`DELETE FROM escolas WHERE id = ${id}`);
}
