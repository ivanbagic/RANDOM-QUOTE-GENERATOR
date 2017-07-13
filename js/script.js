// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var body = document.getElementById('body');
var quoteBox = document.getElementById('quote-box');
var quote = document.querySelector('.quote');
var source = document.querySelector('.source');
var citation = document.querySelector('.citation');
var year = document.querySelector('.year');
var print;

// this is array of JavaScript objects which contains the data for quotes
var quotes = [
	{ 
		quote: 'Patience is a key element of success.', 
		source: 'Bill Gates',
		citation: 'Famous quotes',
		year: '2001'
	},
	{ 
		quote: 'In order to succeed, your desire for success should be greater than your fear of failure.',
		source: 'Bill Cosby',
		citation: '',
		year: ''
	},
	{ 
		quote: 'It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.',
		source: 'Charles Darwin',
		citation: '',
		year: ''
	},
	{ 
		quote: 'To truly laugh, you must be able to take your pain, and play with it.',
		source: 'Charlie Chaplin',
		citation: '',
		year: ''
	},
	{ 
		quote: 'Stand often in the company of dreamers. They believe you can achieve impossible things.',
		source: 'Mary Anne Radmacher',
		citation: '',
		year: ''
	},
	{ 
		quote: 'I drink to make other people more interesting.',
		source: 'Ernest Hemingway',
		citation: '',
		year: ''
	},
	{ 
		quote: 'The greatest happiness is to know the source of unhappiness.',
		source: 'Fyodor Dostoevsky',
		citation: '',
		year: ''
	},
	{ 
		quote: 'Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.',
		source: 'Henry Ford',
		citation: '',
		year: ''
	},
	{ 
		quote: 'Design is not just what it looks like and feels like. Design is how it works.',
		source: 'Steve Jobs',
		citation: '',
		year: ''
	},
	{ 
		quote: 'The only man who never makes mistakes is the man who never does anything.',
		source: 'Theodore Roosevelt',
		citation: '',
		year: ''
	}
];



// this function selects a random quote object from the quotes array and returns the randomly selected quote object
function getRandomQuote() {
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}

// this function generate random rgb color
function randomColorGenerator() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

// this function calls getRandomQuote function and stores it in a variable 
// displays the final HTML string to the page
// calls randomColorGenerator function and randomly change the background color of the page.
function printQuote() {
	var getRandomQuoteCall = getRandomQuote();
	print = '<p class="quote">' + getRandomQuoteCall.quote + '</p>';
	print += '<p class="source">' + getRandomQuoteCall.source;
	//check  if random 'citation' or 'year' is empty, if not add 'citation' or 'year' to the final string 
	if (getRandomQuoteCall.citation !== '') {
		print += '<span class="citation">' + getRandomQuoteCall.citation + '</span>';
	} else {
		print += '';	
	}

	if (getRandomQuoteCall.year !== '') {
		print += '<span class="year">' + getRandomQuoteCall.year +  '</span>' + '</p>';
	} else {
		print += '';
	}
 	quoteBox.innerHTML = print;
 	body.style.backgroundColor = randomColorGenerator();
}



