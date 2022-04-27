<template>
  <div class="state">
    <div class="title__state" :style="currentStyle" @click="showItens">
      <span> {{ title }}</span>
    </div>
    <div class="content__state" v-if="isMobile && showItensMobile">
      <slot />
    </div>
    <div class="content__state" v-if="!isMobile">
      <slot />
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";
export default {
  props: {
    title: { type: String, default: "Insira o título", required: true },
    color: { type: String, default: "transparent" },
  },
  setup(props) {
    const isMobile = inject("isMobile");
    const showItensMobile = ref(false);
    const currentStyle = {
      "border-top": `4px solid ${props.color}`,
    };

    const showItens = () => {
      if (isMobile) {
        showItensMobile.value == true
          ? (showItensMobile.value = false)
          : (showItensMobile.value = true);
      }
    };
    return { currentStyle, isMobile, showItens, showItensMobile };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";

.state {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title__state {
    padding: 1.1rem;
    background: white;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);

    span {
      font-weight: 600;
      font-size: 0.95em;
    }
  }
  .content__state {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
}

@media screen and (max-width: 505px) {
  .state {
    .title__state {
      cursor: pointer;
    }
  }
}
</style>
