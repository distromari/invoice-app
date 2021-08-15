<template>
  <div>
    <div v-if="!mobile" class="app flex flex-column">
      <Navigation />
      <div class="app-content flex flex-column">
        <router-view />
      </div>
    </div>
    <div v-else class="mobile-message flex flex-column">
      <h2>Sorry, this app is not supported on Mobile Devices.</h2>
      <p>To use this app, please use a computer or Tablet.</p>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import '@/assets/scss/main.scss'
export default {
  data() {
    return {
      mobile: null
    }
  },
  components: {
    Navigation
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if(windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
</style>