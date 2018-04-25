# Bands API

This API is for interfacing with Ryan's fovorite bands. This is an open sourced project. For contributing please reference [this contribution guide](www.awesome.com).

* A special note on how to work with this API here.

## APE EndPoints

* The following is a list of all of the endpoints that you available for use with out API.

### [GET] `api/bands`

### [GET] `api/bands:id`

### [POST] `api/bands`

### [PUT] `api/bands:id`

### [DELETE] `api/bands:id`

| Type   | URL           | DATA                             |
| ------ | ------------- | -------------------------------- |
| GET    | /api/bands    | returns an \*array of bands      |
| GET    | /api/bands:id | returns a band with \*id         |
| POST   | /api/bands    | requires a band *name and *genre |
| PUT    | /api/bands:id | requires a band \*id             |
| DELETE | /api/bands:id | requires an \*id provided        |

* _all fields marked with `*` are required_
