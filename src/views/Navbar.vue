
<template>
    <nav class="app-nav">
      <a v-link="{ name: 'home', exact: true }">首页</a>
      <a v-link="{ path: '/nofound' }">404</a>
    </nav>
</template>

<style lang="sass">
	.app-nav{
		
	}
</style>