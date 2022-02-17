## Para consumir API

https://movies-api-db-jhzv.herokuapp.com/movies



## Para obtener todas las peliculas
GET /

## Para crear una nueva pelicula
POST /

{
    name: 'String',
    release_year: int,
    genre: 'String',
    picture: URL
}

To Do: Anadir likes y descripcion en la BDD

## Para actualizar una pelicula
PUT /

{
    id: int
    ...
}

## Para borrar una pelicula
DELETE /delete/:id

:id == id de la pelicula a borrar

## Encontrar una pelicula por id

GET /:id

## Encontrar todas las peliculas por anio

GET /year/:year

## Encontrar todas las peliculas por genero

GET /genre/:genre