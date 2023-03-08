aHomeHolder = document.querySelector("#homeLink")
document.querySelector("#homeLink a").addEventListener("click", homeCurrent)
aProductsHolder = document.querySelector("#productsLink")
document.querySelector("#productsLink a").addEventListener("click", productsCurrent)
aContactHolder = document.querySelector("#contactsLink")
document.querySelector("#contactsLink a").addEventListener("click", contactsCurrent)

function homeCurrent(){
	aHomeHolder.classList.add("current")
	aProductsHolder.classList.remove("current")
	aContactHolder.classList.remove("current")
}
function productsCurrent(){
	aHomeHolder.classList.remove("current")
	aProductsHolder.classList.add("current")
	aContactHolder.classList.remove("current")
}
function contactsCurrent(){
	aHomeHolder.classList.remove("current")
	aProductsHolder.classList.remove("current")
	aContactHolder.classList.add("current")
}
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);