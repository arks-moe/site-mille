const $buttonCopyLink = document.querySelector('button#copy-link');
$buttonCopyLink.addEventListener('click', () => {
  navigator.clipboard.writeText('https://mille.arks-sanctum.com/spreadsheets');
});
