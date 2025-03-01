'use server'
import { pool } from '@/lib/db'

export async function addInstrutor (nome: string, especialidade: string, data_nascimento: string, 	endereco: string, comum: string ) {
    await pool.query(`insert into instrutores(nome, especialidade, data_nascimento, endereco, comum) values ( '${nome}', '${especialidade}', '${data_nascimento}', '${endereco}', '${comum}')`)
}