/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function ListaCompra({ tema }) {
    const [selectedCompra, setSelectedCompra] = useState(null);

    const handleCompraClick = (compra) => {
        setSelectedCompra(compra === selectedCompra ? null : compra);
    };

    const handleEdit = (compra) => {
        // Lógica de edição aqui
        console.log(`Editando ${compra}`);
    };

    const handleRemove = (compra) => {
        // Lógica de remoção aqui
        console.log(`Removendo ${compra}`);
    };

    const compras = ['Compra 1', 'Compra 2', 'Compra 3', 'Compra 4', 'Compra 5', 'Compra 6'];

    return (
        <div className="container-fluid">
            <h4>Listagem de Compras</h4>
            <div className="list-group">
                {compras.map((compra, index) => (
                    <div key={index} className="list-group-item list-group-item-action" style={{ backgroundColor: compra === 'Compra 4' ? tema : '', position: 'relative' }}>
                        <a href="#" onClick={() => handleCompraClick(compra)} style={{ textDecoration: 'none' }}>{compra}</a>
                        {selectedCompra === compra && (
                            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                <button className="btn btn-success" onClick={() => handleEdit(compra)} style={{ marginRight: '5px' }}>Editar</button>
                                <button className="btn btn-danger" onClick={() => handleRemove(compra)}>Remover</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FormularioCadastroCompra({ tema }) {
    return (
        <div className="container-fluid">
            <h4>Comprar Produto</h4>
            <form>
            <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Produto" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Comprar</button>
                </div>
            </form>
            <div className="container-fluid">
            <h4>Comprar Serviço</h4>
            <form>
            <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Serviço" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Comprar</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default function PaginaPrincipal({ tema }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ListaCompra tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioCadastroCompra tema={tema} />
                </div>
            </div>
        </div>
    );
}

