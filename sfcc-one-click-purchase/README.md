# Salesforce Commerce Cloud (SFCC) One-Click Purchase for PWA Kit

One-Click Purchase for Salesforce Commerce Cloud (SFCC) is a comprehensive package that adds essential functionalities for e-commerce. This plugin allows customers to quickly buy standard products by pressing one button int the Product Listing Page or the Product Detail Page. Customers will be able to go through a quick checkout process in a modal and buy the product they need.

## Installation

1. The One-Click Purchase for Salesforce Commerce Cloud (SFCC) is also designed to integrate with Salesforce PWA Kit. To use this package, you need to create a local project using the React Retail App template. Run the following command to start a new project:

```
npx @salesforce/pwa-kit-create-app@latest
```

Remember to select the option to use the ***Retail app with your own Commerce Cloud instance*** and choose '**Yes**' when asked if you want to take advantage of template extensibility. For additional information on creating and using the React Retail application, please refer to the documentation page of [Salesforce Developer](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html)

2. PWA Kit requires you to set up a public SLAS client ID for your PWA Kit application. For this step, follow the instructions in the guide Salesforce Set Up API Access [Set up Salesforce API access](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/setting-up-api-access.html)

3. The modifications in the PWA Kit apply to the extensibility of the template. If you have enabled extensibility, as indicated in the first step of the prerequisites section, your project should be ready to use the base template for this integration. To install the base template, run the following command:

```
npm i @appspringtechsas/sfcc-one-click-purchase
```

4. To make your project extensible from SFCC One-Click Purchase, you need to go to your **package.json** file and there, you will find a section called **ccExtensibility**. Modify the value of the ***extends*** property, replace the value with *@appspringtechsas/sfcc-one-click-purchase* and save the changes.

6. The Routes file also needs modifications, as the routes are imported from Salesforce Retail React App by default. In all imports, replace the parts containing @salesforce/retail-react-app/ with @appspringtechsas/sfcc-one-click-purchase/. This will cause the routes to be imported from SFCC One-Click Purchase template

7. After modifying the **package.json** of your project, you must go to **config/default.js** and add the following entry in proxyConfigs:

```
    {
        host: '<Your-Realm-ID>.dx.commercecloud.salesforce.com',
        path: 'controller'
    }
```

> [!NOTE]
> This new proxy configuration is required for calls to the SFRA driver provided by the package

8. Execute the commands ``npm i`` and then execute ``npm run build``

9. An SFRA Plugin is also required for the integration package to work. The plugin is located inside the **sfra-cartridges/** folder. For more information on how to install the *one_click_purchase* plugin, please refer to the README file of the cartridge

10. After following the steps, you should be ready to use SFCC One-Click Purchase