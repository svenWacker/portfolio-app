# Getting Started with Translate To Morse App

This project was made by hand [Run Portfolio App](http://svenWacker.github.io/portfolio-app).

## Prework

### Console work

npx create-react-app portfolio-app

#### go to repository

npm i node-sass gh-pages

### Deleting unnecessary files and adding code

editing package.json with:
"homepage": "http://svenWacker.github.io/portfolio-app",
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

## Available Scripts

In the project directory, you can run:

## Initial commit, updating and connecting GitHub

git remote add origin https://github.com/svenWacker/portfolio-app.git
git branch -M main
git push -u origin main

git add . && git commit -m 'initial commit and copy to github'
git push

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Builds the app for deploying to gh-pages

### `adding packages`

npm install react-router-dom
npm install react-icons --save
npm install react-bootstrap bootstrap@4.6.0
