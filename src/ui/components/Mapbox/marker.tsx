import * as React from "react";
import * as MapboxGL from "mapbox-gl";

interface MarkerProps {
  map?: MapboxGL.Map;
  anchor: MapboxGL.Anchor;
  offset?: MapboxGL.PointLike;
  position: MapboxGL.LngLatLike;
  icon: { url: string; width: number; height: number };
}

interface MarkerState {
  readonly marker: MapboxGL.Marker | null;
}

export default class Marker extends React.PureComponent<
  MarkerProps,
  MarkerState
> {
  constructor(props: MarkerProps) {
    super(props);
  }

  readonly state: MarkerState = {
    marker: null
  };

  componentWillReceiveProps() {
    this.configMarker();
  }

  componentDidMount() {
    this.configMarker();
  }
  configMarker() {
    if (this.state.marker) {
      this.state.marker.remove();
    }
    const { map, anchor, offset, position, icon } = this.props;

    const element: HTMLDivElement = document.createElement("div");
    element.style.backgroundImage = `url(${icon.url})`;
    element.style.width = `${icon.width}px`;
    element.style.height = `${icon.height}px`;
    element.style.backgroundSize = "100%";

    const marker: MapboxGL.Marker = new MapboxGL.Marker({
      element,
      offset,
      anchor
    });

    marker.setLngLat(position).addTo(map);
    this.setState({
      marker
    });
  }

  componentWillUnmount() {
    const { marker } = this.state;

    if (marker !== null) {
      marker.remove();
    }
  }

  render(): null {
    return null;
  }
}
