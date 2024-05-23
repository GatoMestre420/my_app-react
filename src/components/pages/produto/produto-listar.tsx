import { useEffect } from "react";

// Consultar os produtos da API e Exibir na tela
// - resolver o problema de CORS (API)
// - Como exibir uma array na tela utilizando REACT

function ProdutoListar(){

    // Executar algum código no carregamento do componente
    useEffect(() => {
        console.log("O Componente foi carregado...");

        //FETCH ou AXIOS
        fetch("https://viacep.com.br/ws/80410110/json/")
            .then((resposta) => resposta.json())
            .then((cep) => {
                console.log(cep.logradouro);
            });


    }, []);

    return (
        <div>
            <h1>
                Listar Produtos
            </h1>
        </div>
    )
}

export default ProdutoListar;