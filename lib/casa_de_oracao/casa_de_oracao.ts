'use server'
import { pool } from "../db";

export async function addCasaDeOracao(nome: string, endereco: string, anciao: string, telefone_anciao: string, cooperador:string, telefone_cooperador: string, cooperador_de_jovens: string, telefone_cooperador_jovens: string, diacono: string, telefone_diacono: string, ultima_santa_ceia: number) {
    await pool.query(
        `insert into casa_de_oracao (
         nome, 
         endereco,
         anciao,
         telefone_anciao, 
         cooperador,
         telefone_cooperador, 
         cooperador_de_jovens,
         telefone_cooperador_jovens, 
         diacono, telefone_diacono, 
         ultima_santa_ceia

         )  VALUES (

         nome, 
         endereco,
         anciao,
         telefone_anciao,
         cooperador, 
         telefone_cooperador,
         cooperador_de_jovens, 
         telefone_cooperador_jovens, 
         diacono,
         telefone_diacono, 
         ultima_santa_ceia)`)
}

export async function getCasasDeOracao() {
    return (await pool.query(`SELECT * FROM casa_de_oracao`)).rows;
}

export async function updateCasaDeOracao(id: number, nome: string, endereco: string, anciao: string, telefone_anciao: string, cooperador:string, telefone_cooperador: string, cooperador_de_jovens: string, telefone_cooperador_jovens: string, diacono: string, telefone_diacono: string, ultima_santa_ceia: number) {
    await pool.query(
        `UPDATE  SET 
        nome = $1, 
        endereco = $2, 
        endereco = $3, 
        telefone_anciao  = $4, 
        cooperador = $5, 
        telefone_cooperador  = $6, 
        cooperador_de_jovens  = $7, 
        telefone_cooperador_jovens = $8, 
        diacono = $9, 
        diacono = $10, 
          ultima_santa_ceia= $11
         WHERE id = $12`,
        [nome, endereco, anciao, telefone_anciao, cooperador, telefone_cooperador, cooperador_de_jovens, telefone_cooperador_jovens, diacono, telefone_diacono, ultima_santa_ceia, id]
    );
}

export async function removeCasasDeOracao(id: number) {
    await pool.query(
        `DELETE FROM casa_de_oracao WHERE id = $1`,
        [id]
    );
}
