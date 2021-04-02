function addForm(event){

    event.preventDefault()
    
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;

    var x=document.createElement('p');
    var y=document.createElement('p');
    var z=document.createElement('p');
    var btnNew=document.createElement('button');
    var newDiv=document.createElement('div');

    var x1=document.createTextNode(name);
    var y1=document.createTextNode(number);
    var z1=document.createTextNode(email);
    var btnNew1=document.createTextNode("button");

    x.appendChild(x1);
    y.appendChild(y1);
    z.appendChild(z1);
    btnNew.appendChild(btnNew1);

    newDiv.appendChild(x);
    newDiv.appendChild(y);
    newDiv.appendChild(z);
    newDiv.appendChild(btnNew);

    newDiv.className="newDesign";
    x.className="pDesign";
    y.className="pDesign";
    z.className="pDesign";
    btnNew.className="bDesign";



    var mainDiv=document.getElementById("newElement");

    mainDiv.appendChild(newDiv)

    var bDesign = document.getElementsByClassName("bDesign");

    for (i = 0; i < bDesign.length; i++) {
        bDesign[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
   




}