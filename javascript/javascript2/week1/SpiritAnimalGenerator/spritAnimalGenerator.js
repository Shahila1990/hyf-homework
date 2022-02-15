let spritAnimalName=['Adventurous Wolf', 'Magical Unicorn','Passionate Leopard','Mystical Tiger','Amazing Butterfly', 'Wild Monkey', 'Speedy Eagle', 'Courageous Dragon','Victorious Dolphin','Creative Dove']


function myFunction(){
    let index = Math.floor(Math.random() * spritAnimalName.length);

    const name = document.getElementById('input').value
    if(name===''){
        alert('Please enter a name')
        return
    }
    document.getElementById('text').innerHTML = name + '- ' + spritAnimalName[index] 
}

const btn = document.getElementById('btn')
// btn.addEventListener('mouseover', myFunction);
//btn.addEventListener('click',myFunction)
//btn.addEventListener('mouseover', myFunction);

var x = document.getElementById('mySelect');
var i = x.selectedIndex;
var selection = x.options[i].text;


    btn.addEventListener('mouseover', myFunction);



    //btn.addEventListener('mouseover', myFunction);

 
