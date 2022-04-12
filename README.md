# Fisheye-React-router-dom
My get starting project with React
This my first react project. It features : hooks, props, routing, and nested routes.
I use [Tailwind](https://tailwindcss.com/) for styling. I also have a [nextJs](https://github.com/Vincent-Wirwicki/Fisheye-fromReact-toNext) version of this project.

![image](https://user-images.githubusercontent.com/98763680/163030457-04d23e14-6fdd-4309-a87d-470b6a1b8dab.png)

[Demo](https://fshy-app.herokuapp.com/)
(on first launch loading can take a long time)

## Features

Custom hooks : 
  -useEffect to fetch data

Header :

  - Unique tags :
     - Tags dynamically change between home and profile page
     - On click show only data with that tag

Home :

  - Display all photographers.
  - Calc all likes from their photos.
  - Click on photographer's name to access his/her profile and photos.  

Profile :

  - Match photographer data and media with id using useParams from react-router-dom
  - Nested route if you click on one photo

Photo :

  - Display the photo clicked from photographer profile
  - Photographer's name can be clicked to go back to his/her profile

Routing :
  - Dynamique url : baseUrl/photographerName
  - Nested routes : baseUrl/photographerName/photoTitle
  

