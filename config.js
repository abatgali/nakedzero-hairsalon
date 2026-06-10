import themes from "daisyui/src/theming/themes.js";

const config = {
  // REQUIRED
  appName: "NakedzerO Hair Salon",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
  "NakedzerO Hair Salon is a family-run salon on US 31 S in South Indianapolis, serving Greenwood and the south side since 2019. Haircuts, color, perms, straightening, and facial treatments for men and women.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "www.nakedzerosalon.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mail",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `NakedZerO <noreply@mail.nakedzerosalon.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Ryang at NakedzerO <ryang@mail.nakedzerosalon.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "ryang@mail.nakedzerosalon.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "contact@vvault.us",
    // forwardRepliesTo: "muilesam4muilesam@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "forest",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). It takes the primary color from the DaisyUI theme above. HEX only.
    main: themes[`[data-theme=forest]`]["primary"],
  },
};

export default config;
