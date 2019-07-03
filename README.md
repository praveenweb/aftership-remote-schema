# aftership-remote-schema

[Aftership](https://www.aftership.com/) is a tracking solution for e-Commerce businesses supporting tracking and proactive delivery updates for around 555 couriers worldwide.

## Adding Aftership as Remote Schema

- Get the Aftership API Key by visting the settings page of the admin dashboard. [https://admin.aftership.com/settings/api-keys](https://admin.aftership.com/settings/api-keys).
- Set the API key as `AFTERSHIP_API_KEY` environment variable.
- This custom resolver is used to track a single tracking number and that of the courier `Fedex`. Refer to API documentation for integration with other companies and customisation.

## Aftership API Documentation

[API Documentation](https://docs.aftership.com/api/4/trackings/get-trackings-slug-tracking_number) for version 4

## Deploy with Glitch

1. Click the following button to edit on glitch

   [![glitch-deploy-button](https://raw.githubusercontent.com/hasura/graphql-engine/master/community/boilerplates/auth-webhooks/nodejs-express/assets/deploy-glitch.png)](http://glitch.com/edit/#!/import/github/praveenweb/aftership-remote-schema)

2. Add the following environment variables in the `.env` file on glitch.

   ```env
   AFTERSHIP_API_KEY=
   ```

## Running Locally

```bash
npm install
npm start
```
