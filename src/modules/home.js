const homeFragment = document.createDocumentFragment();

const section = document.createElement('section');
section.classList.add('home');
section.id = 'home';
section.innerHTML = `<div class="home-wrapper">
                        <div class="preview active">
                            <header class="preview-text">
                            <h3>Eatery Cafe &amp; Restaurant</h3>
                            <h1>Our mission is to provide an unforgettable experience</h1>
                            <button class="button">Meet our chef</button>
                            </header>
                        </div>
                        <div class="preview">
                            <header class="preview-text">
                            <h3>Your Perfect Breakfast</h3>
                            <h1>The best dinning quality can be here too!</h1>
                            <button class="button">Discover menu</button>
                            </header>
                        </div>
                        <div class="preview">
                            <header class="preview-text">
                            <h3>New Restaurant in Town</h3>
                            <h1>Enjoy our special menus every Sunday and Friday</h1>
                            <button class="button">Reservation</button>
                            </header>
                        </div>
                        </div>`;
homeFragment.appendChild(section);

export default homeFragment;
