document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('openBtn');
    var modal = document.getElementById('mymodal');
    var modalContent = document.getElementById('modalContent');
    var cartItems = [];
    var addToCartButton = document.getElementById('addToCartButton');
    

    var products = [
        { name: 'Jbl Black Wireless Headset', price: '$100', description: 'Wireless, No Microphone, Casual' },
        { name: 'Sony Blue ch700 Headphones', price: '$150', description: 'Wireless, Bluetooth-microphone, Water-Resistant' },
        { name: 'Rockerz 551 Headphones', price: '$200', description: 'Wireless, Bluetooth-microphone, Luxurious-Comfort' },
        { name: 'Beats Black Casual Headphones', price: '$100', description: 'Wireless, No Microphone, Bass Only' },
        { name: 'Sprout Invoke Bluetooth Headphones', price: '$150', description: 'Wireless, Bluetooth-microphone, Fashionable' },
        { name: 'QuietComfort 35 II Headphones', price: '$100', description: 'Wireless, No Microphone, Casually Average'},
    ];

    var openBtns = document.querySelectorAll('[data-toggle="modal"]');

    openBtns.forEach(function (openBtn) {
        openBtn.addEventListener('click', function () {
            var productId = parseInt(openBtn.getAttribute('data-productId'));
            updateModalContent(productId);
            modal.setAttribute('data-productId', productId); // Set the product ID on the modal
            $('#mymodal').modal('show');
        });
    });

    addToCartButton.addEventListener('click', function () {
        var productId = parseInt(modal.getAttribute('data-productId'));
        //var modalIndex = parseInt(this.closest('.modal-content').id.replace('modalProduct', ''))
        var selectedProduct = products[productId];

        var modalObject = {
            name: selectedProduct.name,
            price: selectedProduct.price,
            description: selectedProduct.description
        };

        cartItems.push(modalObject);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        $('#mymodal').modal('hide');
    });

    var storedCartItems = localStorage.getItem('cartItems');

    var parsedCartItems = JSON.parse(storedCartItems) || [];

    console.log(parsedCartItems);

    openBtns.forEach(function (openBtn) {
        if (openBtn) {
            openBtn.addEventListener('click', function () {
                var productId = parseInt(openBtn.getAttribute('data-productId'));
                modal.style.display = 'block';
                updateModalContent(productId);
            });
        }
    });
    function openModal(productId) {
        modal.style.display = 'block';
        updateModalContent(productId);
    }

    window.closeModal = function () {
        modal.style.display = 'none';
    };

    if (modal && modalContent) {
        var closeButton = modal.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                modal.style.display = 'none';
            });
        }
    }

    function updateModalContent(productId) {
        var product = products[productId];
        if (modalContent) {
            modalContent.innerHTML = `
            <h2>${product.name}</h2 >
            <p>${product.price}</p>
            <p>${product.description}</p>
       `;
        }
    }
    modal.querySelector('.close').addEventListener('click', function () {
        modal.style.display = 'none';
    });

});