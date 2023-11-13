let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "title": "David Hockney",
    "nationality": "United Kindom",
    "born": "9 July 1937",
    "website": "hockney.com",
    "fontcolor": "#ffffff",
    "backcolor": "#e49217",
    "picture_url" : "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQQ1a468uwCyKX8mDPH5ZTD4mc6qHIXqMF_pQL9TXZjKh0x2aAA0eyntTifpM1jD-5gzxZ6137oWgpiLPM"
  },
  {
    "title": "We Two Boys Together Clinging",
    "year": "1961",
    "medium": "Oil paint on canvas",
    "location": "Hayward Gallery, London",
    "fontcolor": "#ffffff",
    "backcolor": "#009f5d",
    "picture_url" : "https://d3d00swyhr67nd.cloudfront.net/w1200h1200/collection/ACC/ACC/ACC_ACC_ACC5_19611.jpg"
  },
  {
    "title": "The Splash",
    "year": "1966",
    "medium": "Acrylic on canvas",
    "location": "Tate Britain, London",
    "fontcolor": "#ffffff",
    "backcolor": "#9d3579",
    "picture_url" : "https://sothebys-com.brightspotcdn.com/dims4/default/92cd506/2147483647/strip/true/crop/4340x4556+0+0/resize/1154x1212!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F43%2F31%2F58d993924c8382c54f2ff3feda54%2Fhockney-corrected-final-l20020-bgtqm-1.jpg"
  },
  {
    "title": "American Collectors",
    "year": "1968",
    "medium": "Acrylic on canvas",
    "location": "The Art Institute of Chicago, Illinois",
    "fontcolor": "#ffffff",
    "backcolor": "#3068b2",
    "picture_url" : "https://www.artic.edu/iiif/2/f95a0a70-90c5-2806-2a66-68f27f8c0735/full/843,/0/default.jpg"
  },
  {
    "title": "Mr and Mrs Clark and Percy",
    "year": "1971",
    "medium": "Acrylic on canvas",
    "location": "Tate Britain, London",
    "fontcolor": "#ffffff",
    "backcolor": "#ed7c80",
    "picture_url" : "https://static.independent.co.uk/s3fs-public/thumbnails/image/2009/10/15/18/251415.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp"
  },
  {
    "title": "Portrait of Sir David Webster",
    "year": "1971",
    "medium": "Acrylic on canvas",
    "location": "Private collection",
    "fontcolor": "#ffffff",
    "backcolor": "#f08525",
    "picture_url" : "https://i.guim.co.uk/img/media/15f96db66118b704b42ba8fe720cf950df981aa5/54_47_1892_1575/master/1892.jpg?width=620&dpr=2&s=none"
  },
  {
    "title": "Portrait of an Artist",
    "year": "1972",
    "medium": "Acrylic on canvas",
    "location": "Private collection",
    "fontcolor": "#ffffff",
    "backcolor": "#7abb61",
    "picture_url" : "https://i.guim.co.uk/img/media/a1e8e192aa04ad6eed00e95728cc5c3904136482/49_45_3913_2738/master/3913.jpg?width=1020&dpr=2&s=none"
  },
  {
    "title": "Shirley Goldfarb + Gregory Masurovsky",
    "year": "1974",
    "medium": "Acrylic on canvas",
    "location": "Museum of Modern Art, San Francisco",
    "fontcolor": "#ffffff",
    "backcolor": "#f2cd02",
    "picture_url" : "https://sfmoma-media-dev.s3.us-west-1.amazonaws.com/www-media/2022/05/02103527/FC.679_10J_HOCKNEY_679R2_NCR-Artsy-JPEG_4000-pixels-long.jpg"
  },
  {
    "title": "My Parents",
    "year": "1977",
    "medium": "Oil paint on canvas",
    "location": "Tate Britain, London",
    "fontcolor": "#ffffff",
    "backcolor": "#c8cdeb",
    "picture_url" : "https://media.tate.org.uk/art/images/work/T/T03/T03255_9.jpg"
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.color = incomingJSON['fontcolor'];
  newContentElement.style.backgroundColor = incomingJSON['backcolor'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentHeading.style.fontWeight = 700; 
  newContentElement.appendChild(newContentHeading);

  if (incomingJSON['year']) {
    let newContentYear = document.createElement("P");
    newContentYear.innerText = "Year: " + incomingJSON['year'];
    newContentElement.appendChild(newContentYear);
    newContentYear.style.fontSize = "1.3rem";
  }

  if (incomingJSON['medium']) {
    let newContentMedium = document.createElement("P");
    newContentMedium.innerText = "Medium: " + incomingJSON['medium'];
    newContentElement.appendChild(newContentMedium);
    newContentMedium.style.fontSize = "1.3rem";
  }

  if (incomingJSON['location']) {
    let newContentLocation = document.createElement("P");
    newContentLocation.innerText = "Location: " + incomingJSON['location'];
    newContentElement.appendChild(newContentLocation);
    newContentLocation.style.fontSize = "1.3rem";
  }

  if (incomingJSON['born']) {
    let newContentBorn = document.createElement("P");
    newContentBorn.innerText = "Born: " + incomingJSON['born'];
    newContentElement.appendChild(newContentBorn);
    newContentBorn.style.fontSize = "1.3rem";
  }

  if (incomingJSON['nationality']) {
    let newContentNationality = document.createElement("P");
    newContentNationality.innerText = "Nationality: " + incomingJSON['nationality'];
    newContentElement.appendChild(newContentNationality);
    newContentNationality.style.fontSize = "1.3rem";
  }

  if (incomingJSON['website']) {
    let newContentWebsite = document.createElement("P");
    let newContentWebstieAddress = document.createElement("a");
    newContentWebstieAddress.innerHTML = "Website: <u>" + incomingJSON['website'] + "</u>";
    newContentWebstieAddress.href = "https://www.hockney.com/home";
    newContentElement.appendChild(newContentWebsite);
    newContentWebsite.appendChild(newContentWebstieAddress);
   // newContentWebstieAddress.style.textDecoration = "underline";
    newContentWebsite.style.fontSize = "1.3rem";
  }

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];

  let newImageFancybox = document.createElement("a");
  newImageFancybox.href = incomingJSON['picture_url'];
  newImageFancybox.setAttribute('data-fancybox', 'gallery');

  newImageFancybox.appendChild(newImage);
  newContentElement.appendChild(newImageFancybox);

  contentGridElement.appendChild(newContentElement);
}


