[![Build Status](https://travis-ci.org/VidarHUN/DevOps-hf.svg?branch=master)](https://travis-ci.org/VidarHUN/DevOps-hf)
[![Coverage Status](https://coveralls.io/repos/github/VidarHUN/DevOps-hf/badge.svg?branch=master)](https://coveralls.io/github/VidarHUN/DevOps-hf?branch=master)

# DevOps-hf

Simple Angular + Node.js webapp with some kind of database. 

- Simple pipeline to build, test and deploy a kubernetes web app on the web 
- Travis CI
- If we have time and patience helm. 

### TODO

- Add auto publish to docker images
- Write some deployments 
- Find out, how to make GCP patterns 
- Make a database to the backend


# Backend

This is a simple Node.js API application with a single `/counter` path. 


### Build 

If you want to build it: 

```
npm start
```

It will listen on `localhost:9000`. 

### Test

```
curl http://localhost:9000/counter
```

It should return with a simple JSON: `{counter: 1}`. If you make a 
new call, the counter value must increase by one.

### TODO

- Add a Dockerfile 
