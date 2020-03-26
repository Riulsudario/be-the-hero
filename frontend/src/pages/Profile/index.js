import React, { useState,useEffect } from 'react';
import {Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './style.css';

export default function Profile(){

    const [incidents, setInsidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const history = useHistory();

    useEffect(()=> {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then( response => {
            setInsidents(response.data.incidents);
        })
    }, [ongId]);


    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,
                }
            });
            setInsidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert('Erro ao deletar');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push("/");
      }
    
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem-vinda, {ongName}</span>

                <Link to="/incidents/new" className="button" > Cadastrar novo caso</Link>

                <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
              {incidents.map(incidents => (
                    <li key={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>

                    <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
              ))}
            </ul>
        </div>
    );
}