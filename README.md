# Overview

A simple node webserver that keeps a count for the number of requests along with a tagged description.

## Setup

* Download [NodeJS](www.node.js)
* Run `npm install`
* Copy `.env.sample` to `.env`: `cp .env.sample .env`

## Build

`npm run docker:build` would build the docker image.

## Running

Run the webserver on port 80:

```
npm run docker:run
```

You should be able to curl the loopback address: `127.0.0.1`.

```sh
curl localhost
```
