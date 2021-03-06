const createCard = (photo, name, component) => {
  const div = document.createElement("div");
  div.setAttribute("class", "col-lg-3");
  div.classList.add("col-md-6");
  div.classList.add("portfolio-item");
  if (name === "Team's Snap") {
    div.classList.add("filter-card");
  } else if (name === "Speaker's Snap") {
    div.classList.add("filter-app");
  } else {
    div.classList.add("filter-web");
  }
  //   div.setAttribute("data-aos", "fade-up");

  const body = document.querySelector(component);
  body.append(div);

  const image = document.createElement("img");
  div.append(image);
  image.setAttribute("class", "img-fluid");

  const info = document.createElement("div");
  info.setAttribute("class", "portfolio-info");
  div.append(info);

  const title = document.createElement("h4");
  info.append(title);
  title.innerHTML = name;

  const link = document.createElement("a");
  info.append(link);
  link.setAttribute("class", "venobox");
  link.classList.add("preview-link");
  link.setAttribute("data-gall", "portfolioGallery");
  link.setAttribute("href", photo);
  link.setAttribute("title", name);

  const button = document.createElement("i");
  button.setAttribute("class", "bx bx-plus");
  link.append(button);

  image.setAttribute("src", photo);
};

// createCard("D:/Arpit/Code/tedX-frontend/assets/img/TEDxpressions[DoPy]%20(30).jpg", "Speaker's Snap", ".portfolio-container");

const getPhotos = () => {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://tedxbackend.herokuapp.com/api/albums"
    )
    .then((response) => {
      for (let index = 0; index < response.data.data.length; index++) {
        let photos = response.data.data[0].imageURL;
        console.log(response);
        let category = response.data.data[0].name;
        photos.forEach((element) => {
          createCard(element, category, ".portfolio-container");
        });
        document
          .querySelector(".loader")
          .setAttribute("style", "display : none");
      }
    });
};

getPhotos();
