import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import DraftLog from "draftlog";
import chalkTable from "chalk-table";
import terminalConfig from "../../../src/config/terminal";
import validCryptos from "../../mocks/valid-cryptos.json";
import CustomTerminal from "../../../src/util/CustomTerminal";
import Crypto from "../../../src/entity/Crypto";
import CryptoRepository from "../../../src/repository/CryptoRepository";
import CryptoService from "../../../src/service/CryptoService";
import mockedCryptos from "../../mocks/valid-cryptos.json";

describe("#UsersEntity UnitTesting", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get paginated lis of data ", async () => {
    const repository = new CryptoRepository();
    const service = new CryptoService({ repository });

    jest.spyOn(repository, repository.list.name).mockResolvedValue({
      headers: {
        "x-total-count": mockedCryptos.length,
      },
      data: mockedCryptos,
    });

    const cryptoGenerator = service.list();

    for await (let data of cryptoGenerator) {
      expect(data).toStrictEqual(mockedCryptos.map((c) => new Crypto(c)));
    }
  });

  it("should handle repository connection error ", async () => {
    const repository = new CryptoRepository();
    const service = new CryptoService({ repository });

    class ServerConnectionError extends Error {
      constructor(message) {
        super(message);
        this.code = "ECONNECTION";
        this.status = 500;
      }
    }

    jest
      .spyOn(repository, repository.list.name)
      .mockRejectedValue(
        new ServerConnectionError("Unable to connect to data source")
      );

    const cryptoGenerator = service.list();

    for await (let data of cryptoGenerator) {
      expect(data).toStrictEqual([]);
    }
  });
});
