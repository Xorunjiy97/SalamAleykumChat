class Controller {
  constructor(authPage, chatPage) {
      this.authPage = authPage;
      this.chatPage = chatPage;

      store.subscribe(this.getCurrentPage);
  }

  init = () => {
    this.authPage.init();
  }; 


  getCurrentPage = () => {
    const { view } = store.getState();
      if(view.page == 'Page2') {
        this.openChatPage(); 
      }else{
        this.openAuthPage();
      }
  }

  openChatPage = () => {
    this.chatPage.init();
  }

  openAuthPage = () => {
    this.authPage.init();
  }
 
}
  
export default Controller;
  