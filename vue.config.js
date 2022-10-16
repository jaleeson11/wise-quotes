module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/wise-quotes/' : '',
	css: {
	    loaderOptions: {
		    scss: {
		  	    additionalData: `
				    @import "~@/sass/style.scss";
				`
		    }
	    }
	}
}