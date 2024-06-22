#!/bin/bash

# Build Angular app
ng build --configuration production --base-href "https://yx-fan.github.io/travelExpenseWebPage/"

# Deploy Angular app to GitHub Pages
npx angular-cli-ghpages --dir=dist/travel-expense-webpage