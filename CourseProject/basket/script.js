// function handleFruitChange() {
//     const selectElement = document.getElementById('fruits');
//     const selectedFruit = selectElement.value;
//     alert('Вы выбрали: ' + selectedFruit);
//   }

  document.addEventListener("DOMContentLoaded", function() {
    var filterButton = document.querySelector(".filter_button");
    var filterBlock = document.querySelector(".filter_block");
  
    filterButton.addEventListener("click", function() {
      filterBlock.classList.toggle("show");
  
    });
  });