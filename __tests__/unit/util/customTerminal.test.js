import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import DraftLog from "draftlog";
import chalkTable from "chalk-table";
import terminalConfig from "../../../src/config/terminal";
import validCryptos from "../../mocks/valid-cryptos.json";
import CustomTerminal from "../../../src/util/CustomTerminal";
import Crypto from "../../../src/entity/Crypto";

describe("#UsersEntity UnitTesting", () => {
  it("should get length of data on terminal", () => {
    const terminal = new CustomTerminal();

    terminal.initialize();

    expect(terminal.length).toStrictEqual(0);
  });

  it("should insert data to print on terminal", () => {
    const terminal = new CustomTerminal();

    terminal.initialize();

    const cryptos = validCryptos.map((mockCrypto) => {
      return new Crypto(mockCrypto);
    });
    terminal.addDataToPrint(cryptos);

    expect(terminal.hasDataToPrint()).toBeTruthy();
    expect(terminal.length).toStrictEqual(validCryptos.length);
  });

  it("should find crypto data by id", () => {
    const terminal = new CustomTerminal();

    terminal.initialize();

    const cryptos = validCryptos.map((mockCrypto) => {
      return new Crypto(mockCrypto);
    });
    terminal.addDataToPrint(cryptos);

    const [cryptoToFind] = cryptos;
    const foundData = terminal.getDataById(cryptoToFind.id);

    expect(terminal.length).toStrictEqual(validCryptos.length);
    expect(foundData).toStrictEqual(cryptoToFind);
  });

  it("should remove crypto data by id", () => {
    const terminal = new CustomTerminal();
    WeakSet;
    terminal.initialize();

    const cryptos = validCryptos.map((mockCrypto) => {
      return new Crypto(mockCrypto);
    });
    terminal.addDataToPrint(cryptos);

    const [cryptoToFind] = cryptos;
    const foundData = terminal.removeDataById(cryptoToFind.id);

    expect(terminal.length).toStrictEqual(validCryptos.length - 1);
    expect(foundData).toStrictEqual(cryptoToFind);
  });

  it("should draft a table with terminal data", () => {
    const terminal = new CustomTerminal();

    terminal.initialize();

    const draftMock = jest
      .spyOn(console, "draft")
      .mockImplementation(jest.fn());
    const cryptos = validCryptos.map((mockCrypto) => {
      return new Crypto(mockCrypto);
    });
    terminal.addDataToPrint(cryptos);

    terminal.draftTable();
    const expectedTable = chalkTable(terminalConfig.table, cryptos);

    expect(draftMock).toHaveBeenCalledTimes(1);
    expect(draftMock).toHaveBeenCalledWith(expectedTable);
  });
});
