function changeImage(src, element) {
    document.getElementById('mainImage').src = src;

    // Remove the 'selected' class from all thumbnails
    var thumbnails = document.querySelectorAll('.thumbnail-image .item');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked thumbnail
    element.classList.add('selected');
}

// Set initial active image
window.onload = function() {
    document.querySelector('.thumbnail-image .item:first-child').classList.add('selected');
};


// function showTab(tabId) {
//     // Hide all tabs
//     var tabs = document.querySelectorAll('.product-about');
//     tabs.forEach(function(tab) {
//         tab.classList.add('hide');
//         tab.classList.remove('active');
//     });

//     // Show the selected tab
//     var selectedTab = document.getElementById(tabId);
//     selectedTab.classList.remove('hide');
//     selectedTab.classList.add('active');
// }


function showTab(tabId) {

    var tabs = document.querySelectorAll('.product-about');
    tabs.forEach(function(tab) {
        tab.classList.add('hide');
        tab.classList.remove('active');
    });

    var tabHeaders = document.querySelectorAll('.wrapper li');
    tabHeaders.forEach(function(header) {
        header.classList.remove('active-tab');
    });

    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.remove('hide');
    selectedTab.classList.add('active');


    var selectedTabHeader = document.getElementById('tab-' + tabId);
    selectedTabHeader.classList.add('active-tab');
}