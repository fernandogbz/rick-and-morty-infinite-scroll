const requestTarget = document.querySelector('#request-target');
const itemContainer = document.querySelector('#item-container');
const intersectionOptions = {
  threshold: 1
}

let apiUrl = 'https://rickandmortyapi.com/api/character';
let loading = false;

const onIntersect = ([entry]) => {
  if(apiUrl && !loading && entry.isIntersecting)
    makeRequest();
}

let observer = new IntersectionObserver(onIntersect, intersectionOptions);

observer.observe(requestTarget);