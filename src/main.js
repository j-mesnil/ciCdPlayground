import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Jonathan du Mesnil",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Not much, really"],
    // Which CI/CD tools do you use in your project?
    tools: "Nothing yet",
    // What do you want to learn in this workshop?
    expectations: ["To get a broad overview over the field"],
  },
});
