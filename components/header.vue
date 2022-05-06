<template>
<header>
  <a href="/" class="logo">
    ANWH
    </a>
  <nav>
    <ul>
      <li class="link"><a href="/">Work</a></li>
      <li class="link"><a href="/">About</a></li>
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
    font-size: clamp(1.875rem, calc(1.875rem + ((1vw - 3.75px) * 2.0712)), 3.875rem);
    line-height: 2.75rem;
    position: relative; 
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