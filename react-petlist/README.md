#Nicole Thurnau's PetList Test
As a pre-interview screening for DogVacay, I elected to build out the react-petlist challenge. I followed the guidelines listed below. All one needs to do in order to run it on one's own system is follow the instructions in the Installing section!

##Thoughts on the build
Thank you for the opportunity to build this little module! Upon reflection, I found this challenge both fun and interesting. I enjoyed messing around with the different requirements. Getting functions to work in my favor so that I my work matched the specifications was rewarding. I also had the opportunity to learn more about the power of React, JavaScript, and Webpack as I did research to prepare.  

I have not had the opportunity to use Webpack before, and as a result, struggled to load a style sheet. For some reason, it wouldn't create itself, and when I attempted to hard code a style sheet in, I kept getting the error, "stylesheet.css not found" no matter how I linked it in. So I coded my styles semi-inline by making them variables and adding them into the elements in my index.js file. This was quite limiting: I couldn't use css the way that I am used to so unfortunately, my design suffered for it.

Another thing I struggled with was getting radio buttons to work properly. I omitted them and used buttons instead. They serve a similar purpose in the header of my module, but the url that it outputs doesn't quite follow the proper syntax. I have a lot to research and learn about React.js and Webpack, that's for sure.

Overall, I enjoyed working on this mini-project, and look forward to learning how to achieve the things that I found to be roadblocks. Thanks for looking at it! I look forward to your getting your feedback.

# PetList Test
> These are a few modules of the 'Search Page' on our site.  
To view how the search page acts go to https://dogvacay.com/browse
We will be pseudo implementing some of the modules.

Write your JavaScript code in React Framework.  
You can write it in ES5 or ES6.
The 'Test' files are to make sure the project works.
You should spend only a few hours on this. i.e. no more then 4 hours.

## Goals

We are trying to get a sense of your day to day skills, and ability to write production ready code.
Treat this as a small project in which you would do for an actual job.

We are going to be examining how you approach the problem and solve it.
How you go about organizing your code.
When creating your code, realize that this code will have to be maintained by other members of your team.

The endpoints below will return the same data. We just want you to interact with the endpoint.
i.e. the data you get back from search.json will be the same as search.json?service=boarding or search.json?service=sitting

## Endpoints you will need:
```
  http://localhost:3000
  http://localhost:3000/static/search.json
  http://localhost:3000/static/search.json?service=boarding
  http://localhost:3000/static/search.json?service=sitting
```
## User Stories

__GIVEN__: A user comes to a search page  
__WHEN__: The user views the page  
__THEN__: They will see the results from the search.json above with the following fields:   

* Title
* Url
* First Name with Last Initial
* Pet Name
* Description


These are the rules for each field:
* Url
 * dashes for spaces
 * Only alpha numeric characters, underscore and dashes
 * no double dashses
 * i.e:
    * one two three => one-two-three
    * one two  three => one-two-three
    * one--two-three => one-two-three
* First Name with Last Initial
  * Capitalize the first character of the first name and last name
  * i.e.
    * seth broomer => Seth B.
* Description
  * At 48 characters and above we want to show ellipses
  * If the 48th character is in the middle of a word then we want to not show that word.
  * ie:
    * word1 description1 word2 description2 word3 description3 word4 description4 => word1 description1 word2 description2 word3...    

Use http://localhost:3000/static/search.json API  

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the boarding filter  
__THEN__: Then they will see the results from the search.json  with the service=boarding specified.  
Use http://localhost:3000/static/search.json?service=boarding API  

__GIVEN__: A user comes to a search page  
__WHEN__: The user clicks on the sitting filter  
__THEN__: Then they will see the results from the search.json  with the service=sitting specified.  
Use http://localhost:3000/static/search.json?service=sitting API  


### Example page
![](./example/example.png)

## Installing

You will need [Node](https://nodejs.org/en/) installed on your machine. Once installed in your terminal, `cd` to the project directory and run `npm install`.

Once your dependencies are installed, you can run the command `npm run dev`. And you are ready to start coding.

## Help
Do whatever you feel you need to get this done or finished.
(Feel free to google if you need to!) But if you have any questions about the test itself or what
you need to do feel free to email Seth Broomer <seth@dogvacay.com>.

## Submission
Feel free to create a github repository and send us the link (encouraged!) or if you're more comfortable,
feel free to just send us a zip file with your code their.
