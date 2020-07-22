import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Method } from "@pulumi/awsx/apigateway";

interface RequestHandler {
    (args: APIGatewayProxyEvent): Promise<APIGatewayProxyResult>;
}

interface APIGatewayEventHandlerRoute {
    path: string;
    method: Method;
    eventHandler: RequestHandler;
}

export function createApiGatewayRoute(method: Method, path: string, eventHandler: RequestHandler): APIGatewayEventHandlerRoute {
    return { method, path, eventHandler };
}
