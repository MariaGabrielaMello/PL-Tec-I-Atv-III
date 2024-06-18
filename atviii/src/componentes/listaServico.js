/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function ListaServico({ tema }) {
    const [selectedServico, setSelectedservico] = useState(null);

    const handleServicoClick = (servico) => {
        setSelectedservico(servico === selectedServico ? null : servico);
    };

    const handleEdit = (servico) => {
        // Lógica de edição aqui
        console.log(`Editando ${servico}`);
    };

    const handleRemove = (servico) => {
        // Lógica de remoção aqui
        console.log(`Removendo ${servico}`);
    };

    const servicos = ['Servico 1', 'Servico 2', 'Servico 3', 'Servico 4', 'Servico 5', 'Servico 6'];

    return (
        <div className="container-fluid">
            <h4>Listagem de Serviços</h4>
            <div className="list-group">
                {servicos.map((servico, index) => (
                    <div key={index} className="list-group-item list-group-item-action" style={{ backgroundColor: servico === 'produto 4' ? tema : '', position: 'relative' }}>
                        <a href="#" onClick={() => handleServicoClick(servico)} style={{ textDecoration: 'none' }}>{servico}</a>
                        {selectedServico === servico && (
                            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                <button className="btn btn-success" onClick={() => handleEdit(servico)} style={{ marginRight: '5px' }}>Editar</button>
                                <button className="btn btn-danger" onClick={() => handleRemove(servico)}>Remover</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FormularioCadastroServico({ tema }) {
    return (
        <div className="container-fluid">
            <h4>Cadastrar Servico</h4>
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

function FormularioEditarServico({ tema }) {
    return (
        <div className="container-fluid">
            <br></br>
            <h4>Editar Servico</h4>
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
                    <ListaServico tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioCadastroServico tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioEditarServico tema={tema} />
                </div>
            </div>
        </div>
    );
}
