/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import ListaPet from "./listaPet";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import ListaCompra from "./listaCompra";
import ListaTodos from "./listagem";
import Home from "./Home";


export default function Roteador() {
    const [tela, setTela] = useState('Home')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Home') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <Home tema="#e3f2fd" />
                </>
            )
        
        } else if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pets') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <ListaServico tema="#e3f2fd" />
                </>
            )

        } else if (tela === 'Comprar') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <ListaCompra tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Pets', 'Produtos', 'Serviços', 'Comprar', 'Listagem']} />
                    <ListaTodos tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}