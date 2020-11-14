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
