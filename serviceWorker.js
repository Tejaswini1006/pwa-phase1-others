self.addEventListener("install",function(event){
  event.waitUntil(
    caches.open("version1").then(function(cache){
      return cache.addAll([]);
      // console.log("ssd");
    })
  );
});
self.addEventListener("fetch",function(event){
  event.respondWith(
    caches.match(event.request).then(function(resp){
      return resp || fetch(event.request).time(
        function(response){
          caches.open("version1").then(function(cache){
            return cache.put(event.request,response.clone());
          })
        });
    })
  );
});
