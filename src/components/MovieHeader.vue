<template>
  <header id="header">
    <div class="movieHeader__port">
      <ul>
        <li><router-link to="/">Vue.js</router-link></li>
        <li class="active"><router-link to="/">Movie</router-link></li>
        <li><router-link to="/">TV</router-link></li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss">
#header {
  position: fixed;
  height: 80px;
  left: 0;
  top: 0%;
  overflow: hidden;
  z-index: 1200;
  color: #fff;
  border-bottom: 1px solid #2e2e30;
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', 'Chosunilbo_myungjo';
  font-weight: 500;
  background: #000;

  .movieHeader__port ul {
    display: flex;
    padding-left: 100px;
    li {
      margin-right: 30px;
      font-size: 25px;

      &.active {
        border-bottom: 3px solid #fff;
      }
    }
  }
}
</style>
