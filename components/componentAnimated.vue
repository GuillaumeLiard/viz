
<template>
  <div class="">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated rubberBand"
    >
      <h1 v-if="show">About</h1>
    </transition>
    <transition
    >
      <button
        type="button"
        name="button"
        @click="show=!show">
        show
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    }
  },
}
</script>
<style scoped lang="scss">
  h1 {

    display: block;
  }
  /* .v-enter {

  }
  .v-enter-to {

  }
  .v-enter-active {
    animated

  }
  .v-leave {

  }
  .v-leave-to {

  }
  .v-leave-active {

  } */
</style>
