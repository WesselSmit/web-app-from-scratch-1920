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
The goal of my app is to make users quiz themselves on different topics. I also want to offer the user the possibility to set up the rules themselves. Afterwards they should be able to see how they performed and which questions they answered (in)correct.

# Install Notes

Clone the repository from Github

`https://github.com/WesselSmit/web-app-from-scratch-1920.git`

Run the application with a code editor live preview or host the source code with a service like github-pages.

### Mobile

This application works on devices ranging from ultra wide monitors to phones, but please keep in mind this application was designed and developed for phones. 

To enhance the user experience on phones I've added a `manifest.json`, this allows the user to add the application to the homescreen and 'exoerience' it like a native app.

>[How to add this app to the homescreen and use it like a native app?](https://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/) 

# Features

### Progressive Web App

This application uses a `manifest.json`, this allows the user to add the application to the homescreen and 'exoerience' it like a native app. Technically it's called a `progressive web app` and combines the pros of **web** & **native** apps, such as:

* **Version** | PWAs are in fact web apps and automatically update to newer versions
* **Interface** | PWAs allow the user to use the app in fullscreen mode, hiding all browser chrome/interfaces

### Game Setup

The user will be welcomed with a 'setup' screen, here the user can setup rules and choose a category. The user preferences will be added as paramters in the `fetch` call. The user can control the following settings:

* **LIMIT** | allows the user to specify the number of questions in the quiz
* **CATEGORY** | allows the user to select a question category
* **DIFFICULTY** | allows the user to select a difficulty

# Actors
WHICH ACTORS ARE THERE IN YOUR APPLICATION? (ACTOR DIAGRAM)

# API
- description
- data possibilities
- limitations (rate limit)

# Data 
- used data
- hoe ziet de data eruit
- data cleaning/transformation
- empty values

# Interaction
HOW DOES THE INTERACTION FLOW THROUGH THE APPLICATION? (INTERACTION DIAGRAM)

# Design Patterns and Best Practices

# Stuff I Want To Do

# Credits

[Shuffling an array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)


### [License](https://github.com/WesselSmit/web-app-from-scratch-1920/blob/master/LICENSE)
