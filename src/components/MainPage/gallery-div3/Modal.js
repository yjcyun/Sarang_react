import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.

  return (
    <div>
      <Route path="/portfolio" children={<Gallery />} />
      {/* Show the modal when a background page is set */}
      {<Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

const IMAGES = [
  { id: 0, title: "Dark Orchid", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 1, title: "Lime Green", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 2, title: "Tomato", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 3, title: "Seven Ate Nine", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 4, title: "Crimson", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 5, description: "des6", title: "Dark Orchid", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 6, description: "des7", title: "Lime Green", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 7, description: "des8", title: "Tomato", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 8, description: "des9", title: "Seven Ate Nine", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 9, description: "des10", title: "Crimson", imgeUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 10, description: "des11", title: "Lime Green", imgUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 11, description: "des12", title: "Tomato", imgUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 12, description: "des13", title: "Seven Ate Nine", imgUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 13, description: "des14", title: "Crimson", imgUrl: "https://source.unsplash.com/featured/?nature,mountain" },
  { id: 14, imgUrl: "https://source.unsplash.com/featured/?nature,mountain" }
];

// THUMBNAIL
function Thumbnail({ imgUrl }) {
  return (
    <div
      style={{
        width: '100%',
        height: 150
       
      }}
    >
    {imgUrl}
    </div>
  );
}

// IMAGE when clicked on thumbnail
function Image({ imgUrl }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400
      }}
    >{imgUrl}</div>

  );
}


// portfolio in grid
function Gallery() {
  let location = useLocation();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '15px',
        width: '100%',
        margin: '0 auto'
      }}
    >
      {IMAGES.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
            state: { background: location }
          }}
        >
          <Thumbnail imgUrl={i.imgUrl} />

        </Link>
      ))}
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (

    <div
      // onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: '15%',
        bottom: 0,
        right: 0,
        background: "white",
        display: 'grid',
        gridTemplateColumns: 'columns',

      }}
    >
      <Link
        type="button"
        onClick={back}
        style={{
          display: 'grid', justifyContent: 'end',
          paddingRight: '25px',
          paddingTop: '5px',
          fontSize: '3rem'
        }}
      >
        X
      </Link>

      <div
        // className="modal"
        style={{
          background: "#fff",
          padding: '100px'

        }}
      >
        <Image imgUrl={image.imgUrl} />
        <h1>{image.title}</h1>

      </div>
    </div>

  );
}