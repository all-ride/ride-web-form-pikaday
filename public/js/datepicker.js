$(function (undefined) {

    if (Pikaday === undefined) {
        console.warn('The Pikaday library was not found.');
        return;
    }

    var defaultConfig = {};

    $('.js-pikaday').each(function (index, dateField) {
        new Pikaday($.extend({ field: dateField }, defaultConfig, $(dateField).data()));
    });
});