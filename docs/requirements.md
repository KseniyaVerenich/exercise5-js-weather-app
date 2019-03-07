# Weather Application Exercise

### Description

Create a webpage that prompts users to enter a zipcode, then displays current weather information for that location or a friendly error message if the zipcode is not found.

For this project we will be using an external API to retrieve weather data.

### MVP (Minimum Viable Product)

By default, the app should display a title, input box for zipcode, and submit button.

When the submit button is clicked, the application should fetch weather data from [api.openweathermap.org](api.openweathermap.org).

#### Wireframe

See wireframe-js-weather.png

#### Tech Stack

1. HTML
2. CSS
3. JS

### Objectives

To complete the assignment, you must complete the following:
###### Setup:
1. Fork repo `exercise5-js-weather-app`
2. Locally, navigate to your `Sites` folder in the terminal
3. `git clone` + `your-repo-name` into your Sites folder
4. Create a `dev` branch to commit your code to
5. Create necessary files for application
6. Import necessary css/js files (Bootstrap)

###### Develop:
1. Add content and elements to your website
2. View changes locally with MAMP (localhost)
3. Save often, and commit to github when important changes happen
###### Deploy:
1. Push your code to Github remote
2. Post links to your Github repo to the [exercises Slack channel](https://bootcamp-s19.slack.com/messages/CGD9QUH6E/)

### Application file structure

Minimally:

```
web/
    index.html - main page
    css/ - folder to contain CSS files
        /style.css - stylesheet
    img/ - folder to contain any images
    js/ - folder to contain JavaScript files
        /main.js
README.md - any important information
.gitignore - file that omits any directory/file from being tracked
```

Additional pages will be relative to the index.html file.

It is okay if your project has more files and more directories, but at the least you need the ones listed above.

### Requirements

If the request is successful, display:
1. City name
2. Current weather conditions
3. Current temperature in Kelvin, Fahrenheit, and Celius
4. A unique image, selected by the current temperature.

If the request is not successful, display an error message.

Website must be responsive

### Remember to push to Github!

Your repo should be public so that others can see your code and comment on it.

### If you finish early...
1. Improve error messaging to be more specific.
2. Add info to your projects README.md [README.md Best Practices](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

**If you get stuck...**
- [Class Resources Repo](https://github.com/bootcamp-s19/Resources#resources)
- Ask. :-)

**Additional Resouces**
- [Learn JS](https://www.w3schools.com/js/)

For more information about using API's, see these articles:

- [W3 schools local storage](https://www.w3schools.com/html/html5_webstorage.asp)
- [API call / timeout visualization](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
