<template>
  <ol>
    <slot />
  </ol>
</template>

<style scoped>
ol {
  list-style: decimal;
  padding-left: 1.5em;
}

li {
  margin-bottom: 0.5em;
}
</style>