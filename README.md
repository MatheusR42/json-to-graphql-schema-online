# json-to-graphql-schema-online

Transforms JSON input into a GraphQL schema.

URL: [https://matheusr42.github.io/json-to-graphql-schema-online/](https://matheusr42.github.io/json-to-graphql-schema-online/)

### Why would I use this?

Let's say you want to use an existing REST API in a GraphQL service and expose the data that API provides. You'll need to expose that data in a GraphQL schema. Without this tool, you'll have to slog through the JSON response and manually extract and convert the relevant types to GraphQL schema types. This tool attempts to provide an automated reasonable first-pass at that effort.

This app is based on [json-to-simple-graphql-schema](https://github.com/walmartlabs/json-to-simple-graphql-schema) from walmartlabs. [@maxnachlinger](https://github.com/maxnachlinger) done the real work I just implement the web interface :)


When I developed this app there was only the command line interface, now [@maxnachlinger](https://github.com/maxnachlinger) created a web official version. I recommend to see his version, since it is importing the oficial lib.
http://maxnachlinger.js.org/json-to-simple-graphql-schema-ui/
https://github.com/maxnachlinger/json-to-simple-graphql-schema-ui

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
