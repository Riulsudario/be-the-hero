import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){

    const [ong_id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e)
    {
        e.preventDefault();

        try{
            const  response = await api.post('sessions', { ong_id });
            

            localStorage.setItem('ongId', ong_id);
            localStorage.setItem('ongName', response.data.ong.name);
            console.log("deu certo");

            history.push('/profile'); 
        } catch(err){
            alert('erro');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form onSubmit={handleLogon}>
                <h1>Faça seu logon</h1>

                <input placeholder="Sua ID"
                value={ong_id}
                onChange={e => setId(e.target.value)}
                />

                <button className="button" type="submit">Entrar</button>

                <Link to="/register">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </form>

            </section>
            <img src={heroesImg} alt=""/>
        </div>
    );
}