# EcoStar
###### <b>A collaborative development by:  [Arjun Sahjpaul](https://github.com/ffluxpavillion) / [Michael S](https://github.com/mikesdc) / [Aman Damani](https://github.com/amandamani) / [Bilal Hassan](https://github.com/BilalHassen)</b>

As part of a comprehensive Industry Project at BrainStation, our cross-disciplinary team has developed EcoStar, a digital platform engineered to encourage and reward eco-friendly transportation choices. This initiative supports societal shifts towards clean energy by providing a tool to measure and improve individual carbon footprints, reduce emissions, and mitigate waste.

## Problem Statement 
Our world’s reliance on non-renewable energy sources has led to significant environmental challenges, including pollution, habitat loss, public health issues, and global warming emissions. Addressing the urgent need for societal transformation, we asked: How might we create a digital solution that not only supports but actively promotes eco-friendly systems with a tangible impact on clean energy consumption?

## Solution
EcoStar is the answer to this complex problem, a digital platform that motivates individuals to become agents of change in the fight against climate change. Through gamification, real-time tracking, and a rewards system, EcoStar makes it engaging and beneficial for users to choose sustainable transport options. Our platform not only quantifies individual contributions to a healthier planet but also fosters a community that values and practices sustainable living. The app’s ultimate goal is to cultivate a culture of sustainability that extends beyond the digital space into real-world actions. EcoStar is more than an app; it's a movement towards a greener tomorrow.

## Installation


#### Ensure you are using Node v20.9.0


#### Server:
- VSCode/terminal: run `npm install` in the server directory
- VSCode/terminal: run `npm run server` in the server directory

#### Client:
- VSCode/terminal: run `npm install` in the client directory
- VSCode/terminal: run `npm start` in the client directory

#### Database Setup:
To set up local MySQL database using the Knex migration and seed files:

##### 1. In VS Code/IDE, navigate to the server folder. Rename the `.env.sample` file to `.env`.

##### 2. Locate the following fields, and replace the initial values with your MySQL username and password 
`DB_LOCAL_USER=`
<br />
`DB_LOCAL_PASSWORD=`


##### 3. Create "ecostar" database in your MySQL environment:
  - MySQL:  `CREATE DATABASE ecostar;`

##### 4. Run migration then run seed:
  - Terminal: `npx knex migrate:latest` in the server directory
  - Terminal: `npx knex seed:run` in the server directory


## Screenshots:
<img src ="https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Header-Hero.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Join-Now.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_CO2-Modal.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Calculator-Logged-Out.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Calculator-Logged-In-Points.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Footer.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_EcoPoints.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Leaderboard.png?raw=true">
<img src = "https://github.com/ffluxpavillion/EcoStar/blob/main/client/src/assets/screenshots/EcoStar_Partnerships.png?raw=true">


## Other Resources

Figma File:
https://www.figma.com/file/aNG7yFEEZpAHkkOgXZ5H9v/Untitled-(Copy)?type=design&node-id=0-1&mode=design

https://docs.google.com/presentation/d/1L9Koqgl8kXTcdNtpzR1L3I0IYcg5kRFPi2gxy-2lEbk/edit#slide=id.g26560d9bab0_0_545

