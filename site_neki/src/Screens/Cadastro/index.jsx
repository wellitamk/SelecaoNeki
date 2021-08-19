import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Style } from './style';
import InputMask from 'react-input-mask';

export class Cadastro extends Component{

        constructor(props){
            super(props);
            this.state = {
                nome: '',
                cnpj: '',
                email: '',
                telefone: '',    
                senha: '',
                confsenha: '',
                token: '',
                error: ''

            }

            this.trocaNome = this.trocaNome.bind(this);
            this.trocaEmail = this.trocaEmail.bind(this);
            this.trocaCNPJ = this.trocaCNPJ.bind(this);
            this.trocaTelefone = this.trocaTelefone.bind(this);
            this.trocaSenha = this.trocaSenha.bind(this);
            this.trocaConfirmacaoSenha = this.trocaConfirmacaoSenha.bind(this);
            this.trocaToken = this.trocaToken.bind(this);
            this.cadastrar = this.cadastrar.bind(this);
        }

        trocaNome(e){
            let valorDigitado = e.target.value;
            this.setState({nome: valorDigitado});
        }

        trocaEmail(e){
            let valorDigitado = e.target.value;
            this.setState({email: valorDigitado});
        }

        trocaCNPJ(e){
            let valorDigitado = e.target.value;
            this.setState({cnpj: valorDigitado});
        }

        trocaTelefone(e){
            let valorDigitado = e.target.value;
            this.setState({telefone: valorDigitado});
        }

        trocaSenha(e){
            let valorDigitado = e.target.value;
            this.setState({senha: valorDigitado});
        }

        trocaConfirmacaoSenha(e){
            let valorDigitado = e.target.value;
            this.setState({confsenha: valorDigitado});
        }

       trocaToken(e){
            let valorDigitado = e.target.value;
            this.setState({token: valorDigitado});
        }

       cadastrar(event){

           const{nome, cnpj, email, telefone, senha, confsenha, token} = this.state;

            if (nome !== '' && cnpj !== '' && email !== '' && telefone !== '' && senha !== '' && confsenha !== '' && token !== ''){

                //goback() login ou home!!
               alert('Você foi cadastrado! Verifique seu email para confirmar sua conta!');

           }else{
                alert("Algum campo do formulário não foi preenchido!");
            }
            
            event.preventDefault();
        }

            render(){
                return(
                    <div>
                        
                    <Style>
                        
                        <form onSubmit={this.cadastrar}>
                        <h1>Cadastro</h1>
                            
                            <input type="text" name="nome" value={this.state.nome}
                            onChange={this.trocaNome} placeholder="Nome da empresa"/> <br/>
                            
                            <InputMask mask="99.999.999/0009-99" name="cnpj" value={this.state.cnpj}
                            onChange={this.trocaCNPJ} placeholder="CNPJ"/> <br/>
                            
                            <input type="text" name="email" value={this.state.email}
                            onChange={this.trocaEmail} placeholder="Email do responsável"/> <br/>
                            
                            <InputMask mask="(99)9999-9999" name="phone"value={this.state.telefone}
                            onChange={this.trocaTelefone} placeholder="Telefone comercial com DDD"/> <br/>
                            
                            <input type="password" name="senha" value={this.state.senha}
                            onChange={this.trocaSenha} placeholder="Senha"/> <br/>
                           
                            <input type="password" name="senhaconfirm" value={this.state.confsenha}
                            onChange={this.trocaConfirmacaoSenha} placeholder="Confirme sua senha"/> <br/>
                            
                            <InputMask mask="99999" name="token" value={this.state.token}
                            onChange={this.trocaToken} placeholder="Token fornecido pela Ktec"/> <br/>

                            <button type="submit">Cadastrar</button>
                            {/* {this.state.error && <p>{this.state.error}</p>} */}
                            <Link to="/login">Já tem uma conta? Entre</Link>
                        </form>
                        </Style>
                    </div>
                );
            };
        };