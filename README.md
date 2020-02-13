# Table of Contents
* [DEMO](https://wesselsmit.github.io/web-app-from-scratch-1920/)
* [Assignment](#assignment)
* [Goal](#goal)
* [Install-Notes](#install-notes)
* [Features](#features)
* [Actors](#actors)
* [API](#api)
* [Data](#data)
* [Interaction](#interaction)
* [Design-Patterns-and-Best-Practices](#design-patterns-and-best-practices)
* [Credits](#credits)

# HIER MOET EEN SCREENSHOT KOMEN

# Assignment

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develope your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of the how API's, frameworks and libraries work.

# Goal 
The goal of my app is to show users awesome space pictures, the app also provides a brief explenation by a professional. The app is a good place to find beautiful space pictures and/or show people how fascinating our universe is! 

# Install Notes

Clone the repository from Github

`https://github.com/WesselSmit/web-app-from-scratch-1920.git`

Run the application with a code editor or host the source code with a service like github-pages.

# Features

### Data Efficiency

This application retrieves many high resolution images, because these images do not change, they are not retrieved every time. The retrieved data is stored in `localStorage`. The next time the application is started, the application will look in the `localStorage`. There are 3 possible situations:

- **Data is empty** | all pictures of this year are `fetched` & stored in `localStorage`
- **Data is complete** | data is loaded from `localStorage`
- **Data exists but is incomplete** | data is loaded from `localStorage`, code determines what the most recent piece of data is, `fetches` missing data (uses most recent date in `localStorage` as startingpoint) & stores updated data in `localStorage`

This has 2 benefits:
- Reduces the number of `API` calls
- Only `fetches` missing data 

# Actors
![image](https://user-images.githubusercontent.com/45405413/74481284-b9687f80-4eb2-11ea-96db-a4b98fdd24d3.png)

# API

This application uses NASA's [Picture of the Day (APOD)](https://api.nasa.gov/) `API`, it provides space related pictures.

Every day NASA adds a new space related picture to the `API`, these are retrievable individually but NASA also supports bulk fetching!

Using parameters you're able to create a more personal request, the following parameters are available;
* **date** | the date of the picture 
* **hd** | url for high resolution picture
* **api_key** | personal api key to identify yourself 

There currently is 1000 calls per hour (per `api` key).

`API` keys are free, you only have to [register](https://api.nasa.gov/). (full name & email)

# Data 
- used data
- hoe ziet de data eruit
- data cleaning/transformation
- empty values

# Interaction
HOW DOES THE INTERACTION FLOW THROUGH THE APPLICATION? (INTERACTION DIAGRAM)

# Design Patterns and Best Practices
WELKE BEST PRACTICES HEB JE TOEGEPAST

# Stuff I Want To Do
- [ ] Allow users to filter (images/videos)
- [ ] Allow users to sort (new/old)
- [ ] Fetch data in bulks (per month)

# Credits

### [NASA](https://api.nasa.gov/)

Nasa has provided this incredible `API` & made it available for free to the public.

### [Astronomy Picure of the Day (APOD)](https://apod.nasa.gov/apod/)

APOD has used the NASA `API` and made a really awesome website, this website was the main inspiration behind this app.

# [License](https://github.com/WesselSmit/web-app-from-scratch-1920/blob/master/LICENSE)
