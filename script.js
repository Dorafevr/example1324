function buyProduct() {
    // Получаем выбранный размер из выпадающего списка
    var sizeSelect = document.getElementById("size-select");
    var selectedSize = sizeSelect.value;
    
    // Получаем название товара и цену
    var productName = document.querySelector('.details h2').innerText;
    var productPrice = document.querySelector('.details .price').innerText;
    
    // Проверяем выбранный размер
    if (selectedSize === "S" || selectedSize === "M" || selectedSize === "L") {
        // Запрашиваем подтверждение заказа
        var confirmation = confirm("Вы выбрали размер " + selectedSize + " товара: " + productName + ".\n" + productPrice + "\nХотите оформить заказ?");
        
        // Проверяем результат подтверждения
        if (confirmation) {
            // Заказ подтвержден, выводим сообщение о заказе
            alert("Ваш заказ на товар " + productName + " размера " + selectedSize + " по " + productPrice + " успешно оформлен!");
        } else {
            // Пользователь отменил заказ
            alert("Вы отменили заказ.");
        }
    } else {
        // Некорректный размер
        alert("Некорректный размер. Пожалуйста, выберите размер из списка.");
    }
}
