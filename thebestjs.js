/**
* Wanna know what year it is? Now's your chance.
* @returns The current year. Is it a string? Is it an int? Ask the geniuses that invented Javascript.
*/
function getCurrentYear() {
    return new Date().getFullYear();
}

/**
 * Finally, an easy way to attribute your work to me. Use liberally.
 * @returns {void} Everytime.
 */
function setCopyright() {
    document.getElementById("copyright").textContent = `©${getCurrentYear()} Waffqle`
}



/**
* Using lines to differentiate sections in a long running webpage is good design. So I'm gonna do it.
*/
function addHRules() {
    // Find all those HR tags.
    var hrs = document.querySelectorAll("hr");

    // Add the horizontal rules
    hrs.forEach(function (rule) {
        rule.insertAdjacentElement("afterend", document.createElement("hr"));
    })

    // Don't forget to remove the obsolete tags!
    hrs.forEach(function (hr) {
        hr.remove();
    })
}

/**
* A good application should have analytics.
*/
function doAnalytics() {
    enjoymentDuration += 10;
    console.log(`You've been enjoying this site for ${enjoymentDuration} seconds.`);

    if(enjoymentDuration==120)
        alert("I'm so happy you're enjoying my website!");
}
var enjoymentDuration = 0;

setInterval(doAnalytics, 10000);