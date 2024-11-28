import { assertSpyCall, spy } from "@std/testing/mock";

Deno.test(async function camelCaseTest() {
  const logSpy = spy(console, "log");

  await import("./main.ts");

  assertSpyCall(logSpy, 0, {
    args: ["makeMeACamel"],
  });
});
