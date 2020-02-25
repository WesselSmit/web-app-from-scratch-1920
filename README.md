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

![image](https://user-images.githubusercontent.com/45405413/75095034-26ee6d00-5591-11ea-8863-bd7ec94f7b2a.png)

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

## Skeleton Screen/UI

This applications `fetches` needs to load data to be useable. When this data is being fetched/loaded the application isn't usable. In this state the user is presented with a so called 'skeleton screen' or 'skeleton UI'. Meaning the UI visually hints/implies it's loading and the user has to wait. This helps the user understand what's happening and enhances the user experience. 

## Data Efficiency

This application retrieves many high resolution images, because these images do not change, they are not retrieved every time. The retrieved data is stored in `localStorage`. The next time the application is started, the application will look in the `localStorage`. There are 3 possible situations:

- **Data is empty** | all pictures of this year are `fetched` & stored in `localStorage`
- **Data is complete** | data is loaded from `localStorage`
- **Data exists but is incomplete** | data is loaded from `localStorage`, code determines what the most recent piece of data is, `fetches` missing data (uses most recent date in `localStorage` as startingpoint) & stores updated data in `localStorage`

This has 2 benefits:
- Reduces the number of `API` calls
- Only `fetches` missing data 

## Data Saving

Not everything from the data that the `API` returns is important, all unnecessary data object keys are deleted. This means the application uses a more compact data object which enhances the performance, also resulting in a smaller localStorage dataset.

## Image Reflow

When the data is loaded and the content needs to be inserted into the `DOM` there arise some problems; 'image reflow' happens. `image reflow` is when content isn't immediately loaded/rendered and the user can see the content moving/shifting. This is because the browser renders immediately on a page load with all content that's available. Later when the slower content (images) is loaded the browser updates through re-rendering some parts. This results in content being inserted later in the `DOM` which means the user can see the content existing shifting to make room for the newly inserted content.

To prevent the content from shifting I've used `<span>` elements, these function as placeholders for the images, meaning the user can see the (animated) `<span>` elements when the data-intensive images are being loaded/rendered. When the images are rendered they are placed in exactly the same position as the `<span>` elements. 

>The `<span>` elements are animated in the `:empty` state; meaning they won't be infinitely looping animations while the user can see the pictures.

## Copyright Filter

This application allows the user to filter the pictures by copyright. The available filter options are:
- **copyright** | show only the copyrighted pictures
- **non-copyright** | show only the non-copyright pictures (public domain owns theses pictures)
- **all** | show all pictures

This features helps users find usable pictures for their own work/projects.

# Actors

![image](https://user-images.githubusercontent.com/45405413/75198040-fad51680-575f-11ea-8eba-359fa0583032.png)

# API

This application uses NASA's [Picture of the Day (APOD)](https://api.nasa.gov/) `API`, it provides space related pictures.

Every day NASA adds a new space related picture to the `API`, these are retrievable individually but NASA also supports bulk fetching!

Using parameters you're able to create a more personal request, the following parameters are available;
* **date** | the date of the picture 
* **hd** | url for high resolution picture
* **api_key** | personal api key to identify yourself 

There currently is 1000 calls per hour (per `api` key).

`API` keys are free, you only have to [register](https://api.nasa.gov/) (full name & email).

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

![image](https://user-images.githubusercontent.com/45405413/75254907-60b5b280-57e1-11ea-8f7d-b4e57f26a9ab.png)

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
- [x] Allow users to sort (new/old)
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
