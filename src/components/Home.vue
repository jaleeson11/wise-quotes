<template>
	<div>
		<section id="intro">
			<p>Inspiring quotes have the power to give us perspective in times of difficulty and provide us with insight into what we're going through in life.</p>
		</section>
		<h3>What keyword best describes how you're feeling?</h3>
		<section id="keywords">
			<router-link v-for="(keyword, index) in keywords" :key="index" :to="{ name: 'quote', params: { keyword: keyword } }" class="keyword">
				<span>{{ keyword }}</span>
			</router-link>
		</section>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
	return {
		keywords: [
			'love',
			'life',
			'happiness',
			'fear',
			'failure',
			'inspiration',
			'pain',
			'past',
			'courage',
			'forgiveness',
			'kindness',
			'change'
		]
	}
  }
}
</script>
