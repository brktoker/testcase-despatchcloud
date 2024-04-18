<template>
  <div id="sidemenu">
    <button
      class="sidemenu__btn"
      @click="$emit('openSidebar', 'navMenu')"
      :class="{ active: visibleNavMenu }"
    >
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
    <transition name="translateX">
      <nav v-show="visibleNavMenu" class="w-full fixed top-0 left-0 z-10">
        <div class="w-full h-screen bg-white">
          <NavMenu class="flex lg:hidden" />
        </div>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import NavMenu from "../Navbar/Menu.vue";

const { visibleNavMenu } = defineProps<{
  visibleNavMenu: boolean;
}>();
</script>

<style lang="scss" scoped>
#sidemenu {
  .sidemenu {
    &__btn {
      display: block;
      width: 50px;
      height: 50px;
      background: rgb(255 255 255 / 1);
      border: none;
      position: relative;
      z-index: 100;
      appearance: none;
      cursor: pointer;
      outline: none;

      span {
        display: block;
        width: 20px;
        height: 2px;
        margin: auto;
        background: black;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all 0.4s ease;

        &.top {
          transform: translateY(-8px);
        }

        &.bottom {
          transform: translateY(8px);
        }
      }
      &.active {
        .top {
          transform: rotate(-45deg);
        }
        .mid {
          transform: translateX(-20px) rotate(360deg);
          opacity: 0;
        }
        .bottom {
          transform: rotate(45deg);
        }
      }
    }

    &__item {
      a {
        text-decoration: none;
        line-height: 1.6em;
        font-size: 1.6em;
        padding: 0.5em;
        display: block;
        color: black;
        transition: 0.4s ease;

        &:hover {
          background: lightgrey;
          color: dimgrey;
        }
      }
    }
  }
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
