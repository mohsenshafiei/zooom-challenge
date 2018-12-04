import * as React from 'react';
import * as MapboxGL from 'mapbox-gl';
import {accessToken} from "mapbox-gl";

interface MapProps {
  center: MapboxGL.LngLat | MapboxGL.LngLatLike;
  zoom: number;
  height: string;
  children?: React.ReactNode;
  onLoad: (map: MapboxGL.Map) => void;
  onMoveStart?: (data: MapboxGL.MapDataEvent) => void;
  onMoveEnd?: (mapCenter: MapboxGL.LngLatLike) => void;
}

interface MapState {
  map: MapboxGL.Map | null;
}

class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
  }

  readonly state: MapState = {
    map: null,
  };

  private container: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const {
      center,
      zoom,
    } = this.props;
    Object.getOwnPropertyDescriptor(MapboxGL, "accessToken").set(process.env.MAPBOX_TOKEN);
    const mapOptions: MapboxGL.MapboxOptions = Object.assign(
      {
      container: (this.container.current) as HTMLDivElement,
      style: 'mapbox://styles/mapbox/streets-v9',
      trackResize: true,
    }, { center, zoom });
    let map: MapboxGL.Map = new MapboxGL.Map(mapOptions);
    map.on('load', () => {
      this.onLoad(map);
    });

    map.on('movestart', (data: MapboxGL.MapDataEvent) => {
      this.onMoveStart(data);
    });

    map.on('moveend', () => {
      const { map } = this.state;

      if (map) {
        this.onMoveEnd(map.getCenter());
      }
    });
  }

  componentWillUnmount() {
    const { map } = this.state;
    if (map) {
      map.remove();
    }
  }

  onLoad(map: MapboxGL.Map) {
    this.setState({
      map,
    });
    const { onLoad } = this.props;
    if (onLoad) onLoad(map);
  }

  onMoveStart(data: MapboxGL.MapDataEvent) {
    const { onMoveStart } = this.props;
    if (onMoveStart) onMoveStart(data);
  }

  onMoveEnd(mapCenter: MapboxGL.LngLatLike) {
    const { onMoveEnd } = this.props;
    if (onMoveEnd) onMoveEnd(mapCenter);
  }

  render() {
    const { map } = this.state;
    const { height, children } = this.props;

    return (
      <div
        ref={this.container}
        className="mapbox"
        style={{ height }}
      >
        {map
        && React.Children.map(children, (child: any) => (
          child && (<child.type {...child.props} map={map} />)
        ))
        }
      </div>
    );
  }
}

export default Map;
