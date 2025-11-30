/************************************
 * SIDEBAR ET MODE SOMBRE
 ************************************/
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn-menu");
const closeBtn = document.querySelector("#btn-close");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.querySelectorAll("span").forEach(icon => icon.classList.toggle("active"));
});

/************************************
 * MODAL AJOUT
 ************************************/
const addBtn = document.getElementById("btn-add");
const modalAdd = document.getElementById("modal-add");
const closeModal = document.querySelector(".close-modal");
const formAdd = document.getElementById("form-add-transaction");

if (addBtn && modalAdd) {
    addBtn.addEventListener("click", () => {
        modalAdd.style.display = "block";
    });
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modalAdd.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modalAdd) modalAdd.style.display = "none";
});

if (formAdd) {
    formAdd.addEventListener("submit", (e) => {
        e.preventDefault();
        // Ici tu pourras envoyer les données au backend
        alert("Transaction ajoutée ! (backend à connecter)");
        modalAdd.style.display = "none";
        formAdd.reset();
    });
}

/************************************
 * MODAL MODIFIER
 ************************************/
const modalEdit = document.getElementById("modal-edit");
const closeModalEdit = document.querySelector(".close-modal-edit");
const formEdit = document.getElementById("form-edit-transaction");

function openEditModal(transaction) {
    if (!modalEdit) return;
    document.getElementById("edit-id").value = transaction.id;
    document.getElementById("edit-type").value = transaction.type;
    document.getElementById("edit-description").value = transaction.description;
    document.getElementById("edit-category").value = transaction.category;
    document.getElementById("edit-amount").value = transaction.amount;
    document.getElementById("edit-date").value = transaction.date;
    modalEdit.style.display = "block";
}

if (closeModalEdit) {
    closeModalEdit.addEventListener("click", () => {
        modalEdit.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modalEdit) modalEdit.style.display = "none";
});

if (formEdit) {
    formEdit.addEventListener("submit", (e) => {
        e.preventDefault();
        // Ici tu pourras envoyer les données modifiées au backend
        alert("Transaction modifiée ! (backend à connecter)");
        modalEdit.style.display = "none";
    });
}

/************************************
 * BOUTONS MODIFIER / SUPPRIMER DANS LE TABLEAU
 ************************************/
document.querySelectorAll(".btn-edit").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const transaction = {
            id: index, // temporaire, plus tard utiliser l'ID réel du backend
            type: row.querySelector("td:nth-child(3)").textContent.toLowerCase() === "revenu" ? "revenu" : "depense",
            description: row.querySelector("td:nth-child(2)").textContent,
            category: row.querySelector("td:nth-child(3)").textContent,
            amount: row.querySelector("td:nth-child(4)").textContent.replace(/[^\d]/g, ""),
            date: row.querySelector("td:nth-child(1)").textContent
        };
        openEditModal(transaction);
    });
});

document.querySelector("tbody").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        const confirmation = confirm("Voulez-vous vraiment supprimer cette transaction ?");
        if (confirmation) {
            const row = e.target.closest("tr");
            row.remove();
            alert("Transaction supprimée ! (backend à connecter)");
        }
    }
});

