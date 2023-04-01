export function navbar() {
  return `<nav>
    <div class="menu-icon">
      <span class="fas fa-bars"></span>
    </div>
    <div class="logo">
      <img style="width: 50px" src="images/rks.png" alt="" />
    </div>

    <div class="nav-items">
      <li><a href="#">Home</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="aboutbraille.html">Rreth Braille</a></li>

      <!-- <li id="cart"><a href="#">Cart</a></li> -->
      <!-- <li><a href="#">Blogs</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li> -->
    </div>
    <div class="search-icon">
      <span class="fas fa-search"></span>
    </div>
    <div class="cancel-icon">
      <span class="fas fa-times"></span>
    </div>
    <form action="#">
      <input
        autocomplete="off"
        id="find"
        type="search"
        class="search-data"
        placeholder="Search products"
        required />
      <button type="submit" class="fas fa-search"></button>
    </form>
    <!-- </nav> -->
    <div class="content"></div>
    <script>
      const menuBtn = document.querySelector(".menu-icon span");
      const searchBtn = document.querySelector(".search-icon");
      const cancelBtn = document.querySelector(".cancel-icon");
      const items = document.querySelector(".nav-items");
      const form = document.querySelector("form");
      menuBtn.onclick = () => {
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      };
      cancelBtn.onclick = () => {
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
      };
      searchBtn.onclick = () => {
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
      };
    </script>
  </nav>`;
}
