<template>
  <section class="container">
    <div class="content">
      <Chart/>
    </div>
  </section>
</template>

<script>
import Chart from '~/components/Chart.vue'

export default {
  components: {
    Chart
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  width: 500px;  
}
</style>
