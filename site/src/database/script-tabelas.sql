USE STREETWEAR;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)) AUTO_INCREMENT = 01;

CREATE TABLE carrinho (
idCarrinho INT PRIMARY KEY AUTO_INCREMENT,
produtos VARCHAR(200),
precoTotal INT,
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
dataHora DATETIME );

SELECT * FROM carrinho;
SELECT * FROM usuario;

-- grafico com total vendido por mês
SELECT 
DATE_FORMAT(dataHora, '%m') AS mês,
SUM(precoTotal) AS 'valor total vendido'
	FROM carrinho 
		GROUP BY DATE_FORMAT(dataHora, '%m');

SELECT * FROM usuario JOIN carrinho
ON fkusuario = id WHERE id = 26;