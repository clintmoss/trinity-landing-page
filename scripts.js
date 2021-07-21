
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ] ).mount();
}

new Splide( '.splide', {
	perPage: 3,
	breakpoints: {
		'576': {
			perPage: 2
		},
    '768': {
      perPage: 4
    }
	}
} ).mount();