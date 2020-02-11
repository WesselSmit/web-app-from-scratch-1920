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

# Features

### Game Setup

The user will be welcomed with a 'setup' screen, here the user can setup rules and choose a category. The user preferences will be added as paramters in the `fetch` call. The user can control the following settings:

* **LIMIT** | allows the user to specify the number of questions in the quiz
* **CATEGORY** | allows the user to select a question category
* **DIFFICULTY** | allows the user to select a difficulty

# Actors
![image](https://user-images.githubusercontent.com/45405413/74222195-38439980-4cb4-11ea-9fdc-f3499ab4e58f.png)

# API

This application uses the [opendtb](https://opentdb.com/api_config.php) API, this is an open trivia API. It provides questions and answers ranging from multiple categories. 

Using parameters you're able to create a more personal request, the following parameters are available;
* **LIMIT** | number of questions (1 - 50)
* **CATEGORIES** | ~25 categories to choose from 
* **DIFFICULTY** | difficulty of questions 
* **TYPE** | type of questions (multiple choice / true - false)
* **ENCODING** | data encoding

There currently is no rate limit.

The API is free to use, no key or authentication needed.

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
- [x] Allow users to customize their game settings
- [] Allow users to see which questions they answered (in)correct
- [] Allow users to see what the correct answer is after they've answered the question

# Credits

[Shuffling an array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)


### [License](https://github.com/WesselSmit/web-app-from-scratch-1920/blob/master/LICENSE)
