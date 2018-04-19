## Overview ##

This is the server for the sesame street cookie monsters project that we are doing. This would be hosted in heroku so that we can use that api.

## End Points

### GET /monsters

This operation would return the list of monsters

```javascript

const monsters = [
    {
        id: 1,
         name:"elmo",
         image:"elmo.png"
    },
    {
        id:2,
        name:"cookiemonster",
        image:"cookiemonster.png"
    }
]

```

### GET /monsters/:name

This operation would return a single object for the given name

```javascript

    {
        id: 1,
         name:"elmo",
         image:"elmo.png"
    }

```


