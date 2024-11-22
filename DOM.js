function showContent() {
    let content = document.getElementById('content');
    content.style.fontSize = '60px';
    content.style.backgroundColor = 'red';
    content.style.borderRadius = '50%';
    content.style.display = 'block';
}

function showImages(){
    let images=document.getElementById('images');
    images.style.display='block';
    document.getElementById('img1').style.borderRadius='30px';
    document.getElementById('img2').style.borderRadius='100px';
    document.getElementById('img3').style.borderRadius='50%';
}
