const arrows = document.querySelector('.left-content')


arrows.addEventListener('click', (e) => {
    // Read the classes
    const menuClass = e.target.classList
    //console.log(menuClass)

    // Select the containers
    const container = document.querySelector('.app'),
          leftArrow = document.querySelector('.fa-arrow-left'),
          rightArrow = document.querySelector('.fa-arrow-right')

    // Show or hide the arrows, and then add/remove the no-menu class
    if(menuClass.contains('fa-arrow-left')) {
        container.classList.add('no-menu')

        // Hide the left arrow
        e.target.style.display = 'none'
        // Display the right arrow
        rightArrow.style.display = 'block'
    }
    else if(menuClass.contains('fa-arrow-right')) {
        container.classList.remove('no-menu')

        // Hide the right arrow
        e.target.style.display = 'none'
        // Display the left arrow
        leftArrow.style.display = 'block'
    }
})