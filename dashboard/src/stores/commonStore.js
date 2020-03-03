import { observable, action, decorate } from "mobx";

class CommonStore {
  /**
   * Page name
   */
  pageName = "";
  setPageName = pageName => {
    this.pageName = pageName;
  };
  /**
   * App token
   */
  token = "";
  setToken = token => {
    this.token = token;
  };
}

decorate(CommonStore, {
  pageName: observable,
  setPageName: action,

  token: observable,
  setToken: action
});

export default new CommonStore();
