import { APIGatewayProxyEvent } from "aws-lambda";
import { Method } from "@pulumi/awsx/apigateway";

const defaultJSON = require("./event.json");

interface GenericObject {
    [key: string]: any;
}

interface MockApiGatewayRequestArgs {
    body: GenericObject;
    resource: string;
    path: string;
    httpMethod: Method;
}

function convertObjectToBase64(obj: GenericObject): string {
    const rawString = JSON.stringify(obj);
    return Buffer.from(rawString).toString("base64");
}

export function createMockApiGatewayRequest(args: MockApiGatewayRequestArgs, opts?: Partial<APIGatewayProxyEvent>): APIGatewayProxyEvent {
    const requestBody = convertObjectToBase64(args.body);

    const defaultValues: Partial<APIGatewayProxyEvent> = {
        isBase64Encoded: true,
        body: requestBody,
        resource: args.resource,
        path: args.path,
        httpMethod: args.httpMethod,
    };

    return Object.assign({}, defaultJSON, defaultValues, (opts || {}));
}
