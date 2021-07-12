const app = Vue.createApp({
  data() {
    return {
      name: "Haroon Saeed",
      age: 30,
      futureAge: 35,
      image:
        "https://code.visualstudio.com/assets/docs/nodejs/vuejs/welcome-to-vue.png",
    };
  },

  methods: {
    NumGenerator() {
      const randomNumber = Math.random();
      if (randomNumber > 0 && randomNumber < 1) {
        return randomNumber;
      }
    },
  },
});

app.mount("#assignment");
