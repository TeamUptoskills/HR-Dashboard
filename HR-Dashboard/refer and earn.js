document.querySelector('.share-link button').addEventListener('click', () => {
    const link = document.querySelector('.share-link input[type="text"]');
    link.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard');
});
