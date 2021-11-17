<template>
  <header id="header">
    <div class="header__port">
      <router-link to="/Portfolio">Portfolio</router-link>
    </div>
    <div class="header__logo">
      <router-link to="/">SONGJIWON</router-link>
    </div>
    <nav class="header__menu">
      <ul>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Reference">Reference</router-link></li>
        <li><router-link to="/Youtube">Youtube</router-link></li>
        <li><router-link to="/Script">Script</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
      </ul>
      <a href="/" class="ham">
        <span class="sr-only">menu</span>
      </a>
    </nav>
  </header>
</template>

<style lang="scss">
// #header
// #main
// #footer

// container
.container {
  width: 1400px;
  margin: 0 auto;
  position: relative;
}

// wrap__title
.wrap__title {
  padding: 18rem 0 15rem;

  h2 {
    color: #fff;
    font-size: 10vmax;
    line-height: 0.85;
    letter-spacing: -0.0275em;
    font-family: 'saol';
    text-transform: uppercase;

    strong,
    em {
      display: block;
      padding-top: 10px;
    }
  }
}

// header
#header {
  position: fixed;
  left: 0;
  top: 0%;
  overflow: hidden;
  z-index: 1200;
  width: 100%;
  color: #fff;
  border-bottom: 1px solid #2e2e30;
  display: flex;
  align-items: center;
  font-family: 'Rajdhani', 'Chosunilbo_myungjo';
  font-weight: 500;
  background: #000;

  .header__port {
    flex: 1 1 35%;
    padding-left: 1rem;

    a {
      position: relative;
      padding-left: 10px;

      &::before {
        content: '';
        width: 5px;
        height: 5px;
        background: #fff;
        position: absolute;
        left: 0;
        top: 3px;
        border-radius: 50%;
      }

      &::after {
        content: '';
        width: 5px;
        height: 5px;
        background: #fff;
        position: absolute;
        left: 0;
        top: 11px;
        border-radius: 50%;
      }
    }
  }
  .header__logo {
    flex: 1 1 30%;
    text-align: center;
    margin: 1.5rem;

    a {
      font-size: 1.8rem;
      line-height: 1;
      font-family: 'Playfair Display';
    }
  }
  .header__menu {
    flex: 1 1 35%;
    text-align: right;
    padding-right: 1rem;

    li {
      display: inline;

      a {
        display: inline-block;
        padding: 5px;
      }
    }
    .ham {
      display: inline-block;
      display: none;
      width: 40px;
      height: 40px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 10px;
        width: 8px;
        height: 8px;
        background: #fff;
        box-shadow: 0 12px 0 #fff;
      }
      &::after {
        content: '';
        position: absolute;
        right: 10px;
        top: 10px;
        width: 8px;
        height: 8px;
        background: #fff;
        box-shadow: 0 12px 0 #fff;
      }
    }
  }
}

// contact__info
.contact__info {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000;
  color: #fff;
  border-top: 1px solid #2e2e30;

  p {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 80px;
    font-family: 'Rajdhani';
  }

  h3 {
    font-size: 9vw;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 5rem;
    font-family: 'saol';
  }

  a {
    color: #000;
    background: #f0eeeb;
    border-radius: 50px;
    padding: 18px 53px;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Rajdhani';
  }
}

//light version
.light #header,
.light #main,
.light #aboutCont,
.light #referCont,
.light #scriptCont,
.light #youtubeCont,
.light #footer {
  background: #f0eeeb;
}
.light #header {
  color: #000;
  border-bottom: 1px solid #dad8d1;
}
.light #header .header__port a::before,
.light #header .header__port a::after {
  background: #000;
}
.light #footer {
  border-top: 1px solid #dad8d1;
  color: #000;
}
.light #footer div:nth-child(1),
.light #footer div:nth-child(2) {
  border-right: 1px solid #dad8d1;
}
.light .wrap__title h2 {
  color: #000;
}
.light .about__cont .about__txt {
  color: #000;
}
.light .refer__cont .table {
  border-color: #000;
}
.light .refer__cont .table h3 {
  color: #000;
}
.light .refer__cont .table li {
  border-top-color: #000;
}
.light .refer__cont .table li span {
  color: #000;
}
</style>
