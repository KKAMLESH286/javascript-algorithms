const textarea = document.getElementById("textarea");
const array = document.getElementById("array");

textarea.addEventListener("input", function () {
  var arrayValues = textarea.value.split(/\n/g);
  array.innerHTML = JSON.stringify(arrayValues);
});

array.addEventListener("click", function () {
  var range = document.createRange();
  var selection = window.getSelection();
  range.selectNodeContents(array);
  selection.removeAllRanges();
  selection.addRange(range);
});