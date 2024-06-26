#!/bin/bash

# Build Angular app
# ng build --configuration production --base-href "https://yx-fan.github.io/travelExpenseWebPage/" // When deploying to GitHub Pages using a specific project name
ng build --configuration production --base-href "/"

# Copy CNAME file to dist folder
cp CNAME dist/travel-expense-webpage/CNAME

# Deploy Angular app to GitHub Pages
npx angular-cli-ghpages --dir=dist/travel-expense-webpage