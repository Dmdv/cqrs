"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const Domain_1 = require("../lib/Domain");
const Actor_1 = require("../lib/Actor");
class User extends Actor_1.default {
    constructor(data) {
        super(data);
    }
    changename(name) {
        this.$(name);
    }
    when(event) {
        switch (event.type) {
            case "changename":
                return { name: event.data };
        }
    }
}
describe("Cluster System", function () {
    it("test", async function (done) {
        try {
            /**
            options.domainServerURL &&
            options.domainServerPort &&
            (options.clusterUrl || options.clusterPort)
             */
            const domainA = new Domain_1.default({
                domainServerPort: 3001,
                domainServerUrl: "http://localhost:3001",
                clusterPort: 3000
            });
            // const managerA = new DefaultClusterInfoManager(3000);
            // const serverA = new DomainServer(domainA, 3001)
            // managerA.register({ id: domainA.id, url: "http://localhost:3001" });
            // const proxyA = new DomainProxy(managerA);
            // const domainB = new Domain();
            // const managerB = new DefaultClusterInfoManager("http://localhost:3000");
            // const serverB = new DomainServer(domainB, 3002);
            // managerB.register({ id: domainB.id, url: "http://localhost:3002" });
            // const proxyB = new DomainProxy(managerB);
            const domainB = new Domain_1.default({
                domainServerPort: 3002,
                domainServerUrl: "http://localhost:3001",
                clusterUrl: "http://localhost:3000"
            });
            domainA.register(User);
            domainB.register(User);
            const json = await domainA.create("User", { name: "leo" });
            // await managerA.addId(domainA.id, json.id);
            // await proxyB.refreshDomainInfo();
            const result = await domainB.get("User", json.id);
            console.log(result.json);
            done();
        }
        catch (err) {
            console.log(err);
            done();
        }
    });
});
//# sourceMappingURL=test.clusterSystem.js.map