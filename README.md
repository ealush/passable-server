# passable-server

Passable is an isomorphic data model validations library.
Here is an as-simple-as-it-gets example server implementation.

## Testing it online
You can test Passable online by sending `POST` requests to either of these two routes:
* https://fathomless-cliffs-24511.herokuapp.com/example/needful_things
* https://fathomless-cliffs-24511.herokuapp.com//example/curse_purge_plus

### Getting them to pass
* `POST` `/example/needful_things`
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
* `POST` `/example/curse_purge_plus`
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
