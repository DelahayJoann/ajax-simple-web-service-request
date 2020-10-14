(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
    document.body.style.fontFamily = "'Sansita Swashed', cursive";

    var domMainTag = document.getElementById('content');
    domMainTag.style.height = "100vh";
    domMainTag.setAttribute('class','row');

    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://thatsthespir.it/api', true);
    xhr.send(null);

    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var quote = JSON.parse(xhr.response).quote;
            var author = JSON.parse(xhr.response).author;
            var photoURL= JSON.parse(xhr.response).photo;
            if(photoURL == '')photoURL = './img/think.png';
            
            var template = document.createElement('blockquote');
            template.setAttribute('id','quote');
            template.setAttribute('cite', JSON.parse(xhr.response).permalink)
            template.setAttribute('class', 'container');
            template.style.margin = 'auto';

            var row1 = document.createElement('div');
            row1.setAttribute('class','row');

            var blockImage = document.createElement('div');
            blockImage.setAttribute('class','offset-1 col-4');

            var img = document.createElement('img');
            img.setAttribute('class','col-6  justify-content-center align-middle');
            img.setAttribute('src',photoURL);
            img.style.display = 'block';
            img.style.maxHeight = "300px";
            img.style.maxWidth = '200px';
            img.style.width = 'auto';
            img.style.height = 'auto';
            img.style.margin = '0px auto';

            blockImage.appendChild(img);

            var p = document.createElement('p');
            p.setAttribute('class','col-6 justify-content-center');
            p.style.margin = 'auto';
            p.style.fontSize = "36px";
            p.style.width = '100%';
            p.style.borderLeft = '3px solid white';
            p.innerHTML = quote;
            

            var footer = document.createElement('p');
            footer.setAttribute('class','col-6  justify-content-center align-middle');
            footer.style.fontSize = '18px';
            footer.style.margin = '0px auto';
            footer.style.color = 'lightblue';
            footer.style.textAlign = 'center';
            footer.style.fontWeight = 'bold';
            footer.innerHTML = author;
            blockImage.appendChild(footer);

            row1.appendChild(blockImage);
            row1.appendChild(p);
            
            template.appendChild(row1);  

            domMainTag.appendChild(template);
        }
    };

})();