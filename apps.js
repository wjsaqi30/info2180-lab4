
function showResult() {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost/info2180-lab4/superheroes.php');
    req.addEventListener('load', function() {
    if (req.readyState === 4 && req.status === 200) {
        //document.getElementById('output').textContent = req.responseText;
        const res = req.responseText;
        console.log(res);
        alert(res);
    } else {
        console.log("Request error");
    }
    });
    req.send();
};
