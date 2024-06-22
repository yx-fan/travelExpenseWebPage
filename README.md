# TravelExpenseWebpage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Prerequisites

- Node.js and npm installed
- Angular CLI installed globally (`npm install -g @angular/cli`)
- Angular CLI GitHub Pages tool installed globally (`npm install -g angular-cli-ghpages`)

## Development server

### Install Dependencies

To install the dependencies, run:

```sh
npm install
```

### Serve Locally

To serve the application locally, run:
```sh
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build and Deploy

To build the application for production with the base href set to `/`, run:
```sh
ng build --configuration production --base-href "/"
```

### Ensure `CNAME` File Exists

Make sure there is a `CNAME` file in the project root with the following content:
```sh
travelexpense.pro
```

### Deploy to GitHub Pages

To deploy the built application to GitHub Pages, run:
```sh
cp CNAME dist/travel-expense-webpage/CNAME
npx angular-cli-ghpages --dir=dist/travel-expense-webpage
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## GitHub Pages Settings

In your GitHub repository, navigate to `Settings` -> `Pages` and set the custom domain to `travelexpense.pro`. Make sure to enable `Enforce HTTPS`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Additional Notes
- The `CNAME` file must be included in the build output directory (`dist/travel-expense-webpage`) to preserve the custom domain settings.
- After deploying, you may need to wait a few minutes for the DNS changes to propagate.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.