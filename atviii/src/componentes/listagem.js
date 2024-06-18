/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

function ListaCliente() {

    const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5'];
    const produtos = ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5'];
    const servico = ['Serviço 1', 'Serviço 2', 'Serviço 3', 'Serviço 4', 'Produto 5'];


    return (
        <div className="container-fluid">
            <h4>Listagem Maior Consumo (Quantidade)</h4>
            <div className="list-group">
                {clientes.map((cliente, index) => (
                    <div key={index} className="list-group-item">
                        {cliente}
                    </div>
                ))}
            </div>
            <div className="container-fluid">
                <br></br>
                <h4>Listagem Maior Consumo (Valor)</h4>
                <div className="list-group">
                    {clientes.map((cliente, index) => (
                        <div key={index} className="list-group-item">
                            {cliente}
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
            <h4>Listagem Maior Consumo (Produtos)</h4>
            <div className="list-group">
                {produtos.map((produto, index) => (
                    <div key={index} className="list-group-item">
                        {produto}
                    </div>
                ))}
            </div>
            <br></br>
            <h4>Listagem Maior Consumo (Serviços)</h4>
            <div className="list-group">
                {servico.map((servico, index) => (
                    <div key={index} className="list-group-item">
                        {servico}
                    </div>
                ))}
                <br></br>
                <h4>Listagem Maior Consumo de Produto (Tipo e Raça de Pet)</h4>
                <div className="list-group">
                    {produtos.map((produto, index) => (
                        <div key={index} className="list-group-item">
                            {produto}
                        </div>
                    ))}
                    <br></br>
                    <h4>Listagem Maior Consumo de Serviço (Tipo e Raça de Pet)</h4>
                    <div className="list-group">
                        {servico.map((servico, index) => (
                            <div key={index} className="list-group-item">
                                {servico}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default function PaginaPrincipal({ tema }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ListaCliente tema={tema} />
                </div>
            </div>
        </div>
    );
}