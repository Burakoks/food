@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap");

:root {
  --main-color: #e84242;
  --black-color: #0e0e0e;
  --border: 0.1rem solid rgba(255, 255, 255, 0.4);
}

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s ease;
}


html {
  font-size: 62.5%;
  scroll-padding-top: 9rem;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

html::-webkit-scrollbar {
  width: 0.8rem;
  background-color: white;
}

html::-webkit-scrollbar-track {
  background-color: transparent;
}

html::-webkit-scrollbar-thumb {
  border-radius: 3rem;
  background-color: var(--black-color);
}

body {
  background-color: var(--main-color);
  overflow-x: hidden;
}

section {
  padding: 3.5rem 7%;
}

a {
  color: var(--black-color);
  text-decoration: none;
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 2rem 3.75rem;
  border-radius: 30rem;
  font-size: 1.7rem;
  color: #fff;
  background-color: var(--black-color);
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

.heading {
  color: #fff;
  text-transform: uppercase;
  font-size: 4rem;
  margin-bottom: 3.5rem;
  border-bottom: 0.1rem solid #fff;
}

.heading span {
  color: var(--black-color);
  text-transform: uppercase;
}

.search-input {
  font-size: 1.6rem;
  color: var(--black-color);
  padding: 1rem;
  text-transform: none;
  border-radius: 3rem;
}



.header .search-form {
  position: absolute;
  top: 115%;
  right: 7%;
  background-color: #fff;
  width: 50rem;
  height: 5rem;
  display: flex;
  align-items: center;
  border-radius: 3rem;
  box-shadow: 0px 0px 25px 2px rgb(0 0 0 / 75%);
  transform: scaleY(0);
}

.header .search-form.active {
  transform: scaleY(1);
}

.header .search-form i {
  cursor: pointer;
  font-size: 2.2rem;
  margin-right: 1.5rem;
  color: var(--black-color);
}

.header .search-form input {
  width: 100%;
}

.header .logo img {
  height: 10rem;
}

.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
  margin: 2rem 7%;
  border-radius: 30rem;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header .navbar a {
  margin: 0 1rem;
  font-size: 1.6rem;
  color: var(--black-color);
  border-bottom: 0.1rem solid transparent;
}

.header .navbar .active,
.header .navbar a:hover {
  border-color: var(--main-color);
  padding-bottom: 0.5rem;
}

.header .buttons button {
  cursor: pointer;
  font-size: 2.5rem;
  margin-left: 2rem;
  background-color: transparent;
  color: var(--black-color);
}

.header .cart-items-container {
  position: absolute;
  top: 95%;
  height: calc(100vh - 9rem);
  width: 35rem;
  background-color: #fff;
  box-shadow: 0px 20px 14px 0px rgb(0 0 0 / 75%);
  right: -100%;
}

.header .cart-items-container.active {
  right: 3rem;
}

.header .cart-items-container .cart-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
}

.header .cart-items-container .cart-item:hover {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.header .cart-items-container .cart-item .fa-times {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  color: var(--black-color);
}

.header .cart-items-container .cart-item img {
  height: 7rem;
}

.header .cart-items-container .cart-item .content h3 {
  font-size: 2rem;
  color: var(--black-color);
  padding-bottom: 0.5rem;
}

.header .cart-items-container .cart-item .content .price {
  font-size: 1.5rem;
  color: var(--black-color);
}

.header .cart-items-container .btn {
  width: 100%;
  text-align: center;
  border-radius: unset;
}

.header #menu-btn {
  display: none;
}


.home {
  min-height: 100vh;
  background: url(../images/home.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: -14.5rem;
  display: flex;
  align-items: center;
}

.home .content {
  max-width: 60rem;
}

.home .content h3 {
  font-size: 6rem;
  color: #fff;
}

.home .content p {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.8;
  padding: 1rem 0;
  color: #ccc;
}

.menu .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}

.menu .box-container .box {
  padding: 3rem;
  background-color: #fff;
  border-radius: 3rem;
  background-color: #fff;
  min-height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.menu .box-container .box img {
  width: 100%;
  object-fit: cover;
}

.menu .box-container .box .menu-category {
  font-size: 1.2rem;
  text-transform: lowercase;
}

.menu .box-container .box h3 {
  font-size: 3rem;
  padding: 1rem 0;
}

.menu .box-container .box .price {
  font-size: 2.5rem;
  padding: 0.5rem 0;
}

.menu .box-container .box .price span {
  font-size: 1.5rem;
  text-decoration: line-through;
  font-weight: 300;
}


.products .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}

.products .box-container .box {
  text-align: center;
  background-color: #fff;
  position: relative;
  border-radius: 3rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;
}

.products .box-container .box .box-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 10;
}

.products .box-container .box .box-head .title {
  font-size: 1.4rem;
}

.products .box-container .box .box-head .name {
  font-size: 4rem;
  font-weight: bold;
  text-align: start;
  overflow-wrap: anywhere;
}

.products .box-container .dark-bg .box-head .name,
.products .box-container .dark-bg .box-head .title {
  color: #fff;
}

.products .box-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  border-radius: 3rem;
}

.products .box-container .dark-bg img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: unset;
}

.products .box-container .box-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
}

.products .box-container .box-bottom .info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.products .box-container .box-bottom .info .price {
  font-size: 3rem;
}

.products .box-container .box-bottom .info .amount {
  font-size: 1.4rem;
}

.products .box-container .dark-bg .box-bottom .info .price,
.products .box-container .dark-bg .box-bottom .info .amount {
  color: #fff;
}

.products .box-container .box-bottom .product-btn a {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 6.5rem;
  height: 6.5rem;
  border: 0.2rem solid var(--main-color);
}

.products .box-container .box-bottom .product-btn a i {
  font-size: 1.6rem;
  color: var(--main-color);
}


.about .row {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
}

.about .row .image {
  flex: 1 1 45rem;
}

.about .row img {
  width: 100%;
}

.about .row .content {
  flex: 1 1 45rem;
}

.about .row .content h3 {
  font-size: 3rem;
  color: #fff;
}

.about .row .content p {
  font-size: 1.6rem;
  color: #ccc;
  padding: 1rem 0;
  line-height: 1.8;
}


.review .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}

.review .box-container .box {
  border: var(--border);
  text-align: center;
  padding: 3rem 2rem;
  background-color: #fff;
  border-radius: 3rem;
}

.review .box-container .box p {
  font-size: 1.5rem;
  line-height: 1.8;
  padding: 2rem 0;
}

.review .box-container .box .user {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  object-fit: cover;
}

.review .box-container .box h3 {
  padding: 1rem 0;
  font-size: 2rem;
  color: var(--main-color);
}

.review .box-container .box .stars i {
  font-size: 1.5rem;
  color: gold;
}


.contact .row {
  display: flex;
  background-color: var(--black-color);
  flex-wrap: wrap;
  gap: 1rem;
}

.contact .row .map {
  flex: 1 1 45rem;
  width: 100%;
  object-fit: cover;
}
.contact .row form {
  flex: 1 1 45rem;
  padding: 5rem 2rem;
  text-align: center;
}

.contact .row form h3 {
  text-transform: uppercase;
  font-size: 3.5rem;
  color: #fff;
}

.contact .row form .inputBox {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  border: var(--border);
}

.contact .row form .inputBox i {
  color: #fff;
  font-size: 2rem;
  padding-left: 2rem;
}

.contact .row form .inputBox input {
  width: 100%;
  padding: 2rem;
  font-size: 1.7rem;
  color: #fff;
  text-transform: none;
  background-color: transparent;
}

.contact .row form .btn {
  color: var(--main-color);
  background-color: #fff;
  font-weight: bold;
}


.blogs .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 1.5rem;
}

.blogs .box-container .box {
  background-color: #fff;
  border-radius: 3rem;
}

.blogs .box-container .box .image {
  height: 25rem;
  overflow: hidden;
  width: 100%;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
}

.blogs .box-container .box .image img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.blogs .box-container .box:hover .image img {
  transform: scale(1.2);
}

.blogs .box-container .box .content {
  padding: 2rem;
}

.blogs .box-container .box .content .title {
  line-height: 1.5;
  font-size: 2.5rem;
}

.blogs .box-container .box .content span {
  display: block;
  padding-top: 1rem;
  font-size: 2rem;
}

.blogs .box-container .box .content p {
  font-size: 1.6rem;
  line-height: 1.8;
  color: #ccc;
  padding: 1rem 0;
}

.footer {
  background-color: var(--black-color);
  text-align: center;
}

.footer .search {
  display: flex;
  justify-content: center;
}

.footer .search .search-input {
  width: 30rem;
}

.footer .search .btn-primary {
  background-color: var(--main-color);
  padding: 1rem 2rem;
  margin-left: 1rem;
}

.footer .share {
  padding: 2rem 0;
}

.footer .share a {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  color: #fff;
  font-size: 2rem;
  border: var(--border);
  border-radius: 50%;
  margin: 0.3rem;
}

.footer .share a:hover {
  background-color: var(--main-color);
}

.footer .links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer .links a {
  background-color: var(--main-color);
  padding: 0.7rem 2rem;
  color: #fff;
  font-size: 2rem;
  border: var(--border);
}

.footer .links a:hover {
  background-color: var(--black-color);
  opacity: 0.7;
}

.footer .links a.active {
  background-color: var(--black-color);
}

.footer .credit {
  font-size: 2rem;
  color: #fff;
  font-weight: 300;
  padding-top: 1.5rem;
}

.footer .credit span {
  color: var(--main-color);
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }

  .header {
    padding: 1.5rem 2rem;
  }

  .header .logo img {
    height: 7rem;
  }

  section {
    padding: 2rem;
  }

  .products .box-container .box .box-head .name {
    font-size: 3.4rem;
  }
}

@media (max-width: 768px) {
  .header #menu-btn {
    display: inline-block;
  }

  .header .navbar {
    position: absolute;
    top: 95%;
    background-color: #fff;
    height: calc(100vh - 9rem);
    width: 30rem;
    box-shadow: 0px 20px 14px 0px rgb(0 0 0 / 75%);
    right: -100%;
  }

  .header .navbar.active {
    right: 3rem;
  }

  .header .navbar a {
    color: var(--black-color);
    display: block;
    margin: 1.5rem;
    padding: 0.5rem;
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  html {
    font-size: 50%;
  }

  .header .search-form {
    width: 30rem;
  }
}

