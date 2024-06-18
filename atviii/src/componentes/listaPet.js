/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function ListaPet({ tema }) {
    const [selectedPet, setSelectedPet] = useState(null);

    const handlePetClick = (pet) => {
        setSelectedPet(pet === selectedPet ? null : pet);
    };

    const handleEdit = (pet) => {
        // Lógica de edição aqui
        console.log(`Editando ${pet}`);
    };

    const handleRemove = (pet) => {
        // Lógica de remoção aqui
        console.log(`Removendo ${pet}`);
    };

    const pets = ['Pet 1', 'Pet 2', 'Pet 3', 'Pet 4', 'Pet 5', 'Pet 6'];

    return (
        <div className="container-fluid">
            <h4>Listagem de Pets</h4>
            <div className="list-group">
                {pets.map((pet, index) => (
                    <div key={index} className="list-group-item list-group-item-action" style={{ backgroundColor: pet === 'Pet 4' ? tema : '', position: 'relative' }}>
                        <a href="#" onClick={() => handlePetClick(pet)} style={{ textDecoration: 'none' }}>{pet}</a>
                        {selectedPet === pet && (
                            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                
                                <button className="btn btn-danger" onClick={() => handleRemove(pet)}>Remover</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function FormularioCadastroPet({ tema }) {
    return (
        <div className="container-fluid">
            <h4>Cadastrar Pet</h4>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do tutor" aria-label="CPF do tutor" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}></span>
                    <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}></span>
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}></span>
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

function FormularioEditarPet({ tema }) {
    return (
        <div className="container-fluid">
            <h4>Editar Pet</h4>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do tutor" aria-label="CPF do tutor" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}></span>
                    <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}></span>
                    <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}></span>
                    <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
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
                    <ListaPet tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioCadastroPet tema={tema} />
                </div>
                <div className="col-md-6">
                    <FormularioEditarPet tema={tema} />
                </div>
            </div>
        </div>
    );
}
