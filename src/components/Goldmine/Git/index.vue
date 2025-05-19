<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'GoldmineGit',
  data() {
    return {
      url: 'https://github.com/yxyyyt0801/goldmine-admin'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
