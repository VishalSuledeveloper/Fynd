<template>
  <div>
    <label for="input1">Input 1:</label>
    <input id="input1" type="number" v-model="input1" class="input-field">
    <br>
    <label for="input2">Input 2:</label>
    <input id="input2" type="number" v-model="input2" class="input-field">
    <br>
    <button @click="addNumbers" class="operation-button">Add</button>
    <button @click="subtractNumbers" class="operation-button">Subtract</button>
    <button @click="multiplyNumbers" class="operation-button">Multiply</button>
    <button @click="divideNumbers" class="operation-button">Divide</button>
    <br>
    <label>Result:</label>
    <span>{{ result }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: 0,
      input2: 0,
      result: 0
    };
  },
  methods: {
    addNumbers() {
      this.result = parseInt(this.input1) + parseInt(this.input2);
    },
    subtractNumbers() {
      this.result = parseInt(this.input1) - parseInt(this.input2);
    },
    multiplyNumbers() {
      this.result = parseInt(this.input1) * parseInt(this.input2);
    },
    divideNumbers() {
      this.result = parseInt(this.input1) / parseInt(this.input2);
    }
  }
};
</script>

<style>
.input-field {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 16px;
}

.operation-button {
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-right: 5px;
}

span {
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
}
</style>
