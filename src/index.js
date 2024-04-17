document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                dogImageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));

    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            }
        })
        .catch(error => console.error('Error fetching dog breeds:', error));

    // Challenge 3: Change font color when an <li> is clicked
    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change font color to blue
        }
    });

    // Challenge 4: Filter breeds based on selected letter from dropdown
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function () {
        const selectedLetter = breedDropdown.value;
        const lis = dogBreedsList.getElementsByTagName('li');
        for (const li of lis) {
            if (li.textContent.startsWith(selectedLetter)) {
                li.style.display = 'list-item'; // Show the breed
            } else {
                li.style.display = 'none'; // Hide the breed
            }
        }
    });
});
