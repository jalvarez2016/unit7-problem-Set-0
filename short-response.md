### Exercise 1
## Describe what you notice and give details for why the output looks the way it does.
The output appears as such, 

![alt text](/imgs/unit7_ex1.PNG)

The reason the error arises is that there is nothing being exported from `lab.js`. As such, the `require` statement in marcy.js does not hold anything within the object. When using a `require`, the return is inherantly an empty object, unless the file referenced specifies otherwise with a `module.exports = {key:value}`.

### Exercise 2
## Describe what you notice and give details for why the output looks the way it does.
The output appears similiar to the previous, where the returned value is an object. However, this object contains key value pairs, as specified within `lab.js`. 

![alt text](/imgs/unit7_ex2.PNG)

The reason that the previously empty object now has key-value pairs is that `module.exports` determines what is available when another file references it through `require`. As such, when the `lab.js` file is referenced in `marcy.js`, we receive an object with the keys and values established in that file.

### Exercise 3
## Why isn't this part of the module.exports object undefined?
The output does not have an undefined value for the number key. The reason for this is that function is synchronous. As such, the module export waits for the function to return a value, where upon it will give that value to the marcy file. As such, the returned object will look like:

![alt text](/imgs/unit7_ex3.PNG)

### Exercise 4
## What actually happens and why? Reference the node.js docs to learn more about caching
When importing a module multiple times to the same file, the object that is returned is cached and used for other imports of the same module. As such, in this example, the file that is being imported will only run its code once. We know this because the file contains a `console.log` which only runs once. 

![alt text](/imgs/unit7_ex4.PNG)

### Exercise 5
## What is the client and what is the server in this exercise?
In this exercise, the client is localhost at the port specified. As such, whatever the response that is provided will show up on the client side. The server side of this exercise occurs in the terminal through node as it's a node server, thus the server lives in the node envirnment.

![alt text](/imgs/unit7_ex5.PNG)

### Lesson 1
## Describe the purpose of HTTP Status Codes. Why are these important?
The purpose of a HTTP status codes is for developers to be able to handle the returned values from the server. They are important as they allow for ability to handle both failures and successes in requests to the servers for the client side. 


## What is the difference between a URL and a URI?
A URL is a type of URI, as it fall under the catagory of an URI. A URI is an identifier that is an umbrella term that covers URL's and URN's. A URL is a special type of URI that specifies the location at which something is available. 

## What is the purpose of query params? How do we use them in our applications?
The purpose of query params is to allow for dynamic content, where the application does not have hard coded content for the query params. As such, the page's content is altered to fit the query params. We use query params to deliver content specific to the query params, as we show users content based on the page and the parameter. To use them in our application, we grab them out of the request.