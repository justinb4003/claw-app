# ClawApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

The is the front end portion of an ESP32 driven claw project: https://github.com/justinb4003/esp32_claw

There's very little to the application as it's just a slider bar from Angular Material in the main app component where the HttpClient is injected and we just make raw calls to a URL that will end up at the claw's ESP32 device.

In my particular case I deployed it to an Azure Static Web App (free and they tied to Github Actions incredibly easy) and pointed a custom domain at it. Given that Azure (and any sane host) requires SSL/TLS and Chrome (also any sane browser) won't silently make HTTP calls when the page loaded over HTTPS, so I stood up an Apache instance inside my firewall, forwarded 80 and 443 to it, setup a Let's Encrypt cert on it, and then made some mod_proxy rules that would forward everything coming to at https://home.justinbuist.com/claw/setpos/x to the ESP32 locally at http://192.168.x.y/setpos/x.

The app isn't happy about my device's current 204 return status. I would like to sort that out but, it works, and this is just a silly side project to make sure my plastic prints from the MDFBot worked together and that I had some kind of sensible servo driving it.


# Stock Angular instructions below
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
