const input_file = document.querySelector("#input-file");
var uploaded_file = "";



input_file.addEventListener("change", function () {
    // console.log(input_file.value); // fakepath

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_file = reader.result;
        document.querySelector("#display-img").style.backgroundSize = "230px 230px";
        document.querySelector("#display-img").style.backgroundImage = `url(${uploaded_file})`;
    });
    reader.readAsDataURL(this.files[0]);
})