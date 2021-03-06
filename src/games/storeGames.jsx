import Reflux from 'reflux';
import ReactjsUtils from 'reactjs-utils';
import ActionsGames from './actionsGames.jsx';

class StoreGames extends Reflux.Store
{
    constructor () {
		super();
		
		this.state = { games: [], currentGame: {} };		
		this.listenables = ActionsGames;		
	}
	
	onAddGame () {								
		const copyGames = this.state.games;

		copyGames.push({
			id: ReactjsUtils.generateGuid(),
			title: this.state.currentGame.title,
			desc: this.state.currentGame.desc
		});

		this.setState({games: copyGames});
	}

	onEditGame () {
		const copyGames = this.state.games;
		const currentObj = this.state.currentGame;
		const newArr = copyGames.map(obj => {	
			var _obj = obj;

			if (obj.id == currentObj.id) {				
				_obj.title = currentObj.title;
				_obj.desc = currentObj.desc;
			}

			return _obj;
		});				

		this.setState({games: newArr});
	}

	onDeleteGame () {		
		const copyGames = this.state.games;
		const currentId = this.state.currentGame.id;				
		const newArr = copyGames.filter(obj => obj.id != currentId);
		this.setState({games: newArr});
	}

	onSelectCurrentGame (game) {		
		game ? this.setState({currentGame: game}) : this.setState({currentGame: {id: 0, title: '', desc: ''}});
	}
}

export default StoreGames;