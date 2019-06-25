const HOSTNAME = 'http://localhost:5000';

window.onload = () => {
  console.log('Window loaded!');

  // Note to write results
  const contentNode = document.getElementById('on-load-content');

  // GET
  fetch(HOSTNAME, {
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
  .then(res => res.json())
  .then(data => {
    contentNode.innerHTML = data;
  });

  const postData = { postMsg: 'Hello Post!' };
  // POST
  fetch(HOSTNAME, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => console.log(`POST Response: ${data}`));
}