if(navigator.serviceWorker){
	console.log('service worker supported');

	window.addEventListener('load', ()=>{
		navigator.serviceWorker.register('https://vasudevapitta.github.io/restaurant-reviews-app/service-worker.js')
		.then((response)=>{
			console.log('serviceWorker is registered')
		})
		.catch((error)=>{
			console.log(`serviceWorker is NOT registered: ${error}`)
		})
	})
}