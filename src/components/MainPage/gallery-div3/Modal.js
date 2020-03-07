import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import Thumbnail from './Thumbnail';
import OpenThumbnail from './OpenThumbnail';


export default class ModalGalleryExample extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log(this.props.filterCategory)
  // }

  render() {
    return (
      <Router>
        <ModalSwitch filterCategory={this.props.filterCategory} />
      </Router>
    );
  }
}

const ModalSwitch = ({ filterCategory }) => {
  return (
    <div>
      <Route path="/portfolio" children={<Gallery
        filterCategory={filterCategory}

      />} />

      {<Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

const IMAGES = [
  {
    id: 1, category: ['ui-ux'],
    imgUrl: "https://source.unsplash.com/random?sig=124"
  },
  {
    id: 0, category: ['graphic-design'],
    imgUrl: "https://source.unsplash.com/random?sig=123"
  },
  {
    id: 2, category: ['graphic-design'],
    imgUrl: "https://source.unsplash.com/random?sig=125"
  },
  {
    id: 3, category: ['graphic-design'],
    imgUrl: "https://source.unsplash.com/random?sig=126"
  },
  {
    id: 4, category: ['ui-ux'],
    imgUrl: "https://source.unsplash.com/random?sig=127"
  },
  {
    id: 5, category: ['ui-ux'],
    imgUrl: "https://source.unsplash.com/random?sig=128"
  },
  {
    id: 6, category: ['personal'],
    imgUrl: "https://source.unsplash.com/random?sig=129"
  },
  {
    id: 7, category: ['sketchbook'],
    imgUrl: "https://source.unsplash.com/random?sig=130"
  },
  {
    id: 8, category: ['personal'],
    imgUrl: "https://source.unsplash.com/random?sig=131"
  },
  {
    id: 9, category: ['ui-ux'],
    imgUrl: "https://source.unsplash.com/random?sig=132"
  },
  {
    id: 10, category: ['ui-ux'],
    imgUrl: "https://source.unsplash.com/random?sig=5"
  },
  {
    id: 11, category: ['personal'],
    imgUrl: "https://source.unsplash.com/random?sig=4"
  },
  {
    id: 12, category: ['medium'],
    imgUrl: "https://source.unsplash.com/random?sig=3"
  },
  {
    id: 13, category: ['medium'],
    imgUrl: "https://source.unsplash.com/random?sig=2"
  },
  {
    id: 14, category: ['medium'],
    imgUrl: "https://source.unsplash.com/random?sig=1"
  }
];



// IMAGE when clicked on thumbnail



// portfolio in grid
function Gallery({ filterCategory }) {
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
      {IMAGES.filter(element => {
        if (filterCategory === 'all') {
          return true;
        }
        return element.category.includes(filterCategory)
      }).map(i => (
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
        gridTemplateColumns: 'columns'
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
        <OpenThumbnail imgUrl={image.imgUrl} />
        <h1>{image.title}</h1>

      </div>
    </div>

  );
}