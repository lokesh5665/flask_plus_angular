
# Notifications

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

---

## Building

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

---

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

---

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

---

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Dependency resolutions

### Why we use `yarn` with `resolutions`

This project depends on `@angular/build` which internally uses `beasties`. That package pulls in `css-select@5`, which causes build failures (missing `compile.js`).
To force compatibility, we explicitly enforce `css-select@4.3.0` using `yarn` resolutions.

Our `package.json` includes:

```json
"resolutions": {
  "css-select": "4.3.0"
}
```

---

### Installing dependencies

Always use `yarn` to install to ensure the resolution is respected:

```bash
yarn install
```

---

### Verifying dependency versions

After installing, you can confirm the enforced version by running:

```bash
yarn why css-select
```

This should show only `css-select@4.3.0`.

---

### Notes on using `npm`

The `npm` client does **not support nested `resolutions`**. To avoid problems with nested dependencies that require `css-select`, stick with `yarn`.

---

✅ **Done.** Happy coding!
