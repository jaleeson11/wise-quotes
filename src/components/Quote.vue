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
			apiUrl: 'https://zenquotes.io/api/quotes/87760ffa56466064fb19913cb8a5ca7e7dc08a07&keyword='
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
			if (this.quotes.length) {
				const quote = this.quotes[this.randomIndex];
				quote.h = quote.h.concat(this.buildTweetLink(quote));
				return quote.h;
			}

			return '';
		}
	},
	methods: {
		getRand() {
			const quote = document.getElementById('quote');
			quote.classList.remove('quote--fade-in');
			quote.classList.add('quote--fade-out');

			setTimeout(() => {
				this.shuffleQuote();
				quote.classList.remove('quote--fade-out');
				quote.classList.add('quote--fade-in');
			}, 2000);
		},
		shuffleQuote() {
			const newIndex = Math.floor(Math.random() * this.quotes.length);
			this.randomIndex !== newIndex ? this.randomIndex = newIndex : this.shuffleQuote();
		},
		buildTweetLink(quote) {
			let tweetQuery = 'tweet?text=';

			const words = quote.q.split(' ');
			words.forEach((word, index) => {
				if (index == 0) {
					tweetQuery = tweetQuery.concat('%22', word);
					return;
				}

				tweetQuery = tweetQuery.concat('+', word);

				if (index == words.length - 1) {
					tweetQuery = tweetQuery.concat('%22');
				}
			});

			tweetQuery = tweetQuery.concat('+', '-');
			quote.a.split(' ').forEach((name) => {
				tweetQuery = tweetQuery.concat('+', name);
			});

			return '<a href="https://twitter.com/intent/' +
			tweetQuery + '" target="_blank"></a>';
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
			