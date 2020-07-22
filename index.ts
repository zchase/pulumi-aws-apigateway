import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

import * as routes from "./src/routes";

const apiGateway = new awsx.apigateway.API("hello-world", {
    routes: [
        routes.Root,
    ],
});

export const url = apiGateway.url;
