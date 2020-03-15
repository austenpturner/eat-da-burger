# Eat-Da-Burger
UW Full-Stack Bootcamp Homework Assignment

## The Assigment
This project was a homework assignment from UW Full-Stack Bootcamp. The assignment was to create an app using Node, MySQL, Express, Handlebars and an ORM that follows a MVC pattern. It should use Node and mySQL to make queries and create routes, and use Handlebars to generate HTML.

On the front-end the app should allow users to enter a name of a burger. The burger should then appear in a list on the page with a "devour" button. When the user clicks the devour button, the burger is "devoured" and is moved to another list of devoured burgers.

## The Process
I followed the directory structure provided in the homework instructions:

- config
  - connection.js
  - orm.js
- controllers
  - burgers_controller.js
- db
  - schema.sql
  - seeds.sql
- models
  - burgers.js
- node_modules
- package.json
- public
  - assets
    - css
      -burger_styles.css
    - img
      - burger.svg
    - js
      - burger_script.js
- server.js
- views
  - index.handlebars
  - layouts
     - main.handlebars
     
 This was the first assignment that had us completely connect the front-end with the back-end. It was important that I walk through the steps carefully and correctly export and require modules from one file to another as everything had to be connected correctly. The most difficult part was moving from the orm to the model to the controller.
 
 ## The Outcome
 I was able to successfully complete the homework assignment and make a functioning app. I thought it may also be wise a delete button so the user could delete burgers from their devoured list. To do this all I needed to do was walk through the steps again of making a new orm method, then add to the burger model, and lastly creating a new route in the controller file. Then I added another fetch call in the front-end JavaScript file to send info back to the server side when the user clicked on the delete button so the server would know which burger to delete from the database. 
 
 I also used Sass for this project so I could practice with Sass variables and mixins. This was helpful for designing the layout of the page and re-using colors. 
 
 ## Thanks for reading! :smile:
 Please contact me with any questions or comments at austenpturner@msn.com
