<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <LogoCWPB />
            </div>
            <div class="navbar-item">
              <h1 class="title is-6 is-sr-only">
                {{ $t('home.title') }}
              </h1>
            </div>
            <div class="navbar-item">
              <div class="navbar-end">
                <NuxtLink
                  v-if="$i18n.locale === 'fr'"
                  :to="`/en` + $route.fullPath"
                  class="navbar-item"
                  active-class="none"
                  exact
                >
                  {{ $t('links.english') }}
                </NuxtLink>
                <NuxtLink
                  v-else
                  :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
                  class="navbar-item"
                  active-class="none"
                  exact
                >
                  {{ $t('links.french') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div
        :class="{ 'has-warning': coffeeAmount <= -1 }"
        class="container has-text-centered"
      >
        <div
          v-if="coffeeAmount <= -1"
          class="notification is-warning is-bold content"
        >
          {{ $t('coffee.warn') }}
          <ul>
            <li>{{ $t('coffee.warn_opt_1') }}</li>
            <li>
              <a
                href="https://guichet.coworking-pb.com/cafe"
                target="_blank"
                rel="nofollow noopener noreferrer"
                >{{ $t('coffee.warn_opt_2') }}</a
              >
            </li>
          </ul>
        </div>
        <div class="coffee__card">
          <div
            :class="{ 'has-text-danger': coffeeAmount <= -1 }"
            class="coffee__amount"
          >
            <div class="coffee__text">
              {{ coffeeAmount }}
            </div>
            <div
              :class="{ 'is-warning': coffeeAmount <= -1 }"
              class="coffee__price"
            >
              {{ $t('coffee.budget') }}
              {{ (coffeeAmount * coffeePrice).toFixed(2) }} €
            </div>
            <div class="coffee__bg"></div>
          </div>
          <div class="coffee__bottom">
            <div class="columns is-mobile coffee__buttons">
              <div class="column">
                <button class="button button--remove" @click="removeCoffee">
                  {{ $t('coffee.drink') }}
                </button>
              </div>
              <div class="column">
                <button class="button button--add" @click="addCoffee">
                  {{ $t('coffee.buy') }}
                </button>
              </div>
            </div>
            <div class="columns is-mobile coffee__settings">
              <div class="column">
                <p>
                  {{ $t('coffee.price') }}
                  {{ coffeePrice.toFixed(2) }} €
                </p>
              </div>
              <div class="column is-three-fifths">
                <button class="link" @click="togglePrice">
                  {{ $t('coffee.edit') }}
                </button>
                <div v-show="showPriceInput" class="inline-input">
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
    </div>

    <div class="hero-foot">
      <div class="container has-text-centered">
        {{ $t('home.title') }} - {{ $t('credit.author') }}
        <a href="https://nicolas-fiascaro.com" target="_blank"
          >Nicolas Fiascaro</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import LogoCWPB from '~/static/logo-cwpb.svg?inline'

export default {
  components: {
    LogoCWPB
  },
  head() {
    return {
      title: this.$t('home.title'),
      bodyAttrs: {
        ontouchstart: ''
      }
    }
  },
  data() {
    return {
      coffeeAmount: 0,
      coffeePrice: 0.4,
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