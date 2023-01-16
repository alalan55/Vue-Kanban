<script setup></script>

<template>
  <div class="card">
    <div class="card__state">
      <div class="skeleton skeleton-text"></div>
    </div>

    <div class="card__title">
      <div class="skeleton skeleton-text"></div>
    </div>

    <div class="card__description">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.card {
  border-radius: 5px;
  padding: 1.5rem;
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

  .skeleton {
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate;
  }
  .skeleton-text {
    width: 100%;
    height: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.125rem;
    &:last-child {
      margin-bottom: 0;
      width: 80%;
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  &__state {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      .state__ball {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: $green-1;
      }

      .state__description {
        span {
          font-weight: 600;
          font-size: 0.6em;
        }
      }
      .completed {
        background: $green-1;
      }
      .progress {
        background: $orange-1;
      }
      .open {
        background: $yellow-1;
      }
    }
    .right {
      display: flex;
      gap: 0.5rem;
      figure {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          cursor: pointer;
        }
      }
    }
  }

  &__title {
    span {
      font-weight: 600;
    }
  }
}
</style>
