import React from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import { Map, Wrapper } from './MapBox.styled'
mapboxgl.accessToken = 'pk.eyJ1IjoiYnVzaGpkbyIsImEiOiJjanl0bnRzdjUwNWw4M21tZGZsNDY4enY3In0.cBXIo7Z8R7qZ0fkiydv9Nw';

class MapBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lng: 105.742830,
            lat: 10.023941,
            zoom: 14
            };
    }

    componentDidMount(){
        let map;
        try {
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/bushjdo/ckautsueo3ndf1ipcu7royd93',
                center: [this.state.lng, this.state.lat],
                zoom: this.state.zoom
            });
        }catch(e){
            console.log('something went wrong with mmap')
        }
        
        // map.on('move', () => {
        //     console.log('Map is moved...')
        //     this.setState({
        //         lng: map.getCenter().lng.toFixed(4),
        //         lat: map.getCenter().lat.toFixed(4),
        //         zoom: map.getZoom().toFixed(2)
        //         });
        //     });
        // mapboxgl.Marker
        const el = document.createElement('div');
        el.className = 'marker';
        new Marker({
            element: el,
            anchor: 'bottom'
        })
        .setLngLat([this.state.lng, this.state.lat])
        .setPopup(
            new mapboxgl.Popup({ offset: 25})
                .setLngLat([this.state.lng, this.state.lat])
                .setHTML(`<h3>Westfoods</h3>`))
        .addTo(map);
    }

    render() {
        return (
            <Wrapper>
                <Map id='map'></Map>
            </Wrapper>
        )
    }
}

export default MapBox;