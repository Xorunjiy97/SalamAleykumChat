class Controller {
  constructor(authPage, chatPage) {
      this.authPage = authPage;
      this.chatPage = chatPage;
      this.currPage = "Page1";

      store.subscribe(this.getCurrentPage);
  }

  init = () => {
    this.authPage.init();
  }; 


  getCurrentPage = () => {
    const { view } = store.getState();
    console.log(this.currPage);
    console.log(view.page);
    if(view.page != this.currPage){
      this.currPage = view.page;
      this.switchPage(view.page);
    }
  }

  switchPage = page => {
    if(page === "Page2") {
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
  