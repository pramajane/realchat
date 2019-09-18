> Realtime Chatting App

## Build Setup Django

``` bash

# install dependencies
pip install -r requirements.txt

# migrate
python manage.py migrate


```

## Build Setup Vue

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


Realtime service was served by RabbitMQ and uWSGI websocket.
Connection between django and websocket can only be done if RabbitMQ server is running.
Make sure to run RabbitMQ before run websocket. 
