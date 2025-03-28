'use server'

import { pool } from "@/lib/db"

export async function addProfessor(
    nome: string, 
    endereco: string, 
    especialidade: string, 
    telefone: string, 
    email: string
) {
    await pool.query(`
        INSERT INTO professores (nome, endereco, especialidade, telefone, email) 
        VALUES ('${nome}', '${endereco}', '${especialidade}', '${telefone}', '${email}')
    `);
}

export async function getProfessores() {
    return (await pool.query(`SELECT * FROM professores`)).rows;
}

export async function updateProfessor(
    id: number,
    nome: string, 
    endereco: string, 
    especialidade: string, 
    telefone: string, 
    email: string
) {
    await pool.query(`
        UPDATE professores SET 
            nome = '${nome}', 
            endereco = '${endereco}', 
            especialidade = '${especialidade}', 
            telefone = '${telefone}', 
            email = '${email}' 
        WHERE id = ${id}
    `);
}

export async function removeProfessor(id: number) {
    await pool.query(`DELETE FROM professores WHERE id = ${id}`);
}
