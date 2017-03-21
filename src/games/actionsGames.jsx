import Reflux from 'reflux';

const ActionsGames = Reflux.createActions([
	'addGame',
	'editGame',
	'deleteGame',
	'selectCurrentGame'
]);

export default ActionsGames;