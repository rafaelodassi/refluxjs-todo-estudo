import React, { Component } from 'react';
import Reflux from 'reflux';
import ActionsGames from './actionsGames.jsx';
import StoreGames from './storeGames.jsx';

class ComponentGames extends Reflux.Component {
    constructor(props) {
		super(props);
		this.store = StoreGames;        
	}

    componentDidMount() {        
        $('.modal').modal({
            ready: function(modal, trigger) {                                
                Materialize.updateTextFields();   
            }
        });    
    }

    /*show modal add novo game*/
    showModalAddGame () {
        ActionsGames.selectCurrentGame();

        this.refs.inputTitle.value = "";
        this.refs.inputDesc.value = "";        

        $('#modal-add-game').modal('open');
    }

    /*acoes dos botoes dos cards*/
    showModalEditGame (e, game) {
        e.preventDefault();
        ActionsGames.selectCurrentGame(game);

        this.refs.inputTitle.value = game.title;
        this.refs.inputDesc.value = game.desc;

        $('#modal-add-game').modal('open');                            
    }

    showModalDeleteGame (e, game) {
        e.preventDefault();
        $('#modal-delete-game').modal('open');

        ActionsGames.selectCurrentGame(game);
    }

    /*acoes dos botoes dentro da modal de deletar game*/
    cancelDeleteGame (e) {
        e.preventDefault();
    }

    deleteGame (e) {
        e.preventDefault();
        ActionsGames.deleteGame();        
    }

    /*acoes dos botoes dentro da modal de adicionar/editar game*/
    cancelAddGame (e) {
        e.preventDefault();
    }

    addGame (e) {
        e.preventDefault();        

        const _currentGame = this.state.currentGame;
        _currentGame.title = this.refs.inputTitle.value;
        _currentGame.desc = this.refs.inputDesc.value;
        ActionsGames.selectCurrentGame(_currentGame);

        ActionsGames.addGame();
    }

    editGame (e) {
        e.preventDefault();        

        const _currentGame = this.state.currentGame;
        _currentGame.title = this.refs.inputTitle.value;
        _currentGame.desc = this.refs.inputDesc.value;
        ActionsGames.selectCurrentGame(_currentGame);
        
        ActionsGames.editGame();
    }    

    render(){        
        return (
            <div>                
                <nav className="nav-bread">
                    <div className="container nav-wrapper">
                        <div className="col s12">
                            <a href="/" className="breadcrumb">Home</a>                            
                            <a href="/games" className="breadcrumb">Listagem de Games</a>                            
                        </div>
                    </div>
                </nav>

                <div id="games-component" className="container">
                    <h4>Listagem de Games</h4>
                    
                    <a className="waves-effect waves-light btn btn-new-game" onClick={ () => this.showModalAddGame() }><i className="material-icons left">library_add</i>Cadastrar Game</a>                    
                    
                    {this.state.games.length == 0 ? (
                        <p className="notfound-game">Nenhum game cadastrado.</p>
                    ) : (
                        this.state.games.map((game, index) => (                        
                            <div id={game.id} key={game.id} className="row">
                                <div className="col s12 m12">
                                    <div className="card">
                                        <div className="card-content">
                                            <span className="card-title">{game.title}</span>
                                            <p>{game.desc}</p>
                                        </div>
                                        <div className="card-action">
                                            <a href="#" onClick={ (e) => this.showModalEditGame(e, game) }>Editar</a>
                                            <a href="#" onClick={ (e) => this.showModalDeleteGame(e, game) }>Deletar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))                   
                    )}                    
                </div>
                
                <div id="modal-add-game" className="modal">
                    <div className="modal-content">                        
                        {this.state.currentGame.id == 0 ? (
                            <h4>Cadastrar novo game</h4>                        
                        ) : (
                            <h4>Editar game '{this.state.currentGame.title}'</h4>
                        )}

                        <div className="form-add-game">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="game-title" type="text" ref="inputTitle" />
                                    <label htmlFor="game-title">Título do Game</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="game-desc" type="text" ref="inputDesc" />
                                    <label htmlFor="game-desc">Descrição do Game</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">                        
                        <a href="#" className=" modal-action modal-close waves-effect waves-light btn-flat" onClick={ (e) => this.cancelAddGame(e) }>Cancelar</a>
                        
                        {this.state.currentGame.id == 0 ? (
                            <a href="#" className=" modal-action modal-close waves-effect waves-light btn-flat" onClick={ (e) => this.addGame(e) }>Cadastrar</a>                            
                        ) : (
                            <a href="#" className=" modal-action modal-close waves-effect waves-light btn-flat" onClick={ (e) => this.editGame(e) }>Editar</a>                        
                        )}
                    </div>
                </div>

                <div id="modal-delete-game" className="modal">
                    <div className="modal-content">
                        <h4>Deseja mesmo deletar o game '{this.state.currentGame.title}'?</h4>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className=" modal-action modal-close waves-effect waves-light btn-flat" onClick={ (e) => this.cancelDeleteGame(e) }>Cancelar</a>
                        <a href="#" className=" modal-action modal-close waves-effect waves-light btn-flat" onClick={ (e) => this.deleteGame(e) }>Deletar</a>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentGames