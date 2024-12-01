'use strict';

// Helper function to toggle "active" class
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle for mobile
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal elements
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Function to toggle modal
const toggleModal = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Event listener for testimonials to show modal
testimonialsItem.forEach((item) => {
  item.addEventListener("click", () => {
    const avatar = item.querySelector("[data-testimonials-avatar]");
    const title = item.querySelector("[data-testimonials-title]");
    const text = item.querySelector("[data-testimonials-text]");

    modalImg.src = avatar.src;
    modalImg.alt = avatar.alt;
    modalTitle.textContent = title.textContent;
    modalText.textContent = text.textContent;
        // Change text color dynamically
    modalText.style.color = "white";

    toggleModal();
  });
});

// Event listeners for closing the modal
modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle select dropdown
select.addEventListener("click", () => elementToggleFunc(select));

// Event listener for select items
selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterItems(selectedValue);
  });
});

// Filter variables
const filterItemsList = document.querySelectorAll("[data-filter-item]");

// Filter function
const filterItems = (selectedValue) => {
  filterItemsList.forEach((item) => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Filter buttons for large screens
let lastClickedBtn = filterBtn[0];
filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;

    filterItems(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/disable form button based on validation
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Event listener for navigation links
navigationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    const targetPage = link.textContent.trim().toLowerCase();  // Trim and compare lowercase text content

    // Remove active class from all pages and navigation links
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((navLink) => navLink.classList.remove("active"));

    // Add active class to the corresponding page and navigation link
    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      }
    });
    link.classList.add("active");

    // Scroll to top after navigation
    window.scrollTo(0, 0);
  });
});
