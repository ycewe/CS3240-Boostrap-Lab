# CS3240 bootstrap Lab
A simple portfolio with HTML5, CSS3, jQuery with Bootstrap 4 styling.

## First Installation
1. Open the folder and at the root directory, run `npm install` in the command line
2. Run `npm start`
3. Open the browser and go to the page as indicated on the terminal

## Miscellaneous
1. Main page is index.html. This is a Single Page Application.
2. The webpage is a dance portfolio. It records most of my dance achievements and performances to date. Perhaps, in the future it point of contact as well as publicity for a part-time career.
3. Bootstrap and jQuery are downloaded files and are located in the css folder and scripts respectively. Form validation is done in script.js and the primary css code is in main.css. Below is the directory that shows _self-written code_:
   ```
   ├── app
   │   ├── scripts
   │   │   ├── script.js
   │   ├── resources
   │   │   ├── images
   │   │   ├── css
   │   │   │   ├── main.css
   │   ├── index.html
   │   ├── contact.html
   │   ├── portfolio.html
   │   ├── home.html
   ├── server.js
   ├── README.md
   ```
4. I do not have any specific reference for my webpage.

## Features
* Grid system is used in the portfolio for structuring.
* Image on portfolio is hidden and navbar is minimize for responsive design.
* Base css is used commonly with home page title and subtitle as examples.
* Several bootstrap components are used including form, navbar, buttons and alert.
* Most Javascript items have removed from Bootstrap 4, however the webpage utilizes programmatic API (changing nav-pills classes) and data attributes (trigger alert on submit form).
* Form validation is done on the contact form.
* jQuery effects included are the transition effects between page.
* There is also routing for the SPA, therefore usage of URLs and back/forward button is enabled
