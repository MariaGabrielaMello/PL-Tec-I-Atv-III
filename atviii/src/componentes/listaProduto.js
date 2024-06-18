/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

function ListaProduto({ tema }) {
    const [selectedProduto, setSelectedproduto] = useState(null);

    const handleProdutoClick = (produto) => {
        setSelectedproduto(produto === selectedProduto ? null : produto);
    };

    const handleEdit = (produto) => {
        // Lógica de edição aqui
        console.log(`Editando ${produto}`);
    };

    const handleRemove = (produto) => {
        // Lógica de remoção aqui
        console.log(`Removendo ${produto}`);
    };

    const produtos = ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5', 'Produto 6'];

    return (
        <div className="container-fluid">
            <h4>Listagem de Produtos</h4>
            <div className="list-group">
                {produtos.map((produto, index) => (
                    <div key={index} className="list-group-item list-group-item-action" style={{ backgroundColor: produto === 'produto 4' ? tema : '', position: 'relative' }}>
                        <a href="#" onClick={() => handleProdutoClick(produto)} style={{ textDecoration: 'none' }}>{produto}</a>
                        {selectedProduto === produto && (
                            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                <button className="btn btn-success" onClick={() => handleEdit(produto)} style={{ marginRight: '5px' }}>Editar</button>
                                <button className="btn btn-danger" onClick={() => handleRemove(produto)}>Remover</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FormularioCadastroProduto({ tema }) {
    return (
        <div className="container-fluid">
            <h4>Cadastrar Produto</h4>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

function FormularioEditarProduto({ tema }) {
    return (
        <div className="container-fluid">
            <br></br>
            <h4>Editar Produto</h4>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default function PaginaPrincipal({ tema }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ListaProduto tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioCadastroProduto tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioEditarProduto tema={tema} />
                </div>
            </div>
        </div>
    );
}
