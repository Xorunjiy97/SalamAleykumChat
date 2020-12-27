import './style.less';
import Controller from './modules/Controller';
import ChatWindow from './modules/chatWindow/chatWindow';
import rootReducer from './root/rootReducer';
import Autorisation from './modules/autorize/autorisation';
import ChatController from './modules/chatWindow/chatController';
import { createStore } from 'redux';
import AutoriseController from './modules/autorize/autoriseController';

function init() {
  const store = createStore(rootReducer);
  window.store = store;

  const autorise = new Autorisation();
  const autoriseController = new AutoriseController(autorise);
  const chatWindow = new ChatWindow();
  const chatWindowController = new ChatController(chatWindow);
  const controller = new Controller(autoriseController, chatWindowController);

  controller.init();
}

init();