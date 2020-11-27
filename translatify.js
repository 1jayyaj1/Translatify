function getTextWidth() { 
    inputText = document.getElementById("header_content").textContent
    font = "16px times new roman"; 

    canvas = document.createElement("canvas"); 
    context = canvas.getContext("2d"); 
    context.font = font;
    
    width = context.measureText(inputText).width; 
    formattedWidth = Math.ceil(width) + "px"; 

    document.querySelector('.output').textContent = formattedWidth; 
} 