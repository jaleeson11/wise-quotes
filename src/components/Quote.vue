<template>
	<div>
		<div id="quote" v-html="quote"></div>
		<button id="refreshButton" @click="getRand()">
			<img src="@/assets/images/arrows-rotate-solid.svg" alt="Refresh Icon">
		</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Quote',
	data() {
		return {
			quotes: [],
			randomIndex: 0,
			keyword: '',
			apiUrl: 'https://zenquotes.io/api/quotes/8b89127121ee1b71a8abea23ec59560b9756773c&keyword='
		}
	},
	created() {
		this.keyword = this.$route.params.keyword;
	},
	async mounted() {
		await axios.get(this.apiUrl + this.keyword)
		.then(function (response) {
			this.quotes = response.data;
		}.bind(this)).catch(function (error) {
			console.error(error);
		});
	},
	computed: {
		quote() {
			return this.quotes.length ? this.quotes[this.randomIndex].h : '';
		}
	},
	methods: {
		getRand() {
			const quote = document.getElementById('quote');
			quote.classList.remove('quote--fade-in');
			quote.classList.add('quote--fade-out');

			setTimeout(() => {
				this.getQuote();
				quote.classList.remove('quote--fade-out');
				quote.classList.add('quote--fade-in');
			}, 2000);
		},
		getQuote() {
			const newIndex = Math.floor(Math.random() * this.quotes.length);
			this.randomIndex !== newIndex ? this.randomIndex = newIndex : this.getQuote();
		}
	}
}
</script>

<style scoped>
	body {
		position: relative;
		height: 100vh;
	}
</style>
			