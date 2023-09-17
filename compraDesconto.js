const tipoDePagamento = 'cheque';
const valorDoProduto = 10000;

console.log(`
${tipoDePagamento === 'credito' ? `Valor pago a ser pago: $R${((valorDoProduto - (valorDoProduto * 0.05)) / 100).toFixed(2)}` :
        tipoDePagamento === 'cheque' ? `Valor pago a ser pago: $R${((valorDoProduto - (valorDoProduto * 0.03)) / 100).toFixed(2)}` :
            `Valor pago a ser pago: $R${((valorDoProduto - (valorDoProduto * 0.10)) / 100).toFixed(2)}`
    }
`);