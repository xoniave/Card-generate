function generate() {
  let Judul = document.getElementById("titleInput").value;
  let Gambar = document.getElementById("imageInput");
  let Deskripsi = document.getElementById("descriptionInput").value;

  checkFileInput(Judul, Gambar, Deskripsi);

  let reader = new FileReader();
  reader.onload = function (e) {
    let cardAlbum = document.getElementById("cardCollection");

    let card = document.createElement("div");
    card.classList.add("card");

    let gmbr = document.createElement("img");
    gmbr.src = e.target.result;
    gmbr.classList.add("card-gambar");

    let cardJudul = document.createElement("h2");
    cardJudul.textContent = Judul;
    cardJudul.classList.add("card-Judul");

    let cardDeskripsi = document.createElement("p");
    cardDeskripsi.textContent = Deskripsi;
    cardDeskripsi.classList.add("card-desc");

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("Edit");
    btnEdit.onclick = handleEdit;

    //buat edit
    let judulBaru = document.createElement("input");
    judulBaru.type = "text";
    judulBaru.value = cardJudul.textContent;
    judulBaru.classList.add("edit-judul");

    let deskripsiBaru = document.createElement("textarea");
    deskripsiBaru.value = cardDeskripsi.textContent;
    deskripsiBaru.classList.add("edit-deskripsi");

    function handleEdit() {
      card.replaceChild(judulBaru, cardJudul);
      card.replaceChild(deskripsiBaru, cardDeskripsi);

      btnEdit.textContent = "Save";
      btnEdit.onclick = handleSave;
    }

    function handleSave() {
      cardJudul.textContent = judulBaru.value;
      cardDeskripsi.textContent = deskripsiBaru.value;

      card.replaceChild(cardJudul, judulBaru);
      card.replaceChild(cardDeskripsi, deskripsiBaru);

      btnEdit.textContent = "Edit";
      btnEdit.onclick = handleEdit;
    }

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.classList.add("Delete");
    btnDelete.onclick = function () {
      card.remove();
    };

    let kelastombol = document.createElement("div");
    kelastombol.classList.add("tombol");
    kelastombol.appendChild(btnEdit);
    kelastombol.appendChild(btnDelete);

    card.appendChild(cardJudul);
    card.appendChild(gmbr);
    card.appendChild(cardDeskripsi);
    card.appendChild(kelastombol);
    cardAlbum.appendChild(card);
  };

  reader.readAsDataURL(Gambar.files[0]);
}

function checkFileInput(Judul, Gambar, Deskripsi) {
  let filekosong = document.getElementById("notif");

  if (!Gambar.files.length || !Judul || !Deskripsi) {
    filekosong.style.display = "flex";
  } else {
    filekosong.style.display = "none";
  }
}
