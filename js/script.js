const arrow = document.querySelector('svg'),
content = document.querySelector('.card__content'),
contentContainer = document.querySelector('.card__content-container');

if (window.innerWidth <= 618) {
	content.style.display = 'none';
	document.addEventListener('click', e => {
	if (e.target.id == "arrow") {
		if (content.style.display === 'none') {
			content.style.display = 'block';
			arrow.classList.add('up');

		} else {
			content.style.display = 'none';
			arrow.classList.remove('up');
		}
	}
})

} else {
	content.style.display = 'block';
}

function randomThings() {
	const likes = ['stand up comedy', 'jazz', 'Kurt Vonnegut Jr.', 'web development', 'psychology', 'cooking', 'exercising', 'family', 'friends', 'traveling', 'sleeping', 'staying active', 'turtles', 'dogs', 'languages', 'Boston sports', 'cultures', 'eating', 'audio books', 'beer'],
	fillLike = document.querySelector('#like');

	document.addEventListener('click', e => {
		const rando = likes[Math.floor(Math.random()*likes.length)];
		if (e.target.id == 'like') {
			console.log(rando)
			fillLike.innerHTML = rando;
		}
	})
}

randomThings();