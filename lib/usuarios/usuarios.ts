'use server';

import { pool } from "../db";

export async function addUsuario(nome: string, apelido: string, email: string, senha: string) {
    await pool.query(
        `INSERT INTO usuarios (
            nome, apelido, email, senha
        ) VALUES ('${nome}', '${apelido}', '${email}', '${senha}')`
    );
}

export async function getUsuarios() {
    return (await pool.query(`SELECT * FROM usuarios`)).rows;
}

export async function updateUsuario(
    id: number, 
    nome: string, 
    apelido: string, 
    email: string, 
    senha: string
) {
    await pool.query(
        `
        UPDATE usuarios SET 
            nome = $1,
            apelido = $2,
            email = $3,
            senha = $4
            WHERE id = $5
        `, 
            [

            nome,
            apelido, 
            email, 
            senha,
            id 

            ]
    );
}

export async function removeUsuario(id: number) {
    await pool.query(`DELETE FROM usuarios WHERE id = ${id}`);
}
