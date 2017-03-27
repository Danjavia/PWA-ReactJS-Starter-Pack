# PWA ReactJS Starter Pack

Hi! This repository was made thinking in developers.

Within you can find many useful resources for starting to create a PWA application with ReactJS and GraphQL.

![PWA lighthouse](http://imgh.us/Screen_Shot_2017-02-24_at_8.37.33_PM.png)

# Included Features

- ReactJS
- React-Router
- Hot Reloading
- Apollo-Client
- Service Workers included
- PWA Ready!

# Requirements

- node v6.3.0 or up
- yarn

# Installation

```
git clone https://github.com/Danjavia/PWA-ReactJS-Starter-Pack.git <awesome-pwa-name>
cd <awesome-pwa-name>
yarn install
```

After install packages run your Progressive Web Application.

```
yarn start
```

And open [http://localhost:3000](http://localhost:3000)

# How to Build Your Project

```
yarn run build
```

# Starting with GraphQL

For easy starting with GraphQL and testing this repo you can start with graphql-up

[![graphql-up](http://static.graph.cool/images/graphql-up.svg)](https://api.graph.cool/simple/v1/bronzeduck-lifter-162)

Here is an GraphQL endpoint ready for using with the starter. It was set in your .env and .env.local files

You can get more info about **Graphql-up** on [https://graph.cool](https://www.graph.cool/graphql-up/).

Related starter schema is [Here](https://github.com/Danjavia/PWA-ReactJS-Starter-Pack/blob/master/blog.graphqls)

# Deploy Your Progressive Web Application

It's very simple.

You can deploy using [https://surge.sh](Surge.sh) cli

For installing it's simple to run. 
 
```
yarn global add surge
```

After in the project root

```
surge
```

Select the **build folder** and press enter.


# Set Environment Variables

Set your environment variables within .env.<enviroment> files using the **REACT_APP_** prefix for your environment variables

e.g.

```
//.env.local
REACT_APP_MY_CUSTOM_ENV_VAR=https://awesome.site
```

This values would appear in your compiled code after run

```
// development environment
yarn start
```

or

```
// production environment
yarn run build:production
```

or

```
// staging environment
yarn run build:staging
```

You can use your env var using **process.env.REACT_APP_MY_CUSTOM_ENV_VAR** in your project.

# Tests

This package include a sample with a little test for components. You can run it using.

```
yarn run test
```

# License

Show [LICENSE](https://github.com/Danjavia/PWA-ReactJS-Starter-Pack/blob/master/LICENSE)