# charges-server Express.js API

Source code repository of the Express.js API. It uses Sequelize promised based ORM to manage objects and persist them into SQLite database.

## Requirements

- Linux distro
- Node == 10.x
- Docker > 18.x

## Installation with Docker

First of all, lets create the network to communicate between server and consumers:

`$ docker create network <network_name>`

1. Docker build:

	` $ docker build -t <charges_server_image_tag>:<version> .`

2. Docker run (the app port is 3001):

	` $ docker run --name <container_name> -h <container_hostname> --network <network_name> -p 3001:3001 -d <charges_server_image_tag>:<version>`

3. Check the consumer is up:

	```
	$ curl http://localhost:3001/ping
	{"response":"pong"}
	```

### Installation with Node

`$ npm install`

## Serving

To generate the production optimized files and serve them, follow the next steps:

`$ npm start`
