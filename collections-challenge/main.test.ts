import { assertEquals } from "@std/assert";
import { result } from "./main.ts";

Deno.test(function collectionsChallengeTest() {
  assertEquals(result, {
    x: "a",
    y: "b",
    z: "c",
  });
});
