
function calculadoraDescontos() {
    const preco = Number(prompt("Digite o preço original do produto:"));
    const desconto = Number(prompt("Digite o percentual de desconto:"));

    if (isNaN(preco) || isNaN(desconto) || preco <= 0 || desconto < 0 || desconto > 100) {
        alert("Informe valores válidos. O desconto deve estar entre 0 e 100%.");
        return;
    }

    const economia = preco * desconto / 100;
    const precoFinal = preco - economia;

    alert(
        "CALCULADORA DE DESCONTOS\n\n" +
        "Preço original: R$ " + preco.toFixed(2) +
        "\nDesconto: " + desconto + "%" +
        "\nValor economizado: R$ " + economia.toFixed(2) +
        "\nPreço final: R$ " + precoFinal.toFixed(2)
    );
}

function calculadoraParcelas() {
    const valor = Number(prompt("Digite o valor total da compra:"));
    const parcelas = Number(prompt("Digite a quantidade de parcelas:"));

    if (isNaN(valor) || isNaN(parcelas) || valor <= 0 ||
        !Number.isInteger(parcelas) || parcelas <= 0) {
        alert("Informe valores válidos para a compra e as parcelas.");
        return;
    }

    const valorParcela = valor / parcelas;

    alert(
        "CALCULADORA DE PARCELAS\n\n" +
        "Valor total: R$ " + valor.toFixed(2) +
        "\nQuantidade de parcelas: " + parcelas +
        "\nValor de cada parcela: R$ " + valorParcela.toFixed(2)
    );
}

function simuladorInvestimentos() {
    const inicial = Number(prompt("Digite o valor inicial do investimento:"));
    const aporte = Number(prompt("Digite o valor do aporte mensal:"));
    const taxa = Number(prompt("Digite a taxa de rendimento mensal (%):"));
    const meses = Number(prompt("Digite o período do investimento em meses:"));

    if (isNaN(inicial) || isNaN(aporte) || isNaN(taxa) || isNaN(meses) ||
        inicial < 0 || aporte < 0 || taxa < 0 ||
        !Number.isInteger(meses) || meses <= 0 ||
        (inicial === 0 && aporte === 0)) {
        alert("Informe valores válidos para realizar a simulação.");
        return;
    }

    let saldo = inicial;
    let totalInvestido = inicial;

    for (let i = 1; i <= meses; i++) {
        saldo = saldo + (saldo * taxa / 100);
        saldo = saldo + aporte;
        totalInvestido = totalInvestido + aporte;
    }

    const rendimento = saldo - totalInvestido;

    alert(
        "SIMULADOR DE INVESTIMENTOS\n\n" +
        "Saldo final: R$ " + saldo.toFixed(2) +
        "\nTotal investido: R$ " + totalInvestido.toFixed(2) +
        "\nRendimento obtido: R$ " + rendimento.toFixed(2)
    );
}

function divisorDespesas() {
    let total = 0;
    let despesa;

    do {
        despesa = Number(prompt(
            "Digite o valor de uma despesa.\n" +
            "Digite 0 para encerrar."
        ));

        if (isNaN(despesa) || despesa < 0) {
            alert("Valor inválido! Digite uma despesa positiva ou zero.");
        } else {
            total = total + despesa;
        }

    } while (despesa !== 0);

    if (total <= 0) {
        alert("Nenhuma despesa foi informada.");
        return;
    }

    const pessoas = Number(prompt("Quantas pessoas vão dividir as despesas?"));

    if (isNaN(pessoas) || !Number.isInteger(pessoas) || pessoas <= 0) {
        alert("Informe uma quantidade válida de pessoas.");
        return;
    }

    const valorPessoa = total / pessoas;

    alert(
        "DIVISOR DE DESPESAS\n\n" +
        "Total das despesas: R$ " + total.toFixed(2) +
        "\nQuantidade de pessoas: " + pessoas +
        "\nValor por pessoa: R$ " + valorPessoa.toFixed(2)
    );
}

function iniciarCentral() {
    let opcao;

    do {
        opcao = prompt(
            "CENTRAL DE UTILIDADES\n\n" +
            "1 - Calculadora de Descontos\n" +
            "2 - Calculadora de Parcelas\n" +
            "3 - Simulador de Investimentos\n" +
            "4 - Divisor de Despesas\n" +
            "0 - Sair\n\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                calculadoraDescontos();
                break;

            case "2":
                calculadoraParcelas();
                break;

            case "3":
                simuladorInvestimentos();
                break;

            case "4":
                divisorDespesas();
                break;

            case "0":
                alert("Obrigado por utilizar a Central de Utilidades!");
                break;

            case null:
                opcao = "0";
                break;

            default:
                alert("Opção inválida! Escolha uma opção de 0 a 4.");
        }

    } while (opcao !== "0");
}

