module.exports = {
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