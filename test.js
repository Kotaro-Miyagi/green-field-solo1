const chai = require("chai");
const chaiHttp = require("chai-http");
const setupServer = require("../server/src/routes/index");

chai.use(chaiHttp);

const expect = chai.expect;
let request;

const server = setupServer();

describe("GET:cssAlldata", () => {
  beforeEach(() => {
    request = chai.request("http://localhost:3333");
  });

  it("it should return 200", async () => {
    request.get("/api/data").end((err, res) => {
      // console.log(res.statusCode);

      expect(res).to.have.status(200);
      expect(err).to.be.null;
    });
  });
});
