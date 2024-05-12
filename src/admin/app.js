import logo from "./extensions/soteria-logo-round-small.png"

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Soteria Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Admin",

      "Auth.form.welcome.title": "Welcome to Soteria Admin",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
