<template>
    <div
      class="avatar-box"
      :style="{
        backgroundColor: src ? '' : color,
        height: size+'px',
        width: size+'px'
      }"
    >
    <img v-if="src" :src="src" loading="lazy"/>
     <template v-else>
        {{text}}
     </template>
    </div>
</template>

<script>
export default {
     props: {
        size: {
            type: [Number, String],
            default: 30
        },
        color: {
            type: String,
            default: "#fff"
        },
        src: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        }
     },   
}
</script>
<style scoped>
.avatar-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  color: #fff;
  cursor: pointer;
}

.avatar-box img {
  border-radius: inherit;
  display: inline-flex;
  height: inherit;
  width: inherit;
  background-size: cover;
}

</style>