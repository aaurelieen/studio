<template>
  <div class="main">
  <div class="container">
    <div class="header">
				<ul>
          <li>
            <a href="https://twitter.com/aaurelieen" rel="noopener norefer" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/anwh.studio/" rel="noopener norefer" target="_blank">Instagram</a>
          </li>
      </ul>
    </div>
    <div class="text">
      <p>Independent Web Design & Development Studio.<br/>Based in Paris, specializing in Development and Webdesign.</p>
    </div>
    <div class="contact">
        <p>Let’s talk !<br>N’hésitez pas à nous contacter par mail.</p>
        <a href="/">Contact us</a>
    </div>
    <div class="copy">
				<p>Copyright 2022 by ANWH Studio All Rights Reserved</p>
			</div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .main {
  margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  padding-bottom: 2.5rem;
  padding-top: 2rem;
  
  .container {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    
    background-color: rgb(234 233 232 / var(--tw-bg-opacity));
    border-radius: 0.75rem;
    
    .header {
      display: flex;
      justify-content: center;
      
      ul {
        display: flex;
        margin: -0.25rem;
        
        li {
          margin: 0.25rem;
          
          a {
            text-transform: uppercase;
          padding: 10px 40px;
          border: solid 1px;
          border-radius: 30px;
          border-radius: 4vw;
          font-size: 0.8rem;
            color: rgb(36 32 33 / var(--tw-text-opacity));
          }
        }
      }
    }
    .text {
      margin-top: calc(1.25rem + 2.5rem);
    margin-bottom: 2.5rem;
      padding-left: 0.75rem;
    padding-right: 0.75rem;
      
      p{
    color: rgb(36 32 33 / var(--tw-text-opacity));
        letter-spacing: -0.01em;
        text-transform: uppercase;
        text-align: center;
        font-size: clamp(3.125rem, calc(3.125rem + ((1vw - 3.75px) * 3.2362)), 6.25rem);
    line-height: 0.9;
      }
    }

    .contact {
        text-align: center;
      padding-left: 0.75rem;
    padding-right: 0.75rem;

    p {
        color: rgb(147 147 147 / var(--tw-text-opacity));
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        margin-bottom: .5rem;
    }
    a {
        background-color: rgb(253 77 46 / var(--tw-bg-opacity));
        color: rgb(255 255 255 / var(--tw-text-opacity));
        display: inline-flex;
        align-items: center;
        border-radius: 9999px;
    border-width: 1px;
    border-color: currentColor;
    padding: 1rem;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: uppercase;
    line-height: 1;
    transition: all 200ms ease-in-out;
    &:hover {
        opacity: 1;
        transform: scale(1.2);
    }
    }
    }
    
    .copy {
      text-align: center;
      padding-left: 0.75rem;
    padding-right: 0.75rem;
      margin-top: 2.5rem;
      
      p{
    color: rgb(147 147 147 / var(--tw-text-opacity));
        text-transform: uppercase;
        font-size: 0.75rem;
    line-height: 1rem;
      }
    }
  }
}
</style>