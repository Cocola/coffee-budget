<template>
  <section class="hero is-fullheight is-dark is-bold">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <h1 class="title is-6">
                {{ $t('home.title') }}
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div>
          <div class="title is-6">{{ $t('coffee.amount') }}</div>
          <div class="coffee__amount">
            {{ coffeeAmount }} <span class="coffee__icon">☕️</span>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column">
            <button class="button" @click="removeCoffee">
              {{ $t('coffee.drink') }}
            </button>
          </div>
          <div class="column">
            <button class="button" @click="addCoffee">
              {{ $t('coffee.buy') }}
            </button>
          </div>
        </div>
        <div :class="{ 'is-warning': coffeeAmount <= -1 }">
          {{ $t('coffee.budget') }}
          {{ (coffeeAmount * coffeePrice).toFixed(2) }} €
        </div>
        <div v-if="coffeeAmount <= -1" class="notification is-warning is-bold">
          {{ $t('coffee.warn') }}
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column">
            <p>
              {{ $t('coffee.price') }}
              {{ coffeePrice.toFixed(2) }} €
            </p>
            <div class="columns is-mobile">
              <div class="column">
                <button class="button is-small is-dark" @click="togglePrice">
                  {{ $t('coffee.edit') }}
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
.hero-body .button {
  background-color: transparent;
  color: currentColor;
}
.coffee__amount {
  font-size: 8rem;
  font-weight: 900;
}
.coffee__icon {
  font-size: 5rem;
}
input[type='number'] {
  display: inline-block;
  width: 4rem;
}
.hero-head .container,
.hero-foot .container {
  padding: 1rem;
}
</style>
