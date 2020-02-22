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
* [License](#license)

![image](https://user-images.githubusercontent.com/45405413/74859094-accaa800-5346-11ea-8ca8-486580c1f80c.png)

![image](https://user-images.githubusercontent.com/45405413/74859123-b5bb7980-5346-11ea-8fb3-609fc43d0214.png)

# Assignment

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develope your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of the how API's, frameworks and libraries work.

# Goal 
The goal of my app is to show users awesome space pictures, the app also provides a brief explanation by a professional. The app is a good place to find beautiful space pictures and/or show people how fascinating our universe is! 

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

### Copyright Filter

This application allows the user to filter the pictures by copyright. The available filter options are:
- **copyright** | show only the copyrighted pictures
- **non-copyright** | show only the non-copyright pictures (public domain owns theses pictures)
- **all** | show all pictures

This features helps users find usable pictures for their own work/projects.

# Actors

# TODO UPDATE HET ACTORS DIAGRAM

![image](https://user-images.githubusercontent.com/45405413/74486612-a5764b00-4ebd-11ea-84d2-848da30d686d.png)

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
The received data from NASA's APOD `API` that I use:
* **date** | APOD date 
* **title** | title for the APOD
* **hdurl** | high resolution url to image
* **explanation** | explanation of the image by a professional
* **copyright** | copyright owner

### Data cleaning

Because the data is stored in `localStorage` it's important the data is as small as possible so no unnessacary space is being wasted. In the cleaning `module` all properties that won't be used are `deleted`, the following properties are deleted:
* service_version
* media_type

The `API` consists of images & videos, all videos are filtered out.

> There aren't that many videos, approximately 15% of the APODs are of media_type **video**.

All APODs are assigned an unique ID.

The data contains no empty values, but data objects only contain the `copyright` key if they are copyrighted. In the code all data objects without the `copyright` key are assigned the `copyright: public domain` key/value pair.

<details><summary>Data after cleaning & transformation</summary>
<img src="https://user-images.githubusercontent.com/45405413/74860015-42b30280-5348-11ea-9e0b-f6a2ddb63227.png">
</details>

# Interaction

# TODO UPDATE HET INTERACTION DIAGRAM

![image](https://user-images.githubusercontent.com/45405413/74486624-b030e000-4ebd-11ea-80d5-be96a5912162.png)

# Best Practices
* Code should be easily readable
* Only use shorthands if you really understand how they work
* Stick to a code style you understand and can apply consistently
* Add comments
* Use descriptive `variable`-/`function` names
* Only abbreviate words when instantly understandable
* Commit early and often
* Save JS selectors as variables (`const button = document.querySelector('button')`)
* Group code/logic based on functionality in `modules` 
* Name `modules` after `objects` & name `functions` after `actions`
* Try to avoid using `global` `variables` 

# Stuff I Want To Do
- [x] Use a router
- [x] Use a templating engine
- [x] Add image reflow
- [x] Allow users to filter (copyright/public domain)
- [ ] Allow users to sort (new/old)
- [ ] Fetch data in bulks (per month)
- [ ] Separate templates from code by putting them in a JSON/text file and fetching this in JS
- [ ] Create a better "content management" function that only inserts content instead of content and HTML

# Credits

### [NASA](https://api.nasa.gov/)

Nasa has provided this incredible `API` & made it available for free to the public.

### [Astronomy Picure of the Day (APOD)](https://apod.nasa.gov/apod/)

APOD has used the NASA `API` and made a really awesome website, this website was the main inspiration behind this app.

### [Routie Hash Router](https://github.com/jgallen23/routie)

This application uses the routie `hash router` which is a `microJS library`.

### [Cantinflas Templating Engine](https://github.com/terkelg/cantinflas)

This application uses the cantinflas `templating engine` which is a `microJS library`.

### [Image Reflow Animation](https://codepen.io/JCLee/pen/dyPejGV?editors=0100)

I used this codepen as a basis for my image reflow animation.

### [Loading Animation](https://codepen.io/vank0/pen/mARwLg?editors=1100)

I used this codepen as a basis for the "loading" animation.

# [License](https://github.com/WesselSmit/web-app-from-scratch-1920/blob/master/LICENSE)
