import { expect } from "chai";
import { createMockApiGatewayRequest } from "./mock_event";
import * as routes from "../src/routes";

describe("api", () => {

    const rootMockRequest = createMockApiGatewayRequest({
        httpMethod: "GET",
        resource: "/",
        path: "/",
        body: {},
    });

    it("should return a string from the root route", async () => {
        const result = await routes.Root.eventHandler(rootMockRequest);

        expect(result.statusCode).to.equal(200);
        expect(result.body).to.equal("Hello world for AWS + Pulumi!");
    });

});
