<div align="center">

  <img src="./assets/logo.png" width="200px">

</div>

# cra-template-antdride

This is the custom template for [Create React App](https://github.com/facebook/create-react-app).

This is inspired by the following

- [cra-template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript)
- [cra-template-must-have-libraries](https://github.com/EliEladElrom/cra-template-must-have-libraries)

## Start Template

### npx

```sh
npx create-react-app my-app --template antdride
```

### npm

```sh
npm init react-app my-app --template antdride
```

### yarn

```sh
yarn create react-app my-app --template antdride
```

## In this template

| Stack         | Name                                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Preprocessors | Less                                                                                                           |
| CSS Framework | Antd                                                                                                           |
| Router        | React Router                                                                                                   |
| CRA-override  | [craco](https://github.com/gsoft-inc/craco)                                                                    |
| Datetime      | [moment.js](https://momentjs.com/)                                                                             |
| utils         | [lodash](https://lodash.com/)                                                                                  |
| fp-utils      | [ramda.js](https://ramdajs.com/)                                                                               |
| SEO support   | [react-snap](https://github.com/stereobooster/react-snap), [react-helmet](https://github.com/nfl/react-helmet) |
| Format & Lint | ESLint & Prettier                                                                                              |

## This template weakness

_It is optimized for vscode._
Therefore, other users such as vim will be inconvenient to use.

_SEO support is incomplete._
The page linked to the dynamic pathname is not created as an SEO html file.

> ex) post/:id

If you would like to apply in this case, please check the services below.

- [prerender.io](https://prerender.io)

## For more information

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
