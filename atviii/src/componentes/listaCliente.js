/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

function ListaCliente({ tema }) {
    const [selectedCliente, setSelectedcliente] = useState(null);

    const handleClienteClick = (cliente) => {
        setSelectedcliente(cliente === selectedCliente ? null : cliente);
    };

    const handleEdit = (cliente) => {
        // Lógica de edição aqui
        console.log(`Editando ${cliente}`);
    };

    const handleRemove = (cliente) => {
        // Lógica de remoção aqui
        console.log(`Removendo ${cliente}`);
    };

    const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4', 'Cliente 5', 'Cliente 6'];

    return (
        <div className="container-fluid">
            <h4>Listagem de Clientes</h4>
            <div className="list-group">
                {clientes.map((cliente, index) => (
                    <div key={index} className="list-group-item list-group-item-action" style={{ backgroundColor: cliente === 'cliente 4' ? tema : '', position: 'relative' }}>
                        <a href="#" onClick={() => handleClienteClick(cliente)} style={{ textDecoration: 'none' }}>{cliente}</a>
                        {selectedCliente === cliente && (
                            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                <button className="btn btn-danger" onClick={() => handleRemove(cliente)}>Remover</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FormularioCadastroCliente({ tema }) {
    return (
        <div className="container-fluid">
            <h4>Cadastrar Cliente</h4>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

function FormularioEditarCliente({ tema }) {
    return (
        <div className="container-fluid">
            <br></br>
            <h4>Editar Cliente</h4>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Editar</button>
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
                    <ListaCliente tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioCadastroCliente tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioEditarCliente tema={tema} />
                </div>
            </div>
        </div>
    );
}
