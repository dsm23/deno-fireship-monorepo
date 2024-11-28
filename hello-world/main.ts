export const helloWorld = () => {
  console.log("Main?", import.meta.main);
  return "Hello, World!";
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(helloWorld());
}
