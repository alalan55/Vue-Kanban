<template>
  <div class="card">
    <div class="card__state">
      <div class="state__ball"></div>
      <div class="state__description">
        <span>{{ states[cardInfo.state] }}</span>
      </div>
    </div>
    <div class="card__description">
      <p>{{ cardInfo.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: { type: Object },
  },
  setup() {
    const states = ["A fazer", "Em progresso", "Feito"];
    return { states };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/sizes.scss";
.card {
  border-radius: 5px;
  padding: 1.5rem 1rem;
  background: white;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.11);
  }

  .card__state {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .state__ball {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: $green-1;
    }
    .state__description {
      span {
        font-weight: 600;
        font-size: 0.8em;
      }
    }
  }
}
</style>