import './style.less';
import rootReducer from './root/rootReducer';
import View from './modules/View';
import Model from './model/Model';
import Controller from './modules/controller/Controller';
const root = document.getElementById('root');

function init() {
  const store = createStore(rootReducer);
  const autorise = new Autorisation();
  const autoriseController = new AutoriseController(autorise);

  window.store = store;

  root.append(autorise.createAvtorizationWindow());

  autoriseController.init();
  controller.init();
}

init();