(function( fbopen, $, undefined ) { // http://stackoverflow.com/q/5947280/185839
  
  fbopen_config = {
  	 //API_SERVER: '//localhost' // Point to wherever you're running your fbopen API server
  	API_SERVER: '//api.data.gov/gsa/fbopen' // Point to wherever you're running your fbopen API server
  	, API_PARAMS: { // any additional parameters that need to be passed to the API server, e.g., an api key
  		'api_key': 'K6zrCepxUEMeci1q6ZOZ4W5LtA8u1apq8xLqbnm8'
  	} 
  }

}( window.fbopen = window.fbopen || {}, jQuery ));