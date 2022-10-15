<template>
	<header>
		<router-link to="/">
			<span id="logo">wise quotes</span>
		</router-link>
	</header>
	<main>
		<div class="container">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
