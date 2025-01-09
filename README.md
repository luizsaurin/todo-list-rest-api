<h1 align="center"><strong>Todo List</strong></h1>

A simple REST API to manage a Todo list using CRUD operations.

## **How to run**

### Install npm packages

```
npm install
```

### Build

```
tsc
```

### Run server

```
npm start
```

## **How to test**

### Test the API using HTTP requests

Create a new TODO
```
curl --location 'http://localhost:3000/todo' \
--header 'Content-Type: application/json' \
--data '{
    "description": "Learn javascript"
}'
```

Find all existing TODO's
```
curl --location 'http://localhost:3000/todo'
```

Find TODO by id
```
curl --location 'http://localhost:3000/todo/1'
```

Update existing TODO
```
curl --location --request PATCH 'http://localhost:3000/todo/1' \
--header 'Content-Type: application/json' \
--data '{
    "description": "Updated description"
}'
```

Delete existing TODO
```
curl --location --request DELETE 'http://localhost:3000/todo/1'
```