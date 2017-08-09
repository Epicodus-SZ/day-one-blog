# day-one-blog

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd day-one-blog`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Project Step-by-step

1. `ember new day-one-blog` - creates the project
2. `npm install` - loads dependencies in package.json
3. Create a new Github repository.
4. `git init` and link github repository to the new project folder
5. `ember g route about` - creates about route.
6. `ember g route contact` - creates contact route.
7. `ember g route index` - creates index route.
8. `ember install ember-bootstrap` - adds Bootstrap to our project
9. Copied a bootstrap theme from bootswatch.com and updated application.hbs
10. Created posts.json to create default data for database.
11. `ember g model post` - creates post model.
12. `ember g model comment` - creates comment model.
13. Add attributes to both models in app/models folder.
14. Create a new Firebase project.
15. Set database rules, read/write access to true and Publish the results to save.
16. Install the emberfire package using `ember install emberfire`
17. Copy your apikey information from firebase into config/environment.js
18. Import your posts.json file into the firebase DB.
19. `ember g route post` - this creates the post route
20. `ember g component post-tile` - creates a component for listing all posts on the website front page.
21. Update the index.js file to add model data into the page.
22. Create a post text helper using `ember g helper trim-string`
23. Create a simple post.hbs file.
24. Change the post route to be dynamic (ie `this.route('post', {path: '/post/:post_id'});`)
25. refactor links to the specific post pages using this `{{#link-to 'post' post.id}}`
26.
