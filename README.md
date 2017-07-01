# passable-server

Passable is an isomorphic data model validations library.
Here is an as-simple-as-it-gets example server implementation running Passable.

Capabilities:
* Making a POST request to each of the passes with the data in the request body, and getting back the pass result.
* Building all the tests as JS files that the server can serve. Loading them to the page will attach them to window (`window.passes.your-test`).

Learn more about [Passable](https://github.com/ealush/passable): https://github.com/ealush/passable
