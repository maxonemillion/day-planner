let currentTime = moment().format("dddd, MMMM Do YYYY");
let currentHour = parseInt(moment().format('H'));

$('#currentDay').append(currentTime);
console.log(currentTime);

const sevenAM = $('#sevenAM').text();
const eightAM = $('#eightAM').text();
const nineAM = $('#nineAM').text();
const tenAM = $('#tenAM').text();
const elevenAM = $('#elevenAM').text();
const twelvePM = $('#twelvePM').text();
const onePM = $('#onePM').text();
const twoPM = $('#twoPM').text();
const threePM = $('#threePM').text();
const fourPM = $('#fourPM').text();
const fivePM = $('#fivePM').text();
const sixPM = $('#sixPM').text();
const timeBlock = $(".time-block");


$.each(timeBlock, function (index, block) {

    var dataHour = $(block).data().hour;

    if (dataHour > currentHour) {
        console.log("future");
        $(block).addClass("future");
    }

    if (dataHour < currentHour) {
        console.log("past");
        $(block).addClass("past");
    }

    if (dataHour === currentHour) {
        console.log("current");
        $(block).addClass("present");
    }

});


$('#button7').click(function () {

    if ($('#sevenRes').val() === "") {
        console.log("Nothing", $('#sevenRes').val() + "at 7:00 a.m.");
    } else {
        console.log($('#sevenRes').val() + " at 7:00 a.m.");
    }

    localStorage.setItem(sevenAM, $('#sevenRes').val());

});


$('#button8').click(function () {

    if ($('#eightRes').val() === "") {
        console.log("Nothing", $('#eightRes').val() + "at 8:00 a.m.");
    } else {
        console.log($('#eightRes').val() + " at 8:00 a.m.");
    }

    localStorage.setItem(eightAM, $('#eightRes').val());

});


$('#button9').click(function () {

    if ($('#nineRes').val() === "") {
        console.log("Nothing", $('#nineRes').val() + "at 9:00 a.m.");
    } else {
        console.log($('#nineRes').val() + " at 9:00 a.m.");
    }

    localStorage.setItem(nineAM, $('#nineRes').val());

});


$('#button10').click(function () {

    if ($('#tenRes').val() === "") {
        console.log("Nothing", $('#tenRes').val() + "at 10:00 a.m.");
    } else {
        console.log($('#tenRes').val() + " at 10:00 a.m.");
    }

    localStorage.setItem(tenAM, $('#tenRes').val());

});


$('#button11').click(function () {

    if ($('#elevenRes').val() === "") {
        console.log("Nothing", $('#elevenRes').val() + "at 11:00 a.m.");
    } else {
        console.log($('#elevenRes').val() + " at 11:00 a.m.");
    }

    localStorage.setItem(elevenAM, $('#elevenRes').val());

});


$('#button12').click(function () {

    if ($('#twelveRes').val() === "") {
        console.log("Nothing", $('#twelveRes').val() + "at 12:00 p.m.");
    } else {
        console.log($('#twelveRes').val() + " at 12:00 p.m.");
    }

    localStorage.setItem(twelvePM, $('#twelveRes').val());

});


$('#button1').click(function () {

    if ($('#oneRes').val() === "") {
        console.log("Nothing", $('#oneRes').val() + "at 1:00 p.m.");
    } else {
        console.log($('#oneRes').val() + " at 1:00 p.m.");
    }

    localStorage.setItem(onePM, $('#oneRes').val());
});


$('#button2').click(function () {

    if ($('#twoRes').val() === "") {
        console.log("Nothing", $('#twoRes').val() + "at 2:00 p.m.");
    } else {
        console.log($('#twoRes').val() + " at 2:00 p.m.");
    }

    localStorage.setItem(twoPM, $('#twoRes').val());

});


$('#button3').click(function () {

    if ($('#threeRes').val() === "") {
        console.log("Nothing", $('#threeRes').val() + "at 3:00 p.m.");
    } else {
        console.log($('#threeRes').val() + " at 3:00 p.m.");
    }

    localStorage.setItem(threePM, $('#threeRes').val());

});


$('#button4').click(function () {

    if ($('#fourRes').val() === "") {
        console.log("Nothing", $('#fourRes').val() + "at 4:00 p.m.");
    } else {
        console.log($('#fourRes').val() + " at 4:00 p.m.");
    }

    localStorage.setItem(fourPM, $('#fourRes').val());

});


$('#button5').click(function () {

    if ($('#fiveRes').val() === "") {
        console.log("Nothing", $('#fiveRes').val() + "at 5:00 p.m.");
    } else {
        console.log($('#fiveRes').val() + " at 5:00 p.m.");
    }

    localStorage.setItem(fivePM, $('#fiveRes').val());

});


$('#button6').click(function () {

    if ($('#sixRes').val() === "") {
        console.log("Nothing", $('#sixRes').val() + "at 6:00 p.m.");
    } else {
        console.log($('#sixRes').val() + " at 6:00 p.m.");
    }

    localStorage.setItem(sixPM, $('#sixRes').val());

});