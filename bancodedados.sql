-- public.alunos definição

-- Drop table

-- DROP TABLE public.alunos;

CREATE TABLE public.alunos (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	nome_pai varchar(255) NULL,
	nome_mae varchar(255) NULL,
	data_nascimento date NOT NULL,
	cor_pele varchar(50) NULL,
	CONSTRAINT alunos_pkey PRIMARY KEY (id)
);


-- public.animais definição

-- Drop table

-- DROP TABLE public.animais;

CREATE TABLE public.animais (rs
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	nome_cientifico varchar(150) NULL,
	especie varchar(100) NULL,
	grupo varchar(100) NULL,
	CONSTRAINT animais_pkey PRIMARY KEY (id)
);


-- public.apartamentos definição

-- Drop table

-- DROP TABLE public.apartamentos;

CREATE TABLE public.apartamentos (
	id serial4 NOT NULL,
	tipo varchar(255) NULL,
	condominio varchar(255) NULL,
	area_privativa varchar(255) NULL,
	area_comum varchar(255) NULL,
	quantidade_de_quartos varchar(255) NULL,
	quantidade_de_banheiros varchar(255) NULL,
	tem_churrasqueira varchar(255) NULL,
	tem_piscina varchar(255) NULL,
	valor_do_condominio varchar(255) NULL,
	preco_de_venda varchar(255) NULL,
	CONSTRAINT apartamentos_pkey PRIMARY KEY (id)
);


-- public.carros definição

-- Drop table

-- DROP TABLE public.carros;

CREATE TABLE public.carros (
	id serial4 NOT NULL,
	modelo varchar(100) NOT NULL,
	fabricante varchar(100) NOT NULL,
	ano_fabricacao int4 NOT NULL,
	cor varchar(50) NOT NULL,
	quilometros_rodados int4 NOT NULL,
	CONSTRAINT carros_ano_fabricacao_check CHECK ((ano_fabricacao > 1885)),
	CONSTRAINT carros_pkey PRIMARY KEY (id),
	CONSTRAINT carros_quilometros_rodados_check CHECK ((quilometros_rodados >= 0))
);


-- public.casa_de_oracao definição

-- Drop table

-- DROP TABLE public.casa_de_oracao;

CREATE TABLE public.casa_de_oracao (
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
	numero_da_ultima_santa_ceia varchar(255) NULL,
	CONSTRAINT casa_de_oracao_pkey PRIMARY KEY (id)
);


-- public.cliente definição

-- Drop table

-- DROP TABLE public.cliente;

CREATE TABLE public.cliente (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	endereco varchar(255) NOT NULL,
	data_denascimento date NOT NULL,
	numero_de_telefone numeric NOT NULL,
	email varchar(255) NOT NULL,
	cpf varchar(11) NOT NULL,
	CONSTRAINT cliente_cpf_key UNIQUE (cpf),
	CONSTRAINT cliente_email_key UNIQUE (email),
	CONSTRAINT cliente_pkey PRIMARY KEY (id)
);


-- public.computadores definição

-- Drop table

-- DROP TABLE public.computadores;

CREATE TABLE public.computadores (
	id serial4 NOT NULL,
	descricao varchar NULL,
	cpu varchar(100) NOT NULL,
	memoria varchar(50) NOT NULL,
	placa_de_video varchar(100) NULL,
	placa_mae varchar(100) NULL,
	fonte varchar(50) NULL,
	armazenamento varchar(100) NULL,
	CONSTRAINT computadores_pkey PRIMARY KEY (id)
);


-- public.escolas definição

-- Drop table

-- DROP TABLE public.escolas;

CREATE TABLE public.escolas (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	endereco varchar(255) NULL,
	quantidade_alunos int4 NOT NULL,
	telefone varchar(15) NULL,
	CONSTRAINT escolas_pkey PRIMARY KEY (id)
);


-- public.filmes definição

-- Drop table

-- DROP TABLE public.filmes;

CREATE TABLE public.filmes (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	diretor varchar(255) NOT NULL,
	assunto varchar(255) NULL,
	classificacao_etaria varchar(10) NOT NULL,
	CONSTRAINT filmes_pkey PRIMARY KEY (id)
);


-- public.hinos definição

-- Drop table

-- DROP TABLE public.hinos;

CREATE TABLE public.hinos (
	id serial4 NOT NULL,
	titulo varchar(255) NOT NULL,
	numero varchar NOT NULL,
	letra varchar NOT NULL,
	CONSTRAINT hinos_pkey PRIMARY KEY (id)
);


-- public.instrumentos definição

-- Drop table

-- DROP TABLE public.instrumentos;

CREATE TABLE public.instrumentos (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	tipo varchar(50) NOT NULL,
	CONSTRAINT instrumentos_pkey PRIMARY KEY (id)
);


-- public.instrutores definição

-- Drop table

-- DROP TABLE public.instrutores;

CREATE TABLE public.instrutores (

);


-- public.materias definição

-- Drop table

-- DROP TABLE public.materias;

CREATE TABLE public.materias (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	descricao varchar(255) NULL,
	ano_letivo varchar(255) NOT NULL,
	CONSTRAINT materias_pkey PRIMARY KEY (id)
);


-- public.pneus definição

-- Drop table

-- DROP TABLE public.pneus;

CREATE TABLE public.pneus (
	id serial4 NOT NULL,
	marca varchar(255) NOT NULL,
	modelo varchar(255) NOT NULL,
	largura varchar(255) NOT NULL,
	raio varchar(255) NOT NULL,
	espessura varchar(255) NOT NULL,
	carga_maxima varchar(255) NOT NULL,
	CONSTRAINT pneus_pkey PRIMARY KEY (id)
);


-- public.produtos definição

-- Drop table

-- DROP TABLE public.produtos;

CREATE TABLE public.produtos (
	id serial4 NOT NULL,
	nome varchar(255) NOT NULL,
	valor_unitario numeric(10, 2) NOT NULL,
	validade date NOT NULL,
	descricao text NULL,
	CONSTRAINT produtos_pkey PRIMARY KEY (id)
);


-- public.professores definição

-- Drop table

-- DROP TABLE public.professores;

CREATE TABLE public.professores (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	endereco varchar(255) NULL,
	especialidade varchar(100) NULL,
	telefone varchar(15) NULL,
	email varchar(100) NOT NULL,
	CONSTRAINT professores_email_key UNIQUE (email),
	CONSTRAINT professores_pkey PRIMARY KEY (id)
);


-- public.usuarios definição

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	apelido varchar(100) NULL,
	email varchar(100) NOT NULL,
	senha varchar(255) NOT NULL,
	CONSTRAINT usuarios_email_key UNIQUE (email),
	CONSTRAINT usuarios_pkey PRIMARY KEY (id)
);