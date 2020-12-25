import './style.less';
import rootReducer from './root/rootReducer';
import View from './modules/View';
import Model from './model/Model';
import Controller from './modules/controller/Controller';

function init() {
  const store = createStore(rootReducer);
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  window.store = store;

  controller.init();
}

init();