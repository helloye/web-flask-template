window.onload = () => {
  console.log('Window loaded!');
  const contentNode = document.getElementById('on-load-content');
  fetch('http://localhost:5000', {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
    .then(res => res.json())
    .then(data => {
      contentNode.innerHTML = data;
    });
}