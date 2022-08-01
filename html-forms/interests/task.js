const inputExtractor = (element) => element.querySelectorAll('input');
const listOfCheckboxes = inputExtractor(document);

listOfCheckboxes.forEach(checkbox => checkbox.addEventListener('change', function () {
  let checkboxWrapper = this.closest('li.interest');
  for (const child of checkboxWrapper.children) {
    if (child.nodeName === 'UL') {
      let childCheckboxes = inputExtractor(child);
      this.checked === true ? childCheckboxes.forEach(element => element.checked = true) : childCheckboxes.forEach(element => element.checked = false);
    }
  }
}));