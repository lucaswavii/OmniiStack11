import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register() {

    const [name, setName ]          = useState('');
    const [email, setEmail ]        = useState('');
    const [whatsapp, setWhatsapp ]  = useState('');
    const [city, setCity ]          = useState('');
    const [uf, setUf ]              = useState('');
    
    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso : ${ response.data.id}` );
            
            history.push('/');

        
        } catch (error) {
            alert(`Erro ao tentar cadastrar um ONG tente novamente.` );
            
        }
        
    }
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Registre-se</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color='#E02041' />
                        Voltar.
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value)}    
                    />
                    <input 
                        type="email" 
                        placeholder="Informe seu e-mail."
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        placeholder="Informe o Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Informe sua cidade." 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="Uf" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        
                        />                        
                    </div>
                    <button className="button" type="submit">Registrar</button>
                    
                </form>
            </div>
        </div>
    );
}