<template>
  <header class="mint-header" :class="{ 'is-fixed': fixed }">
    <div class="mint-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="mint-header-title" v-text="title"></h1>
    <div class="mint-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop({ default: false })
  fixed!: boolean;

  @Prop(String)
  title!: string;
}
</script>

<style lang="scss">
.mint-header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f7624f;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 28px;
  height: 90px;
  line-height: 1;
  padding: 0 20px;
  position: relative;
  text-align: center;
  white-space: nowrap;

  .mint-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;

    &:after {
      content: none;
    }
  }
}

.mint-header.is-fixed {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
}

.mint-header-button {
  -webkit-box-flex: 0.5;
  -ms-flex: 0.5;
  flex: 0.5;

  > a {
    color: inherit;
  }
}

.mint-header-button.is-right {
  text-align: right;
}

.mint-header-button.is-left {
  text-align: left;
}

.mint-header-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  font-weight: 400;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
