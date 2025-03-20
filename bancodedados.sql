

CREATE TABLE alunos (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	nome_pai varchar(255) NULL,
	nome_mae varchar(255) NULL,
	data_nascimento date NOT NULL,
	cor_pele varchar(50) NULL
	
);



CREATE TABLE animais (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	nome_cientifico varchar(150) NULL,
	especie varchar(100) NULL,
	grupo varchar(100) NULL
	
);




CREATE TABLE apartamentos (
	id serial4 NOT NULL,
	tipo varchar(255) NULL,
	condominio varchar(255) NULL,
	area_privativa int,
	area_comum int,
	quantidade_de_quartos int,
	quantidade_de_banheiros int,
	tem_churrasqueira boolean,
	tem_piscina boolean,
	valor_do_condominio int,
	preco_de_venda int

);



CREATE TABLE public.carros (
	id serial4 NOT NULL,
	modelo varchar(100) NOT NULL,
	fabricante varchar(100) NOT NULL,
	ano_fabricacao int NOT NULL,
	cor varchar(50) NOT NULL,
	quilometros_rodados int NOT NULL
);



CREATE TABLE casa_de_oracao (
	id serial4 NOT NULL,
	nome varchar(255) NULL,
	endereco varchar(255) NULL,
	anciao varchar(255) NULL,
	telefone_anciao varchar(255) NULL,
	cooperador varchar(255) NULL,
	telefone_cooperador varchar(255) NULL,
	cooperador_de_jovens varchar(255) NULL,
	telefone_cooperador_de_jovens varchar(255) NULL,
	diacono varchar(255) NULL,
	telefone_diacono varchar(255) NULL,
	numero_da_ultima_santa_ceia varchar(255) NULL

);



CREATE TABLE cliente (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	endereco varchar(255) NOT NULL,
	data_denascimento date NOT NULL,
	numero_de_telefone varchar NOT NULL,
	email varchar(255) NOT NULL,
	cpf varchar(11) NOT NULL
);



CREATE TABLE computadores (
	id serial4 NOT NULL,
	descricao varchar NULL,
	cpu varchar(100) NOT NULL,
	memoria varchar(50) NOT NULL,
	placa_de_video varchar(100) NULL,
	placa_mae varchar(100) NULL,
	fonte varchar(50) NULL,
	armazenamento varchar(100) NULL
	
);



CREATE TABLE escolas (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	endereco varchar(255) NULL,
	quantidade_alunos int NOT NULL,
	telefone varchar(15) NULL
	
);



CREATE TABLE filmes (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	diretor varchar(255) NOT NULL,
	assunto varchar(255) NULL,
	classificacao_etaria varchar(10) NOT NULL
);



CREATE TABLE hinos (
	id serial4 NOT NULL,
	titulo varchar(255) NOT NULL,
	numero int NOT NULL,
	letra varchar NOT NULL
);



CREATE TABLE instrumentos (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	tipo varchar(50) NOT NULL

);






CREATE TABLE materias (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	descricao varchar(255) NULL,
	ano_letivo int NOT NULL
	
);



CREATE TABLE pneus (
	id serial4 NOT NULL,
	marca varchar(255) NOT NULL,
	modelo  NOT NULL,
	largura int NOT NULL,
	raio int NOT NULL,
	espessura int NOT NULL,
	carga_maxima int NOT NULL
);



CREATE TABLE produtos (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	valor_unitario numeric(10, 2) NOT NULL,
	validade date NOT NULL,
	descricao varchar
);



CREATE TABLE public.professores (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	endereco varchar(255) NULL,
	especialidade varchar(100) NULL,
	telefone varchar(15) NULL,
	email varchar(100) NOT NULL
);




CREATE TABLE public.usuarios (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	apelido varchar(100) NULL,
	email varchar(100) NOT NULL,
	senha varchar(255) NOT NULL,
	
);