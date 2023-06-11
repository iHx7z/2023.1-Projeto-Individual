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

INSERT INTO carrinho VALUES 
    (NULL, 'TESTE1', 15000, 20, '2023-08-16 13:20:00'),
    (NULL, 'TESTE1', 12000, 20, '2023-09-16 13:20:00'),
    (NULL, 'TESTE1', 25000, 20, '2023-10-16 13:20:00'),
    (NULL, 'TESTE1', 30000, 20, '2023-11-16 13:20:00'),
    (NULL, 'TESTE1', 12000, 20, '2023-12-16 13:20:00');

-- grafico com total vendido por mês
SELECT 
DATE_FORMAT(dataHora, '%m') AS mês,
SUM(precoTotal) AS valorTotalVendido
	FROM carrinho 
		GROUP BY DATE_FORMAT(dataHora, '%m');
        


SELECT * FROM usuario JOIN carrinho
ON fkusuario = id WHERE id = 26;