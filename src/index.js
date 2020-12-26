import './style.less';
import rootReducer from './root/rootReducer';
import Autorisation from '/modules/autorize/autorisation';
import ChatWindow from './modules/chatWindow/chatWindow';
import AutoriseController from '/modules/autorize/autoriseController';
import ChatController from './modules/chatWindow/chatController';
const root = document.getElementById('root');

function init() {
  const store = createStore(rootReducer);
  const autorise = new Autorisation();
  const autoriseController = new AutoriseController(autorise);
  //const chatWindow = new ChatWindow();
  //const chatWindowController = new ChatController(chatWindow);

  window.store = store;

  root.append(autorise.createAvtorizationWindow());
  //root.append(autorise.createMessageWindow());

  autoriseController.init();
  //chatWindowController.init();
}

init();