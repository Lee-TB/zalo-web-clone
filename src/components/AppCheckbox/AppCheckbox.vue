<template>
  <input class="AppCheckbox" type="checkbox" :style="{transform: `scale(${props.scale})`}" />
</template>

<script setup lang="ts">
  type AppCheckboxProps = {
    scale?: number
  }
  const props = withDefaults(defineProps<AppCheckboxProps>(),{
    scale: 1.0
  })
</script>

<style scoped>
.AppCheckbox {
  --background-activeness: #0068ff;
  position: relative;
  cursor: pointer;
  appearance: none;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 2px;
  outline: none;
  width: 16px; /* don't change this line, modified scale instead */
  height: 16px; /* don't change this line, modified scale instead */
}

.AppCheckbox:checked {
  background-color: var(--background-activeness);
  border-color: var(--background-activeness);
}

.AppCheckbox:checked.AppCheckbox::after {
  content: '';
  position: absolute;
  left: 4px;
  bottom: 3px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
