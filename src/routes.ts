import { APIGatewayProxyResult } from "aws-lambda";
import { createApiGatewayRoute } from "./create_route";

// The Root route handles GET request to '/'
export const Root = createApiGatewayRoute("GET", "/", async (event): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: "Hello world for AWS + Pulumi!",
    };
});
