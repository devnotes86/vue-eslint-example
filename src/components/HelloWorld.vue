<script >
import { ref } from 'vue'
import InstallInstructions from './InstallInstructions.vue'

//  defineProps<{ msg: string }> ();


//const count = ref(0)

export default {
  components: {InstallInstructions},
  props: ['msg'],
  data() {
    return{
      count: ref(0)
    }
  }

}
</script>


<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

<InstallInstructions title="Install Instructions"></InstallInstructions>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>