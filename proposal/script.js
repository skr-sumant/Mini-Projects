const btn2 = document.querySelector(".btn2");

btn2.addEventListener("mouseover", () => {
    const container = document.querySelector(".button-container");
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Generate random positions within the container
    const randomX = Math.floor(Math.random() * (containerWidth - btn2.clientWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - btn2.clientHeight));
    
    // Apply the new position with a smooth transition
    btn2.style.position = "absolute";
    btn2.style.left = `${randomX}px`;
    btn2.style.top = `${randomY}px`;
});


