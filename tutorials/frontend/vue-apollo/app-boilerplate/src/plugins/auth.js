import authService from "../auth/authService";

export default {
  install(app) {
    app.config.globalProperties.$auth = authService;

    app.mixin({
      created() {
        if (this.handleLoginEvent) {
          authService.addListener("loginEvent", this.handleLoginEvent);
        }
      },

      unmounted() {
        if (this.handleLoginEvent) {
          authService.removeListener("loginEvent", this.handleLoginEvent);
        }
      }
    });
  }
};
