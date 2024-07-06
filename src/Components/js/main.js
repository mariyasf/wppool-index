
document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const btnClose = document.getElementById('btn-close');
    const btnShear = document.getElementById('btn-shear');
    const btnDownload = document.getElementById('btn-download');

    btnMenu.addEventListener('click', function () {
        if (dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.remove('hidden');

            btnShear.classList.add('bg-[#AFCD80]');
            btnDownload.classList.remove('bg-transparent');
            btnDownload.classList.add('bg-[#2042B6]');

        }
        else {
            dropdownMenu.classList.add('hidden');

            btnShear.classList.remove('bg-[#AFCD80]');
            btnDownload.classList.remove('bg-[#2042B6]');
            btnDownload.classList.add('bg-transparent');
        }
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = btnMenu.contains(event.target) || dropdownMenu.contains(event.target);
        if (!isClickInsideMenu) {
            dropdownMenu.classList.add('hidden');
            btnShear.classList.remove('bg-change');
            btnDownload.classList.remove('bg-change');
        }
    });
});
