<template>
  <div>
    <transition name="fade" appear>
      <div v-if="show">これが消えていく</div>
    </transition>
    <transition name="fade2">
      <div v-if="show">これが消えていく</div>
      <div v-else>これが現れる</div>
    </transition>
    <transition-group>
      <div v-for="item in items" :key="item">
        <p>{{ item }}</p>
      </div>
    </transition-group>
    <transition enter-active-class="animate__animated animate__bounce" appear>
      <p>konnnitihha</p>
    </transition>
    <button @click="show = !show">button</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      show: true,
      items: ["appple", "banana", "orange", "grep"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter {
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れるときのトランザクションの状態 */
  transition: opacity 5s;
}
.fade-enter-to {
  /* 現れるときの最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消えるときけい */
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 5s;
  animation: slide-in 0.5s reverse;
}
.fade-leave-to {
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
  }
}
.fade2-enter {
}
.fade2-enter-active {
  animation: slide-in 0.5s;
}
.fade2-enter-to {
}
.fade2-leave {
}
.fade2-leave-active {
}
.fade2-leave-to {
}
</style>
