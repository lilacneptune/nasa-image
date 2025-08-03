function getnasaimage() {
    const date = document.getElementById("birthdate").value;
    const apiKey = "DYZPuUOEFW1XxQ1lBc06mhf8IFdHGX8UX2Y9v9Hu"
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`


    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        console.log("data", data)
        const resultDiv = document.getElementById("result");

        
        if (data.media_type === "image")
        {
            resultDiv.innerHTML =
           `<h2>${data.title}</h2>
           <img src="${data.url}" alt="NASA IMAGE">
           <p>${data.explanation}</p>`;
        }
        else if (data.media_type === "video")
        {
        resultDiv.innerHTML =`
        <h2>${data.title}</h2>
        <iframe width="100%" height="400" src="${data.url}" frameborder="0" 
        allowfullscreen></iframe>
         `;
        }
        else{
            resultDiv.innerHTML = `<P> oops..no image from NASA for this date </p>`;

        }
    })
    .catch(Error => {
        console.error("error:" , error);
    document.getElementById("result").innerHTML = `<p style="color:red"> oops another error </p> `
        
    });
    
}