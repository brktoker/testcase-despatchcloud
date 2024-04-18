<template>
  <div id="searchmenu">
    <button
      class="searchmenu__btn !z-50"
      @click="$emit('openSidebar', 'navSearch')"
      :class="{ active: visibleNavSearch }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="-scale-x-100"
        width="28"
        height="24"
        viewBox="0 0 24 24"
        v-if="!visibleNavSearch"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
        >
          <path
            stroke-dasharray="16"
            stroke-dashoffset="16"
            d="M10.5 13.5L3 21"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="16;0"
            />
          </path>
          <path
            stroke-dasharray="40"
            stroke-dashoffset="40"
            d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="40;0"
            />
          </path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="24"
        viewBox="0 0 24 24"
        class="-scale-x-100"
        v-if="visibleNavSearch"
      >
        <g stroke="currentColor" stroke-linecap="round" stroke-width="2">
          <path
            fill="none"
            stroke-dasharray="16"
            stroke-dashoffset="16"
            d="M10.5 13.5L3 21"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="16;0"
            />
          </path>
          <path
            fill="currentColor"
            fill-opacity="0"
            stroke-dasharray="40"
            stroke-dashoffset="40"
            d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="40;0"
            />
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.6s"
              dur="0.5s"
              values="0;1"
            />
          </path>
        </g>
      </svg>
    </button>
    <transition name="translateX">
      <nav v-show="visibleNavSearch" class="w-full fixed top-0 left-0 z-20">
        <div class="w-full h-screen bg-white flex flex-col relative py-16 px-4">
          <div class="relative w-full border-t py-4">
            <input
              type="text"
              class="p-2 font-lato rounded-full placeholder:text-gray-500 w-full pl-5 bg-[#f1f1f1] text-current italic !font-light text-[15px] focus-within:outline-none"
              :placeholder="$t('search')"
            />
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
const { visibleNavSearch } = defineProps<{
  visibleNavSearch: boolean;
}>();
</script>

<style lang="scss" scoped>
#searchmenu {
  .searchmenu {
    &__btn {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 50px;
      height: 50px;
      background: rgb(255 255 255 / 1);
      border: none;
      position: relative;
      z-index: 100;
      appearance: none;
      cursor: pointer;
      outline: none;
    }
  }
}

.translateX-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
