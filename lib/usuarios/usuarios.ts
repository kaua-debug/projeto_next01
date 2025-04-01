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
            nome = '${nome}',
            apelido = '${apelido}',
            email = '${email}',
            senha = '${senha}'
        WHERE id = ${id}
        `
    );
}

export async function removeUsuario(id: number) {
    await pool.query(`DELETE FROM usuarios WHERE id = ${id}`);
}
