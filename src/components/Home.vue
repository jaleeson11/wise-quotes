<template>
	<div>
		<section id="intro">
			<p>Quotes have the power to motivate, encourage, and inspire. They can provide us with wisdom and insight into the true nature of what we're experiencing in life. And perhaps most importantly they can light the way in times of diffculty. To find a quote that resonates with your circumstances or how your're feeling, choose a keyword from the list below:</p>
		</section>
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
