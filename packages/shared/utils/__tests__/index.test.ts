import { logger } from "../index";

describe("logger", () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    // console.log를 모킹하여 실제 콘솔 출력을 방지
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    // 각 테스트 후 모킹 초기화
    consoleLogSpy.mockRestore();
  });

  it("should log message with correct format", () => {
    logger("Test message");
    expect(consoleLogSpy).toHaveBeenCalledWith("[Logger] Test message", "");
  });

  it("should log message with data when provided", () => {
    const testData = { count: 1, text: "hello" };
    logger("Test message", testData);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "[Logger] Test message",
      testData,
    );
  });

  it("should handle undefined data correctly", () => {
    logger("Test message", undefined);
    expect(consoleLogSpy).toHaveBeenCalledWith("[Logger] Test message", "");
  });

  it("should handle multiple calls correctly", () => {
    logger("First message");
    logger("Second message", { value: 123 });

    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      1,
      "[Logger] First message",
      "",
    );
    expect(consoleLogSpy).toHaveBeenNthCalledWith(
      2,
      "[Logger] Second message",
      { value: 123 },
    );
  });
});
