self.addEventListener('message', async (event) => {
    console.log('Got message in the service worker');
});

self.addEventListener('push',(ev)=>{
    const data = ev.data?.json()
      console.log('Push recieved...')
      console.log(data.title,'data')

      self.registration.showNotification('data.title', {
        body : data.body,
        icon: 'favicon.jpg',
        onclick:console.log,
      })
  })
