<template>
  <div class="example">
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
      <div class="shrink-example">
        <div style="flex-shrink: 0">1</div>
        <div style="width: 100px;">
          2
        </div>
        <div :class="shrink[1] ? 'flex-shrink-2' : ''" style="width: 200px;">
          3
        </div>
      </div>
      <div class="flex">
        <button class="example-btn" @click="toggleShrink(1)">
          {{
            shrink[0]
              ? "undo flex-shrink on item 3"
              : "flex-shrink: 2 on item 3"
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {
      grow: [false, false],
      shrink: [false, false],
    };
  },
  methods: {
    toggleGrow(idx) {
      //this.grow[idx] = !this.grow[idx];
      this.$set(this.grow, idx, !this.grow[idx]);
      console.log(this.grow);
    },
    toggleShrink(idx) {
      this.$set(this.shrink, idx, !this.shrink[idx]);
      console.log(this.shrink);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}

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

.shrink-example {
  animation: shrink-container infinite 2s;
  animation-direction: alternate;
}

@keyframes shrink-container {
  from {
    width: 500px;
  }

  to {
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
</style>
