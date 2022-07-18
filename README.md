# acme-movie-generator

## Stack
<img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'/>
<img src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'/>
<img src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'/>
<img src='https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white'/>
<img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>

<a href='https://github.com/Ileriayo/markdown-badges'>Badges From</a>


## Quick Start
- npm install
- createdb acme_movies_db
- npm run start:dev

## Other Notes
- I am using a third party API to pull actual random movie names. Source of the api can be found <a href='https://github.com/k2maan/moviehut-random-movie-api'>Here</a>
- I could have used redux to store my state, but I wanted to get more of a feel for where my state and props should be if I didn't use a store.
- I chose to disable increment buttons when at the bottom or top value instead  of sending an alert because I believe it is a better user experience.
