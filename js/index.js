const myCarouselElement = document.querySelector('#carouselExampleCaptions')
      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
      })
      const myModalEl = document.getElementById('#exampleModal')
      myModalEl.addEventListener('show.bs.modal', event => {
      console.log('El modal se esta mostrando');
      })