
<script>


export default {
  components: {},
  props: ['title', 'prop2'],
  data() {
    return {
      isLoading: false,
      installVisible: false,
      message1: 'Message that is not used anywhere',
      message2: 'Click on the Vite and Vue logos to learn more'
    }
  },
  computed: {

  },
  methods: {

    showInstallInstructions(){
      this.installVisible = true;
    },

    someMethod() { // this method is not used anywhere
      const x = 1;
      const text= "custom text";
      return text;
    }
  },
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p v-if="!installVisible"><button @click="showInstallInstructions()"> Show install instructions</button></p>

    <p v-if="installVisible">
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">{{messsage2}}</p>
  </div>
</template>

