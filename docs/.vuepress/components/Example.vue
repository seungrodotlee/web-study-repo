<template>
  <div class="example">
    <div class="grow-example" v-if="mode === 'grow'">
      <div>1</div>
      <div :class="grow[0] ? 'flex-grow' : ''">2</div>
      <div :class="grow[1] ? 'flex-grow-2' : ''">3</div>
    </div>
    <button class="grow-btn" @click="toggleGrow(0)">
      {{ grow[0] ? "undo grow on item 2..." : "flex grow on item 2!" }}
    </button>
    <button class="grow-btn" @click="toggleGrow(1)">
      {{ grow[1] ? "undo grow-2 on item 3..." : "flex grow-2 on item 3!" }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {
      grow: [false, false],
    };
  },
  methods: {
    toggleGrow(idx) {
      //this.grow[idx] = !this.grow[idx];
      this.$set(this.grow, idx, !this.grow[idx]);
      console.log(this.grow);
    },
  },
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.flex-grow-2 {
  flex-grow: 2;
}

.grow-example {
  display: flex;
  width: 500px;
  padding: 16px;
  background: #3a3a3a;
}

.grow-example > div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background: #eaeaea;
}

.grow-example > div + div {
  margin-left: 16px;
}

.grow-example,
.grow-example div {
  border-radius: 8px;
}

.grow-btn {
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
