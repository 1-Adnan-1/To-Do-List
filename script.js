//! HTML Gelenler.
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");

// addEventListener bana ne yapmak istediğimi sorar.
addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  // PAragrafa classlist ekledim.
  paragraph.classList.add("paragraph-styling");
  //appendChild ekle ne eklemek istiyosun diyor bana.
  toDoContainer.appendChild(paragraph);
  // Paragarfın içerisine ata.
  paragraph.innerHTML = inputText.value;
  inputText.value = "";
  // Bir kere tıklandığında line-through üzerini çiz.
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    //  dblclick çift tıklandığında sil.
    paragraph.addEventListener("dblclick", function () {
      //removeChild paragrafın içerisindekinisi sil.
      toDoContainer.removeChild(paragraph);
    });
  });
  // clearToDo butonuna dokununca silme fonksiyonu gerçekleştir.
  clearToDo.addEventListener("click", function () {
    // clearToDo tıkladığımda paragrafın içerisindekileri sil.
    paragraph.remove();
  });
});
