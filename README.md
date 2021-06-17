# README
[![Codeship Status for RobPerez155/Wine-Mate](https://app.codeship.com/projects/f35ddb10-b89b-0138-8bf5-0ed9a3a19fca/status?branch=master)](https://app.codeship.com/projects/404816)

# Summary

[Wine mate](http://wine-mate.herokuapp.com/ "Visit the site") is a capstone project I created to bring together two of my favorite things, wine and traveling. The goal for this project is to have a platform where a user can plan a road trip through the United States to visit new vineyards. The user will also be able to see the read/add reviews for vineyards, and see the locations plotted across a map. 

Wine Mate utilizes Ruby on Rails on the backend, Javascript React on the frontend, Foundation and Scss for styling, and React Leaflet for plotting vineyard locations on the map.

# Screenshots of App
![WineMate HomePage](https://i.ibb.co/gWRL16h/Wine-Mate-Homepage.png "Homepage")

![WineMate Sign Up](https://i.ibb.co/t3GPfxd/Wine-Mate-Sign-Up-Page.png "Sign Up")

![WineMate Log In](https://i.ibb.co/cL8q5Rq/Wine-Mate-Log-In-Page.png "Log In")

![WineMate Varietals](https://i.ibb.co/VjNz4d2/Wine-Mate-Varietals-Page.png "Varietals")

# Built With
[Ruby on Rails](https://guides.rubyonrails.org/ "Ruby on Rails Documentation")

[React.js](https://reactjs.org/docs/getting-started.html "React.js Documentation")

[PostgreSQL](https://www.postgresql.org/docs/12/index.html "PostgreSQL Documentation")


# Getting Started
The following versions were used to build this project:

- React 17.0.1
- Ruby 2.6.5
- Rails 5.2.4.3
- PostgreSQL 12.3

#### Checkout the Repository
```
git clone https://github.com/RobPerez155/Wine-Mate
```

#### Create and Setup Database
```
bundle exec rake db:setup
```

#### Start Rails Server and Webpack Server
```
bundle exec rails s
yarn run start
```

#### Use http://localhost:3000 to Wine-Mate App
---
## To-Do list - Software is never finished.
- The next item that needs to be addressed is a bug with the React Leaflet. Currently, the map is cut up into boxes and is jumbled across the webpage. 

## Future features to be implemented
- Testing
- I would like to get access to an API with data on American vineyards and their wine selections. 
- Expand this program to French, Spanish, Italian, NZ wine regions.
- Chat feature where questions can be left for vintners.
- Turn this into a mobile ready app.
- An internal navigation system that can be used offline.

## Contributions

If you would like to contribute you can reach me at robert.perez.psirho@gmail.com and would be happy to go into further detail about the project.

>Ad Astra Per Aspera
