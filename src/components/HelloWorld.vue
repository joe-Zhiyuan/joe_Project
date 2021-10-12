<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  prop() {},
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res:', res)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
})
// 基础类型
let uname: string = '乔'
uname = 'joe'
let score1: number = 50
let score2: number = 42.55
let sum = score1 + score2
let sun: string = '1'
sun = sum as any
// Symbol类型
let only: Symbol = Symbol(18)
// BigInt类型
let bigInt: BigInt = BigInt(Number.MAX_SAFE_INTEGER)
// 数组类型
let arr1: number[] = [1, 2, 3]
let arr2: Array<any> = [1, '2', { name: 'joe' }]
// 类数组类型
// eslint-disable-next-line no-unused-vars
function sum2(...arg: any[]) {
  // eslint-disable-next-line prefer-rest-params
  let args: IArguments = arguments
  for (let i = 0; i < args.length; i += 1) {
    const element = args[i]
    console.log(element)
  }
}
sum2(1, 2, '3', 4, '5')
console.log(uname, sum, typeof sun, only, bigInt, arr1, arr2)
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->
  <!-- <ul>
    {{
      item
    }}
  </ul> -->
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
