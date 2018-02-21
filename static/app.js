if ('serviceWorker' in navigator) {
    navigator.serviceWorker
              // IMPORTANTE: O diretório passado é relativo
              //  a URL, não ao arquivo app.js
              .register('./service-worker.js')
                .then(function() { console.log('Service Worker registrado ! :)'); })
                .catch(function(e) { console.error(e); });
  }