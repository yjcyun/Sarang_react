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
  { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
  { id: 1, title: "Lime Green", color: "LimeGreen" },
  { id: 2, title: "Tomato", color: "Tomato" },
  { id: 3, title: "Seven Ate Nine", color: "#789" },
  { id: 4, title: "Crimson", color: "Crimson" },
  { id: 5, description: "des6", title: "Dark Orchid", color: "DarkOrchid" },
  { id: 6, description: "des7", title: "Lime Green", color: "LimeGreen" },
  { id: 7, description: "des8", title: "Tomato", color: "Tomato" },
  { id: 8, description: "des9", title: "Seven Ate Nine", color: "#789" },
  { id: 9, description: "des10", title: "Crimson", color: "Crimson" },
  { id: 10, description: "des11", title: "Lime Green", color: "LimeGreen" },
  { id: 11, description: "des12", title: "Tomato", color: "Tomato" },
  { id: 12, description: "des13", title: "Seven Ate Nine", color: "#789" },
  { id: 13, description: "des14", title: "Crimson", color: "Crimson" }
];

function Thumbnail({ color }) {
  return (
    <div
      style={{
        width: '100%',
        height: 150,
        background: color
      }}
    />
  );
}

function Image({ color }) {
  return (


    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    ></div>

  );
}



function Gallery() {
  let location = useLocation();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '15px',
        maxWidth: '1000px',
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
          <Thumbnail color={i.color} />

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
        display:'grid', justifyContent:'end',
        paddingRight:'25px',
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
        <Image color={image.color} />
        <h1>{image.title}</h1>

      </div>
    </div>

  );
}