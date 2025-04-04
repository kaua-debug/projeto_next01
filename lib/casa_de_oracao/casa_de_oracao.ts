'use server'
import { pool } from "../db";

export async function addCasaDeOracao(nome: string, endereco: string, anciao: string, telefone_anciao: string, cooperador:string, telefonecooperador: string, CooperadorDeJovens: string, telefonecooperadorJovens: string, diacono: string, telefoneDiacono: string, ultimaSantaCeia: number) {
    await pool.query(
        `INSERT INTO casa_de_oracao (nome, endereco, anciao, telefone_anciao, cooperador, telefonecooperador, CooperadorDeJovens, telefonecooperadorJovens, diacono, telefoneDiacono, ultimaSantaCeia) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [nome, endereco, anciao, telefone_anciao, cooperador, telefone_cooperador, CooperadorDeJovens, telefonecooperadorJovens, diacono, telefoneDiacono, ultimaSantaCeia]
    );
}

export async function getCasasDeOracao() {
    return (await pool.query(`SELECT * FROM casa_de_oracao`)).rows;
}

export async function updateCasaDeOracao(id: number, nome: string, endereco: string, anciao: string, telefone_anciao: string, cooperador:string, telefone_cooperador: string, CooperadorDeJovens: string, telefonecooperadorJovens: string, diacono: string, telefoneDiacono: string, ultimaSantaCeia: number) {
    await pool.query(
        `UPDATE  SET 
        nome = $1, 
        endereco = $2, 
        endereco = $3, 
        telefone_anciao  = $4, 
        cooperador = $5, 
        telefonecooperador  = $6, 
        CooperadorDeJovens  = $7, 
        telefonecooperadorJovens = $8, 
        diacono = $9, 
        diacono = $10, 
          ultimaSantaCeia= $11
         WHERE id = $12`,
        [nome, endereco, anciao, telefone_anciao, cooperador, telefone_cooperador, CooperadorDeJovens, telefonecooperadorJovens, diacono, telefoneDiacono, ultimaSantaCeia, id]
    );
}

export async function removeCasasDeOracao(id: number) {
    await pool.query(
        `DELETE FROM casa_de_oracao WHERE id = $1`,
        [id]
    );
}
