const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/app");
const expect = chai.expect;

//Assertion style
chai.should();

chai.use(chaiHttp);

//GET route test
describe("/Test for home route", () => {
    it("should get default route", (done) => {
        chai.request(server).get("/").end( (err,res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            const greeting = res.body.greeting;
            expect(greeting).to.be.eq("Hello, I am ManiKanta Kotni");
        } );
        done();
    });
});