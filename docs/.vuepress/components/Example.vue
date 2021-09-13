<template>
  <div class="example">
    <div class="align-example-container" v-if="mode === 'align'">
      <div class="relative w-full rounded-md p-2">
        <strong>align-items: flex-start</strong>
        <div class="align-example flex flex-wrap items-start w-full h-60 rounded-md p-4" style="background: #3a3a3a;">
          <div v-for="i in 6" :key="i" class="w-1/4 h-20 rounded-lg border-2 flex justify-center items-center" style="background: #eaeaea; border-color: #3a3a3a;">1</div>
        </div>
        <strong>align-content: flex-start</strong>
        <div class="align-example flex flex-wrap content-start w-full h-60 rounded-md p-4" style="background: #3a3a3a;">
          <div v-for="i in 6" :key="i" class="w-1/4 h-20 rounded-lg border-2 flex justify-center items-center" style="background: #eaeaea; border-color: #3a3a3a;">1</div>
        </div>
      </div>
    </div>
    <div class="grow-example-container" v-if="mode === 'grow'">
      <div class="grow-example">
        <div>1</div>
        <div :class="grow[0] ? 'flex-grow' : ''">2</div>
        <div :class="grow[1] ? 'flex-grow-2' : ''">3</div>
      </div>
      <div class="flex">
        <button class="example-btn" @click="toggleGrow(0)">
          {{
            grow[0] ? "undo flex-grow on item 2..." : "flex-grow: 1 on item 2!"
          }}
        </button>
        <button class="example-btn" @click="toggleGrow(1)">
          {{
            grow[1] ? "undo flex-grow on item 3..." : "flex-grow: 2 on item 3!"
          }}
        </button>
      </div>
    </div>
    <div class="shrink-example-1-container" v-if="mode === 'shrink'">
      <div ref="shrinkContainer" :class="['shrink-example shrink-anim', shrinkLoop ? '' : 'pause-anim']">
        <div style="flex-shrink: 0">1</div>
        <div ref="shrink1" style="width: 100px;">
          2
        </div>
        <div ref="shrink2" :class="shrink ? 'flex-shrink-2' : ''" style="width: 200px;">
          3
        </div>
      </div>
      <p>컨테이너 크기: {{shrinkContainerSize}}</p>
      <p>Item 넘침의 크기(X): {{overflowedSize}}</p>
      <p>1번 Item 너비: 100px | flex-shrink: 0</p>
      <p>1번 Item 너비: {{shrinkedSize[0]}} | <strong>너비감소값(Y)</strong>: 약 {{ `${100 - parseInt(shrinkedSize[0])}px` }} | flex-shrink: 1 (default)</p>
      <p>1번 Item 너비: {{shrinkedSize[1]}} | <strong>너비감소값(Z)</strong>: 약 {{ `${200 - parseInt(shrinkedSize[1])}px` }} | flex-shrink: {{shrink[1] ? '2' : '1'}}</p>
      <!-- <p><strong>X:Y ratio: {{shrinkRatio[0]}}</strong></p> -->
      <p><strong>Y:X = {{shrink ? "1:5" : "1:3"}}</strong></p>
      <p><strong>Z:X = {{shrink ? "4:5" : "2:3"}}</strong></p>
      <p><small><strong><i>* 계산값은 소수점을 내림한 값입니다.</i></strong></small></p>
      <div class="flex">
        <button class="example-btn" @click="toggleShrink">
          {{
            shrink
              ? "undo flex-shrink on item 3"
              : "flex-shrink: 2 on item 3"
          }}
        </button>
        <button class="example-btn" @click="toggleShrinkLoop">
          {{shrinkLoop ? "stop" : "run" }}
        </button>
      </div>
    </div>
    <div class="callback-example-container" v-if="mode === 'promise'">
      <button :class="['example-btn', isPromiseExampleRunning ? 'pointer-events-none opacity-50' : '']" @click="runPromises()">여기를 눌러 위 코드를 실행시켜보세요</button>
      <textarea ref="promiseTextarea" class="promise-textarea rounded-lg mt-4 border-2 w-full h-32" />
    </div>
    <div class="css-var-example-container rounded-md bg-gray-200 px-6 py-4" v-if="mode === 'css-var'">
      <div class="big-container">
        <p>hello</p>  
      </div>
      <div class="small-container">
        <p>world</p>
      </div>
      <p>i'm seungro</p>
    </div>
    <div class="transition-example-container" style="height: 300px;" v-if="mode === 'transition'">
      <div class="flex justify-center items-center bg-gray-300 rounded-md text-center transition-box">
        마우스를<br />올려보세요!
      </div>
    </div>
    <div class="animation-example-container" v-if="mode === 'animation'">
      <div class="flex">
        <div class="flex justify-center items-center w-32 h-32 bg-gray-100 border-2 border-gray-300">
          <div :class="[animateBall ? 'animation-ball' : '', 'w-24 h-24 rounded-full bg-gray-300 border-2 border-gray-400 shadow-xl']"></div>
        </div>
        <div class="flex justify-center items-center w-32 h-32 bg-gray-100 border-2 border-l-0 border-gray-300">
          <div :class="[animateBall ? 'animation-ball' : '', 'animation-alternate w-24 h-24 rounded-full bg-gray-300 border-2 border-gray-400 shadow-xl']"></div>
        </div>
        <div class="flex justify-center items-center w-32 h-32 bg-gray-100 border-2 border-l-0 border-gray-300">
          <div :class="[animateBall ? 'animation-ball' : '', 'animation-forward w-24 h-24 rounded-full bg-gray-300 border-2 border-gray-400 shadow-xl']"></div>
        </div>
        <div class="flex justify-center items-center w-32 h-32 bg-gray-100 border-2 border-l-0 border-gray-300">
          <div :class="[animateBall ? 'animation-ball' : '', 'animation-infinite animation-alternate w-24 h-24 rounded-full bg-gray-300 border-2 border-gray-400 shadow-xl']"></div>
        </div>
      </div>
      <button class="example-btn" @click="restartAnimation">restart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {
      grow: [false, false],
      shrink: false,
      shrinkLoop: true,
      shrinkContainerSize: "500px",
      overflowedSize: 0,
      shrinkedSize: [0, 0],
      shrinkRatio: [0, 0],
      isPromiseExampleRunning: false,
      animateBall: true,
    };
  },
  methods: {
    toggleGrow(idx) {
      this.$set(this.grow, idx, !this.grow[idx]);
    },
    toggleShrink() {
      this.shrink = !this.shrink;
    },
    toggleShrinkLoop() {
      this.shrinkLoop = !this.shrinkLoop;

      // if(this.shrinkLoop) {
      //   requestAnimationFrame(this.shrinkAnim)
      // }
    },
    shrinkAnim() {
      let shrinkContainer = this.$refs.shrinkContainer;
      let shrinker1 = this.$refs.shrink1;
      let shrinker2 = this.$refs.shrink2;

      let conSizeOrigin = getComputedStyle(shrinkContainer).width;
      let conSize = parseInt(conSizeOrigin);
      let shrinker1Size = getComputedStyle(shrinker1).width;
      let shrinker2Size = getComputedStyle(shrinker2).width;

      this.shrinkContainerSize = conSize + "px";
      this.$set(this.shrinkedSize, 0, parseInt(shrinker1Size) + "px");
      this.$set(this.shrinkedSize, 1, parseInt(shrinker2Size) + "px");
      this.overflowedSize = conSize < 433 ? `${433 - conSize}px` : '0px';

      requestAnimationFrame(this.shrinkAnim);
    },
    runPromises() {
      let textarea = this.$refs.promiseTextarea;
      textarea.value = "";
      this.isPromiseExampleRunning = true;

      let a = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve("hi"), 1000);
        })
      }

      let b = (val) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(`${val} i'm`), 1000);
        })
      }

      let c = (val) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(`${val} seungro`), 1000);
        })
      }

      a()
      .then((result) => {
        textarea.value += `result 1: ${result}\n`;
        return b(result);
      })
      .then((result) => {
        textarea.value += `result 2: ${result}\n`;
        return c(result);
      })
      .then((result) => {
        textarea.value += `result 3: ${result}\n`;
        return "finish!";
      })
      .then((result) => {
        textarea.value += result;
      })
    },
    restartAnimation() {
      this.animateBall = false;
      setTimeout(() => this.animateBall = true, 100);
    }
  },
  mounted() {
    if(this.mode === "shrink") {
      requestAnimationFrame(this.shrinkAnim);
    }
  }
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.flex-grow-2 {
  flex-grow: 2;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-shrink-2 {
  flex-shrink: 2;
}

.shrink-example,
.grow-example {
  display: flex;
  width: 500px;
  padding: 16px;
  background: #3a3a3a;
}

.shrink-anim {
  animation: shrink-container infinite 6s;
  animation-direction: alternate;
}

.pause-anim {
  animation-play-state: paused;
}

@keyframes shrink-container {
  from, 20% {
    width: 500px;
  }

  80%, to {
    width: 200px;
  }
}

.shrink-example > div,
.grow-example > div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background: #eaeaea;
}

.shrink-example > div + div,
.grow-example > div + div {
  margin-left: 16px;
}

.shrink-example,
.shrink-example div,
.grow-example,
.grow-example div {
  border-radius: 8px;
}

.example-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid #bababa;
  margin-top: 16px;
  background: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}

.example-btn + .example-btn {
  margin-left: 16px;
}

.css-var-example-container .big-container {
  --default-font-size: 24px;
}

.css-var-example-container .small-container {
  --default-font-size: 12px;
}

.css-var-example-container p {
  font-size: var(--default-font-size);
}

.transition-box {
  height: 200px;
  width: 200px;
  font-size: 16px;
  transition: height 1s linear 0s, width 1s cubic-bezier(0.7, 0, 0.3, 1) 1s;
}

.transition-box:hover {
  height: 300px;
  width: 300px;
  font-size: 24px;
}

.animation-ball {
  animation-name: anim-ball;
  animation-iteration-count: 3;
  animation-duration: 2s;
}

.animation-alternate {
  animation-direction: alternate;
}

.animation-forward {
  animation-fill-mode: forwards;
}

.animation-infinite {
  animation-iteration-count: infinite;
}

@keyframes anim-ball {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.5);
  }
}
</style>