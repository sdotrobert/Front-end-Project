
// import $ from "jquery";

// open sidebar btn (1)
// const openBtn = document.querySelector("#open-btn");
// const closeBtn = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");

//(1)
// openBtn.onclick = () => {
//     sidebar.style.marginLeft = "0px";
//     openBtn.style.display = 'none';
//     closeBtn.style.display = 'block';
// };

$('#open-btn').click(function () {
    $('#sidebar').css('margin-left', '0px');
    $('#open-btn').css('display', 'none');
    $('#close-btn').css('display', 'block');
});

$('#close-btn').click(function () {
    $('#sidebar').css('margin-left', '-200px');
    $('#close-btn').css('display', 'none');
    $('#open-btn').css('display', 'block');
});


//--------------------------------------------------------------------------------------

// changing profile img
const input_file = document.querySelector("#input-file");
var uploaded_file = "";

input_file.addEventListener("change", function () {
    // console.log(input_file.value); // fakepath

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_file = reader.result;
        document.querySelector("#display-img").style.backgroundSize = "150px 150px";
        document.querySelector("#display-img").style.backgroundImage = `url(${uploaded_file})`;
    });
    reader.readAsDataURL(this.files[0]);
})

//--------------------------------------------------------------------------------------

//switch light to night
var light_switch = document.querySelector("#light-switch");
var night_switch = document.querySelector("#night-switch");
var main_bg = document.querySelector(".container-fluid");
var body = document.querySelector("BODY");

light_switch.onclick = () => {
    light_switch.style.display = 'none';
    night_switch.style.display = 'unset';
    light_switch.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    main_bg.style.backgroundColor = 'white';
    body.style.color = 'black';
}

night_switch.onclick = () => {
    light_switch.style.display = 'unset';
    night_switch.style.display = 'none';
    light_switch.innerHTML = `<i class="fa-solid fa-circle-half-stroke"></i>`;
    main_bg.style.backgroundColor = '#222222';
    body.style.color = 'white';
}

//--------------------------------------------------------------------------------------

//switch visible to invisible
var invisible_switch = document.querySelector("#invisible-switch");
var visible_switch = document.querySelector("#visible-switch");
var number = document.querySelector(".b-num");
var number_innerText = document.querySelector(".b-num").innerText;

invisible_switch.onclick = () => {
    invisible_switch.style.display = 'none';
    visible_switch.style.display = 'unset';
    invisible_switch.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    number.innerText = "***";
}
visible_switch.onclick = () => {
    visible_switch.style.display = 'none';
    invisible_switch.style.display = 'unset';
    visible_switch.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    number.innerText = number_innerText;
}

//--------------------------------------------------------------------------------------

// asset chart
var asset = document.getElementById('assetChart').getContext('2d');
var myChart = new Chart(asset, {
    type: 'pie',
    data: {
        labels: ['NFT1', 'NFT2', 'NFT3', 'NFT4', 'NFT5', 'NFT6'],
        datasets: [{
            label: 'prpportion of NFT1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4

        }]
    },
    options: {
        response: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
                align: "middle",
                padding: {
                    top: 50,
                    bottom: 10
                },
                labels: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

//--------------------------------------------------------------------------------------

// tp top btn
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ---------------------- application form ----------------------

//--------------------------------------------------------------------------------------

$(document).ready(function () {


    // save user updated wallet id in personal info content
    $('#save-wid-btn').click(function verify() {
        var input_wid = document.querySelector('#input-walletid').value;
        const regex = /^0x{1}[a-z\d]{64}$/;
        var valid_walletid;

        if (regex.test(input_wid) == true) {
            alert('Wallet id saved successfully');
            valid_walletid = input_wid;
            console.log(valid_walletid);
            $('#input-walletid')[0].placeholder = valid_walletid;
            // maybe don't use alert use some tooltip or something
        } else if (regex.test(input_wid) == false) {
            alert('Unvalid or empty wallet id entered!');
        };
    });

    // ---------------------- application form ----------------------

    // replacing verification code
    var geneCode = Math.floor(1000 + Math.random() * 9000); //generate new code
    console.log(geneCode);
    var veriCode = document.querySelector("#veri-code");
    console.log(veriCode);
    veriCode.textContent = geneCode;

    var nextBtn1 = $('#s1-nextBtn');
    var nextBtn2 = $('#s2-nextBtn');
    var nextBtn3 = $('#s3-nextBtn');

    var prevBtn2 = $('#s2-prevBtn');
    var prevBtn3 = $('#s3-prevBtn');
    var prevBtn4 = $('#s4-prevBtn');

    var step1 = $('#step-1');
    var step2 = $('#step-2');
    var step3 = $('#step-3');
    var step4 = $('#step-4');

    nextBtn1.on("click", function () {
        step1.css("left", "-570px");
        step2.css("left", "260px");
    })
    prevBtn2.on("click", function () {
        step2.css("left", "1110px");
        step1.css("left", "260px");
    })
    nextBtn2.on("click", function () {
        step2.css("left", "-570px");
        step3.css("left", "260px");
    })
    prevBtn3.on("click", function () {
        step2.css("left", "260px");
        step3.css("left", "1110px");
    })
    nextBtn3.on("click", function () {
        step3.css("left", "-570px");
        step4.css("left", "260px");
    })
    prevBtn3.on("click", function () {
        step2.css("left", "260px");
        step3.css("left", "1110px");
    })
    prevBtn4.on("click", function () {
        step3.css("left", "260px");
        step4.css("left", "1110px");
    })

    nextBtn1.css("pointerEvents", "none");
    // step 1 verification
    $('#veriBtn1').click(function () {

        var senderUsername = document.querySelector('#sender-username').value;
        var senderWallet = document.querySelector('#sender-wid').value;
        // this regex stands for: start with a single '0' along with a 'x', ends up with 64 (a-z)s/numbers
        const regex = /^0x{1}[a-zA-Z\d]{40}$/;

        // Multiplying by 9000 results in a range of [0, 9000).
        // Adding 1000 results in a range of [1000, 10000).
        // Flooring chops off the decimal value to give you an integer(讓結果是整數). Note that it does not round.(四捨五入)
        // var randNum = Math.floor(1000 + Math.random() * 9000);

        // not empty and pass the regex
        if (senderUsername != "" && senderWallet != "") {
            if (regex.test(senderWallet) == true) {
                nextBtn1.css("pointerEvents", "auto");
                alert('Verified.');
            } else if (regex.test(senderWallet) == false) {
                alert('Unvalid wallet id ! Please try again');
            }
        } else {
            alert('User name or wallet id is missing! Next button is disabled');
        }
    });


    nextBtn2.css("pointerEvents", "none");
    // step 2 verification
    $('#veriBtn2').click(function () {

        // var inputStr = input_recipiant_walletid;
        var receiWallet = document.querySelector('#recei-wid').value;
        const regex = /^0x{1}[a-zA-Z\d]{40}$/;
        // this regex stands for: start with a single '0' along with a 'x', ends up with 64 (a-z)s/numbers

        if (receiWallet != "") {
            if (regex.test(receiWallet) == true) {
                nextBtn2.css('pointerEvents', 'auto');
                alert('Wallet Id verified');
            } else if (regex.test(receiWallet) == false) {
                alert('Unvalid wallet id ! Next button is disabled');
            }
        }
        if (receiWallet == "") {
            alert('Missing recipiant wallet id !');
        }
    });

    $('#veriBtn3').click(function () {
        var inputCode = document.querySelector("#veriCode-input").value;
        console.log(inputCode);

        if (inputCode == geneCode) {
            $('#s3-nextBtn').css("pointerEvents", "auto");
            alert('Code verified !');
        } else if (inputCode != geneCode) {
            $('#s3-nextBtn').css("pointerEvents", "none");
            alert('Unvalid code !');
        } else {
            alert('Unmatched content entered !');
        }
    });

    nextBtn3.css("pointerEvents", "none");
    $('#s3-nextBtn').click(function () {

        var s1_senUsername = document.querySelector("#sender-username").value;
        var s1_senWid = document.querySelector("#sender-wid").value;
        var s1_senItem = document.querySelector("#sender-item");
        var s1_selected_item = s1_senItem.options[s1_senItem.selectedIndex].text;
        var s1_senNote = document.querySelector("#sender-notes").value;

        var s2_receiWid = document.querySelector("#recei-wid").value;
        var s2_receiNote = document.querySelector("#recei-notes").value;

        console.log(s1_senUsername, s1_senWid, s1_selected_item, s1_senNote);
        console.log(s2_receiWid, s2_receiNote);

        var s4_sen_username = document.querySelector("#s4-sender-username");
        var s4_sen_wid = document.querySelector("#s4-sender-wid");
        var s4_sen_itemNum = document.querySelector("#s4-sender-itemNum");
        var s4_sen_notes = document.querySelector("#s4-sender-notes");
        console.log(s4_sen_username, s4_sen_wid, s4_sen_itemNum, s4_sen_notes);

        var s4_recei_wid = document.querySelector("#s4-recei-wid");
        var s4_recei_notes = document.querySelector("#s4-recei-notes");
        console.log(s4_recei_wid, s4_recei_notes);

        s4_sen_username.textContent = s1_senUsername;
        s4_sen_wid.textContent = s1_senWid;
        s4_sen_itemNum.textContent = s1_selected_item;
        s4_sen_notes.textContent = s1_senNote;
        console.log(s4_sen_username, s4_sen_wid, s4_sen_itemNum, s4_sen_notes);

        s4_recei_wid.textContent = s2_receiWid;
        s4_recei_notes.textContent = s2_receiNote;
        console.log(s4_recei_wid, s4_recei_notes);
    });
});


// sum up collected data
