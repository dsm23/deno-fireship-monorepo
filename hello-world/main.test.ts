import { assertEquals } from "@std/assert";
import { helloWorld } from "./main.ts";

Deno.test(function helloWorldTest() {
  assertEquals(helloWorld(), "Hello, World!");
});
