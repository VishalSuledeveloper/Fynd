<template>
    <div class="container">
      <h1>Random Number Generator</h1>
      <p>The sum of <span class="number">{{ num1 }}</span> and <span class="number">{{ num2 }}</span> is <span class="number">{{ sum }}</span>.</p>
      <button @click="generateNumbers">Generate Numbers</button>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        num1: 5,
        num2: 5,
        sum: 0
      };
    },
    methods: {
      generateNumbers() {
        this.num1 = Math.floor(Math.random() * 10) + 1;
        this.num2 = Math.floor(Math.random() * 10) + 1;
        this.sum = this.num1 + this.num2;
      }
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .number {
    font-weight: bold;
    color: blue;
  }
  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: blue;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover {
    background-color: darkblue;
  }
  </style>
  