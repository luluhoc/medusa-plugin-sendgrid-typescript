# SendGrid

This is a modified version of the original Sendgrid plugin as the medusa team is not responsive to my pull request

This plugin is rewritten in typescript and added some extra features.

Handle sending emails to customers related to orders, restock notifications, users, or custom events.

[SendGrid Plugin Documentation](https://docs.medusajs.com/plugins/notifications/sendgrid) | [Medusa Website](https://medusajs.com) | [Medusa Repository](https://github.com/medusajs/medusa)

## Features

- Send emails when an event related to orders, restock notifications, or users is triggered.
- Use dynamic templates in SendGrid to build the emails to be sent.
- Send emails with SendGrid for custom events.

Extra features:

- BCC to a specific email addresses when order is placed if you want to send yourself the order and for example TrustPilot
- Typescript support
- Custom subject with dynamic data

---

## Prerequisites

- [Medusa backend](https://docs.medusajs.com/development/backend/install)
- [SendGrid account](https://signup.sendgrid.com/)

---

## How to Install

1\. Run the following command in the directory of the Medusa backend:

  ```bash
  npm install medusa-plugin-sendgrid-typescript
  ```

  ```bash
  yarn add medusa-plugin-sendgrid-typescript
  ```

2\. Set the following environment variable in `.env`:

  ```bash
  SENDGRID_API_KEY=<API_KEY>
  SENDGRID_FROM=<SEND_FROM_EMAIL>
  # IDs for different email templates
  SENDGRID_ORDER_PLACED_ID=<ORDER_PLACED_TEMPLATE_ID> # example
  ```

3\. In `medusa-config.js` add the following at the end of the `plugins` array:

  ```ts
  const plugins = [
    // ...,
    {
      resolve: `medusa-plugin-sendgrid-typescript`,
      /** @type {import('medusa-plugin-sendgrid-typescript').PluginOptions} */
      options: {
        api_key: process.env.SENDGRID_API_KEY,
        from: process.env.SENDGRID_FROM,
        templates: {
          order_placed_template: {
            id: process.env.SENDGRID_ORDER_PLACED_ID,
            // You can add dynamic data to the template by using {variable_name}
            subject: "Thank you for your order #{display_id}!",
          },
        },
        localization: {
          "de-DE": { // locale key
            order_placed_template: {
              subject: "Danke für Ihre Bestellung #{display_id}!",
              id: process.env.SENDGRID_ORDER_PLACED_ID,
            }
          },
        },
      },
    },
  ]
  ```

---

## Test the Plugin

1\. Run the following command in the directory of the Medusa backend to run the backend:

  ```bash
  npm run start
  ```

2\. Place an order using a storefront or the [Store APIs](https://docs.medusajs.com/api/store). You should receive a confirmation email.

---

## Additional Resources

- [SendGrid Plugin Documentation](https://docs.medusajs.com/plugins/notifications/sendgrid)
