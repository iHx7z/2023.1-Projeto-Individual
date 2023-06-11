var database = require("../database/config");

function buscarUltimasMedidas(idAnaliseMensal, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        DATE_FORMAT(dataHora, '%m') AS mês,
        SUM(precoTotal) AS valorTotalVendido
            FROM carrinho 
                GROUP BY DATE_FORMAT(dataHora, '%m');`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        DATE_FORMAT(dataHora, '%m') AS mês,
        SUM(precoTotal) AS valorTotalVendido
            FROM carrinho 
                GROUP BY DATE_FORMAT(dataHora, '%m');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAnaliseMensal) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT 
        DATE_FORMAT(dataHora, '%m') AS mês,
        SUM(precoTotal) AS valorTotalVendido
            FROM carrinho 
                GROUP BY DATE_FORMAT(dataHora, '%m');`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        DATE_FORMAT(dataHora, '%m') AS mês,
        SUM(precoTotal) AS valorTotalVendido
            FROM carrinho 
                GROUP BY DATE_FORMAT(dataHora, '%m');`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
