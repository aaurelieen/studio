<template>
<header>
  <NuxtLink to="/" class="logo">
    <img src="@/assets/img/logo.svg" />
  </NuxtLink>
  <nav>
    <ul>
      <li class="link"><NuxtLink to="/work">Work</NuxtLink></li>
      <li class="link"><NuxtLink to="/" >About</NuxtLink></li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    header {
  height: 100px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;

  .logo {
    font-size: clamp(
      1.875rem,
      calc(1.875rem + ((1vw - 3.75px) * 2.0712)),
      3.875rem
    );
    line-height: 2.75rem;
    position: relative;

    img {
      width: 100px;
    }
  }

  nav {
    display: block;
    li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 15px;
      }

      a {
        text-decoration: none;
        @media (min-width: 901px) {
          text-transform: uppercase;
          padding: 10px 40px;
          border: solid 1px;
          border-radius: 30px;
          border-radius: 4vw;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>