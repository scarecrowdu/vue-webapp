<template>
  <footer class="footer-container">
    <nav>
      <router-link v-for="nav in data" :key="nav.id" :to="nav.path" exact>
        <icon :name="nav.icon"></icon>
        <p>{{ nav.name }}</p>
      </router-link>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop(Array)
  private data!: StoreState.Navs[];
}
</script>

<style scoped lang="scss">
.footer-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  background-color: #ffffff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #f8f8f8;
  padding: 0 40px;
  padding-top: 4px;
  box-shadow: 0 0 5px 0 hsla(0, 6%, 78%, 0.3);

  nav {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    a {
      font-size: 24px;
      color: #333;
      padding: 10px 0;

      svg {
        font-size: 38px;
      }

      p {
        margin-top: 10px;
      }
    }
  }

  .router-link-active {
    svg,
    p {
      color: red;
    }
  }
}
</style>
