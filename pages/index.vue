<template>
  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <h1 class="title is-6">
                Manage your daily dose of coffee ☕️
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div>
          <div class="title is-6">Coffee Amount :</div>
          <div class="coffee__amount">
            {{ coffeeAmount }} <span class="coffee__icon">☕️</span>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">
            <button class="button" @click="removeCoffee">Drink a Coffee</button>
          </div>
          <div class="column">
            <button class="button" @click="addCoffee">Buy a Coffee</button>
          </div>
        </div>
        <div :class="{ 'is-warning': coffeeAmount <= -1 }">
          Coffee Budget : {{ (coffeeAmount * coffeePrice).toFixed(2) }} €
        </div>
        <div v-if="coffeeAmount <= -1" class="notification is-warning is-bold">
          Be careful, you need to pay back your coffee 😉
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column">
            <p>Coffee Price : {{ coffeePrice.toFixed(2) }} €</p>
            <div class="columns is-mobile">
              <div class="column">
                <button class="button is-small is-dark" @click="togglePrice">
                  Edit Coffee price
                </button>
              </div>
              <div v-show="showPriceInput" class="column">
                <input
                  v-model.number="coffeePrice"
                  type="number"
                  class="input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      coffeeAmount: 0,
      coffeePrice: 0.3,
      showPriceInput: false
    }
  },
  watch: {
    coffeeAmount(amount) {
      localStorage.coffeeAmount = amount
    }
  },
  mounted() {
    if (localStorage.coffeeAmount) {
      this.coffeeAmount = localStorage.coffeeAmount
    }
  },
  methods: {
    addCoffee() {
      return this.coffeeAmount++
    },
    removeCoffee() {
      return this.coffeeAmount--
    },
    togglePrice() {
      !this.showPriceInput
        ? (this.showPriceInput = true)
        : (this.showPriceInput = false)
    }
  }
}
</script>

<style>
.coffee__amount {
  font-size: 8rem;
  font-weight: 900;
}
.coffee__icon {
  font-size: 5rem;
}
input[type='number'] {
  display: inline-block;
  width: 3rem;
}
.hero-head .container,
.hero-foot .container {
  padding: 1rem;
}
</style>
