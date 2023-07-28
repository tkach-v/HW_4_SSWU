// forbid scrolling
document.documentElement.style.overflow = 'hidden';

function showPageAfterLoading() {
    document.querySelector('.loading').style.display = 'none';
    document.documentElement.style.overflow = '';
}

setTimeout(showPageAfterLoading, 5000);
