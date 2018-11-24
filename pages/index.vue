<template>
  <section class="container">
    <div class="content">
      <AreaBasic/>
    </div>
  </section>
</template>

<script>
import AreaBasic from '~/components/AreaBasic.vue'

export default {
  components: {
    AreaBasic,
  },
  transition: {
    enterActiveClass: "animated rotateInUpRight faster",
    leaveActiveClass: "animated rotateOutUpRight faster"
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/variables.scss';

.container {

  width: 100%;
  height: 100%;
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  width: $viz-width;
  cursor: pointer;
}

.toD3 {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 22px;
}

// .test-enter {
//   opacity: 0;
//   transform: translateY(-500px);
//   transition: all 4s;
// }
// .test-enter-to {
//   opacity: 1;
//   transform: translateY(0);
//   transition: all 0.6s;
// }
</style>
