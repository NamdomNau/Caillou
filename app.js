// Select the draggable item
const draggableItem = document.querySelector('#draggable');

// Original position
let originalX, originalY;

// Mouse event handlers
draggableItem.addEventListener('mousedown', function(e) {
    // Record the original position
    originalX = this.offsetLeft;
    originalY = this.offsetTop;

    // Calculate the mouse position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Function to move the item
    function mouseMoveHandler(e) {
        let dx = e.clientX - mouseX;
        let dy = e.clientY - mouseY;
        draggableItem.style.left = originalX + dx + 'px';
        draggableItem.style.top = originalY + dy + 'px';
    }

    // Attach the mousemove handler
    document.addEventListener('mousemove', mouseMoveHandler);

    // Mouseup handler to stop dragging
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        // Return to original position
        draggableItem.style.left = originalX + 'px';
        draggableItem.style.top = originalY + 'px';
    }, { once: true });
});
