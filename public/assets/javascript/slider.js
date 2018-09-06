let speed = 0

$(function(){

    var currentValue = $('#currentValue');

    
    
    $('#defaultSlider').change(function(){
        speed = JSON.stringify(currentValue.html(this.value));
        currentValue.html(this.value);
        console.log('speed', speed);
    });

    // Trigger the event on load, so
    // the value field is populated:

    $('#defaultSlider').change();

});