<template>
  <MovieHeader />
  <main id="main2">
    <section id="section01">
      <div class="bg">
        <div class="container">
          <div class="movie__cont">
            <div class="img">
              <img src="../assets/img/movieImg.png" alt="movie" />
            </div>
            <div class="detail">
              <h2>이터널스</h2>
              <h3>2021 • 157분 • 액션/모험/SF</h3>
              <h4>★★★☆☆ <strong>5.7</strong></h4>
              <p>
                수 천년에 걸쳐 그 모습을 드러내지 않고 살아온 불멸의 히어로들이
                "어벤져스: 엔드게임" 이후 인류의 가장 오래된 적 '데비안츠'에
                맞서기 위해 다시 힘을 합치면서 벌어지는 이야기
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="blue">
      <div class="content">
        <h2>Responsive Display</h2>
        <div class="slider responsive">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <div>
              <iframe
                width="100%"
                src="//www.youtube.com/embed/ubGpDoyJvmI"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- //movieCont -->
  </main>
  <Footer />
</template>
<script>
import MovieHeader from '@/components/MovieHeader.vue';
import Footer from '@/components/Footer.vue';
import dotenv from 'dotenv';
dotenv.config();
export default {
  components: {
    MovieHeader,
    Footer,
  },
};
</script>

<style lang="scss">
#main2 {
  background: #000;
  margin-top: 80px;
}
#section01 {
  width: 100vw;
  background: url(../assets/img/movieBackImg.png) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSans';
  .bg {
    background: rgba(0, 0, 0, 0.376);
    width: 100vw;
  }
}
.container {
  width: 90%;
  margin: 0 auto;
  position: relative;
}
.movie__cont {
  margin-top: 100px;
  display: flex;
  .img {
    flex: 30%;

    img {
      width: 400px;
    }
  }
  .detail {
    flex: 70%;
    color: #fff;
    padding-left: 30px;
    h2 {
      font-size: 80px;
      font-weight: 400;
    }
    h3 {
      font-size: 22px;
      font-weight: 400;
      padding-bottom: 20px;
    }
    h4 {
      color: #ffba07;
      font-size: 20px;

      strong {
        color: #fff;
      }
    }
    p {
      padding-top: 26px;
      font-size: 22px;
      font-weight: 300;
    }
  }
}

.actorInfo {
}
.actorlist {
}
.actorBox {
  img {
    width: 200px;
  }
}

#section02 {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat (10, 100px);

  h2 {
    font-size: 40px;
    padding: 20px;
  }
}

/* Slider */

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
  &:focus {
    outline: none;
  }
  .slick-loading & {
    background: white url() center center no-repeat;
  }
  &.dragging {
    cursor: pointer;
    cursor: hand;
  }
}

.slick-slider .slick-list,
.slick-track,
.slick-slide,
.slick-slide img {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  zoom: 1;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
  .slick-loading & {
    visibility: hidden;
  }
}

.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
  img {
    display: block;
    &.slick-loading {
      //   background: white url(./ajax-loader.gif) center center no-repeat;
      padding-bottom: 100%;
    }
  }
  display: none;
  &.dragging img {
    pointer-events: none;
  }
  .slick-initialized & {
    display: block;
  }
  .slick-loading & {
    visibility: hidden;
  }
  .slick-vertical & {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
}

/* Icons */

// @charset "UTF-8";

/* Arrows */

.slick-prev,
.slick-next {
  position: absolute;
  display: block;
  height: 20px;
  width: 20px;
  line-height: 0;
  font-size: 0;
  cursor: pointer;
  background: transparent;
  color: transparent;
  top: 50%;
  margin-top: -10px;
  padding: 0;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &.slick-disabled:before {
    opacity: 0.25;
  }
}

.slick-prev:before,
.slick-next:before {
  font-family: 'slick';
  font-size: 20px;
  line-height: 1;
  color: white;
  opacity: 0.85;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
  &:before {
    content: '\2190';
  }
}

.slick-next {
  right: -25px;
  &:before {
    content: '\2192';
  }
}

/* Dots */

.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -45px;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0px;
  width: 100%;
  li {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0px 5px;
    padding: 0px;
    cursor: pointer;
    button {
      border: 0;
      background: transparent;
      display: block;
      height: 20px;
      width: 20px;
      outline: none;
      line-height: 0;
      font-size: 0;
      color: transparent;
      padding: 5px;
      cursor: pointer;
      outline: none;
      &:focus {
        outline: none;
      }
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: '\2022';
        width: 20px;
        height: 20px;
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;
        text-align: center;
        color: black;
        opacity: 0.25;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
    &.slick-active button:before {
      opacity: 0.75;
    }
  }
}

// DEMO styling //////////////////////////////////////////
.content {
  width: 80%;
  margin: auto;
}

.blue,
#features {
  background: #3498db;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(10, 120px);

  h3 {
    background: #fff;
    color: #3498db;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
    border: 1px solid #999;
    width: 120px;
  }
}

/* Dots */

.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -45px;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0px;
  width: 100%;
  li {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0px 5px;
    padding: 0px;
    cursor: pointer;
    button {
      border: 0;
      background: transparent;
      display: block;
      height: 20px;
      width: 20px;
      outline: none;
      line-height: 0;
      font-size: 0;
      color: transparent;
      padding: 5px;
      cursor: pointer;
      outline: none;
      &:focus {
        outline: none;
      }
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: '\2022';
        width: 20px;
        height: 20px;
        font-family: 'slick';
        // font-size: 6px;
        font-size: 20px;
        line-height: 20px;
        text-align: center;
        // color: black;
        color: white;
        opacity: 0.25;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
    &.slick-active button:before {
      opacity: 0.75;
    }
  }
}
</style>
