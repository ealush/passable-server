# passable-server

Passable is an isomorphic data model validations library.
Here is an as-simple-as-it-gets example server implementation.

## How to use Passable?
To test the example routes, you should send a `POST` request to either of the example routes already configured.
* `/example/needful_things`
    * An example for a passing request body:
    ```json
    {
        "testData": {
            "MrBeauregard": {
                "says": "Marmalade is served"
            },
            "Snuffles": {
                "asks": "Where are my testicles, Summer?"
            },
            "Pilot": {
                "trigger": "none"
            }
        }
    }
    ```
* `/example/curse_purge_plus`
    * An example for a passing request body:
    ```json
    {
        "testData": {
            "GetSchwifty": {
                "say": "Show me what you got"
            },
            "RickSanchez": {
                "shout": "Wubba lubba dub-dub!"
            },
            "BlipsAndChitz": {
                "game": "Roy1"
            }
        }
    }
    ```

Learn more about [Passable](https://github.com/ealush/passable): https://github.com/ealush/passable
