import React, { Component } from 'react'
import Marker from '../components/Marker'
import GoogleMap from '../components/GoogleMap'
import { fitBounds } from 'google-map-react'
import { StaticQuery, graphql } from 'gatsby'
import { v4 } from 'uuid'
import { Strings } from './../resources'
import { notEqual } from 'assert'
import { get } from 'jquery';

const getGoogleAPIKey = () => {
  const Param_URL = 'https://contact-form.holisticindustries.com/api/site-param/'
  const SITE_ID = 'c8de8bab-4d61-49fa-b745-5e2e53bc83a2'
  // let searchText = this.state.searchText;
  const googleKey = get(
    `${Param_URL}${SITE_ID}`,
    function (response, status) {
      if (status === 'success' && response.googleMapsKey) {
        // console.log("----------------------");
        // console.log(response.googleMapsKey);
        let key = response.googleMapsKey;

        // Map.setState({googleAPIKey : response.googleMapsKey})

        return response.googleMapsKey;
      }
    }
  );
  // console.log("=========");
  // console.log(googleKey);
  return googleKey;
}
class Map extends Component {
  constructor() {
    super()
    this.state = {
      openInfoWindowMarkerId: '',
      defaultProps: {
        center: {
          lat: 42.5003848,
          lng: -72.3400521,
        },
        zoom: 5,
      },
      searchText: '',
      addressList: [],
      filterArray: [],
      showingInfoWindow: false,
      activeMarker: null,
      isLoading: false,
      googleAPIKey: 'AIzaSyCOjzbeKTYBtuEXclADrWvcAepXtQ2XtYM',
      notFoundMessage: Strings.loadingtext,
    }

    this.itemRefs = {}
  }
  

  //change map camera when tap address list
  addressclick = (data) => {
    if (data.storelat != null && data.storelng) {
      var defaultProps = {
        center: {
          lat: parseFloat(data.storelat),
          lng: parseFloat(data.storelng),
        },
        zoom: 15,
      }
      this.setState({
        defaultProps: defaultProps,
        activeMarker: null,
        showingInfoWindow: false,
      })
    }
  }

  //on tap marker

  onMarkerClick = (marker) => {
    if (this.state.activeMarker == marker && this.state.activeMarker) {
      this.onCloseMarker()
    } else {
      var defaultProps = {
        center: {
          lat: parseFloat(marker.storelat),
          lng: parseFloat(marker.storelng),
        },
        zoom: this.state.defaultProps.zoom,
      }
      // this.scrollToIndex(index)
      this.setState({
        activeMarker: marker,
        showingInfoWindow: true,
        defaultProps: defaultProps,
      })
    }
  }

  onCloseMarker = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    })
  }

  bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds)
      })
    })
  }

  getMapBounds = (maps) => {
    const bounds = new maps.LatLngBounds()
    this.state.filterArray.forEach((location) => {
      bounds.extend(new maps.LatLng(location.storelat, location.storelng))
    })
    return bounds
  }

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
    this._map = map
    this._maps = maps
    this.performFitToBound(map, maps)
  }

  performFitToBound = (map, maps) => {
    if (map && this.state.filterArray.length > 0) {
      const bounds = this.getMapBounds(maps)
      map.fitBounds(bounds)
      this.bindResizeListener(map, maps, bounds)
    }
  }

  performNoResultFitToBound = (bounds) => {
    if (this._map && this._maps) {
      const createdBounds = new this._maps.LatLngBounds()
      createdBounds.extend(
        new this._maps.LatLng(bounds.northeast.lat, bounds.northeast.lng)
      )
      createdBounds.extend(
        new this._maps.LatLng(bounds.southwest.lat, bounds.southwest.lng)
      )
      this._map.fitBounds(createdBounds)
      this.bindResizeListener(this._map, this._maps, createdBounds)
    }
  }

  componentDidMount() {
    let array = []

    this.props.data.forEach((element) => {
      if (element.storelat && element.storelng) {
        array.push(element)
      }
    })
    // this.props.data.forEach(element => {
    //     if (element.storelat && element.storelng) {
    //         array.push(element)
    //     }
    // });

    this.setState({ addressList: array, filterArray: array }, () => {
      var searchText = ''
      if (window.history.state && window.history.state.text) {
        searchText = window.history.state.text
      }
      if (searchText) {
        this.searchInArray(searchText)
      }
    })
  }

  onChangeText = (e) => {
    // if (e.target.value && e.target.value.trim()) {
    this.onCloseMarker()
    this.searchInArray(e.target.value)

    // }
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  searchInArray = (text) => {
    let array = this.state.addressList
    let filterArray
    // if (this.state.googleAPIKey === '') {
    //   this.getGoogleAPIKey();
    // }
    if (text && text.toLowerCase()) {
      const textLowerCase = text.toLowerCase()
      filterArray = array.filter((store) => {
        return (
          store.storename.toLowerCase().includes(textLowerCase) ||
          store.storeaddress.toLowerCase().includes(textLowerCase) ||
          store.storecity.toLowerCase().includes(textLowerCase) ||
          store.storestate.toLowerCase().includes(textLowerCase) ||
          store.storezip.toLowerCase().includes(textLowerCase)
        )
      })
      if (filterArray && filterArray.length > 0) {
        this.state.defaultProps = {
          center: {
            lat: parseFloat(filterArray[0].storelat),
            lng: parseFloat(filterArray[0].storelng),
          },
          zoom: 5,
        }
      } else {
        // console.log('nearest store',encodeURI(text.toLowerCase()));
        
        
        // console.log(this.state.googleAPIKey);
        if (this.state.googleAPIKey) {
          this.setState({ isLoading: true })

          fetch(
            'https://maps.googleapis.com/maps/api/geocode/json?address=' +
              encodeURI(text.toLowerCase()) +
              '&sensor=true&key=' +
              this.state.googleAPIKey
          )
            .then((res) => res.json())
            .then((res) => {
              if (res.status === 'OK') {


                let addressComponents = res.results[0].address_components;
                addressComponents.map((data, key) => {
                  var types = data.types;
                  // console.log(types);
                  types.map((type, key) => {
                      if(type == 'administrative_area_level_1') {
                          let state = data.short_name;

                          if (state === 'PA') {
                              this.setState({notFoundMessage: Strings.loadingtextPA});
                          } else if (state === 'MI') {
                              this.setState({notFoundMessage: Strings.loadingtextMI});
                          } else {
                            this.setState({notFoundMessage: Strings.loadingtext});
                          }
                          

                          // return Strings.loadingtext;
                      }
                  });
                });

                let lat = res.results[0].geometry.location.lat // You have obtained latitude coordinate!
                let long = res.results[0].geometry.location.lng // You have obtained longitude coordinate!
                var closest
                var minDif = 41
                //console.log(array.length);
  
                array.forEach((store, index) => {
                  let lat1 = (lat * Math.PI) / 180
                  let lon1 = (long * Math.PI) / 180
                  let lat2 = (store.storelat * Math.PI) / 180
                  let lon2 = (store.storelng * Math.PI) / 180
                  let R = 6371 // km
                  let x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2)
                  let y = lat2 - lat1
                  var dif = Math.sqrt(x * x + y * y) * R
                  if (dif <= minDif) {
                    closest = index
                    minDif = dif
  
                    filterArray.push(array[closest])
                  }
                })
                if (this.state.searchText && this.state.searchText.trim() != '') {
                  this.setState({ filterArray: filterArray })
  
                  if (filterArray.length <= 0) {
                    var defaultProps = {
                      center: {
                        lat: parseFloat(lat),
                        lng: parseFloat(long),
                      },
                      zoom: 15,
                    }
  
                    this.setState({
                      defaultProps: defaultProps,
                      activeMarker: null,
                      showingInfoWindow: false,
                    })
                    setTimeout(() => {
                      const geometryViewPort =
                        res.results[0].geometry.viewport
                      // console.log('geometryViewPort',geometryViewPort);
                      if (geometryViewPort) {
                        // const bounds = {
                        //     ne: geometryViewPort.northeast,
                        //     sw: geometryViewPort.southwest
                        // };
                        // console.log('geometry Bounds',bounds);
                        this.performNoResultFitToBound(geometryViewPort)
                      }
                    }, 500)
                  }
                }
              } else if (res.status === 'ZERO_RESULTS') {
                // console.log('no result')
                // alert('Invalid Address');
              }
              this.setState({ isLoading: false })
            })
        }

      }

      this.setState({ filterArray: filterArray, searchText: text })
    } else {
      this.state.defaultProps.zoom = 5
      this.setState({ filterArray: this.state.addressList, searchText: text })
    }
    setTimeout(() => {
      this.performFitToBound(this._map, this._maps)
    }, 300)
  }

  scrollToIndex = (index) => {
    // this.itemRefs[index].scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' });
  }

  renderItem = (data, index) => {
    return (
      <li key={v4()} ref={(el) => (this.itemRefs[index] = el)}>
        <div onClick={() => this.addressclick(data)}>
          <div className="address">
            <h6 className="store-name-barlow-—-20pt">{data.storename}</h6>
            {/* <a href={'http://www.google.com/maps/place/' + data.storelat + ',' + data.storelng} target="_blank" > */}
            <a
              href={
                'https://www.google.com/maps/place/' +
                ' ' +
                data.storeaddress +
                ' ' +
                data.storecity +
                ' ' +
                data.storestate +
                ' ' +
                data.storezip
              }
              target="_blank"
            >
              <p>{data.storeaddress}</p>
              <p>
                {data.storecity}, {data.storestate} {data.storezip}
              </p>
            </a>
            <p>
              <a href={'tel:' + data.storenumber}>{data.storenumber}</a>
            </p>
            <p>
                {data.license}
              </p>
          </div>
          <div className="store">
            <a href={data.storeurl} target="_blank">
              {Strings.websitetest}
            </a>
          </div>
        </div>
        {/* <div className="store">
                    {
                        data.locationHours ?
                            data.locationHours.map((data, index) => (
                                <div>
                                    {data.text ?
                                        <h6 className="store-name-barlow-—-20pt">Store Hours:</h6>
                                        : null}
                                    <ReactMarkdown key={v4()}>{data.text}</ReactMarkdown>
                                </div>
                            )
                            )
                            : null
                    }
                </div> */}
      </li>
    )
  }

  render() {
    const mapOptions = {
      styles: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5',
            },
          ],
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#f5f5f5',
            },
          ],
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#eeeeee',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff',
            },
          ],
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dadada',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161',
            },
          ],
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#eeeeee',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#c9c9c9',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e',
            },
          ],
        },
      ],
      maxZoom: 18,
    }

    return (
      <section className="find-store-sec">
        <div className="find-left">
          <div className="stickytopstore">
            <h3 className="h3-black-zilla-slab-—-30pt ">
              {Strings.findinstoreheading}
            </h3>
            <p className="sub-text">{Strings.findSubText}</p>
            <form className="frm">
              <div className="input-wrap">
                <label htmlFor="findstore">{Strings.findastorelabel}</label>
                <input
                  value={this.state.searchText}
                  id="findstore"
                  className="fr-input"
                  type="text"
                  placeholder={Strings.getitlabel}
                  onChange={this.onChangeText}
                  onKeyDown={this._handleKeyDown}
                />
              </div>
            </form>
          </div>
          <ul className="find-list">
            {this.state.showingInfoWindow && this.state.activeMarker ? (
              this.renderItem(this.state.activeMarker, 0)
            ) : this.state.filterArray.length > 0 ? (
              this.state.filterArray.map((data, index) =>
                this.renderItem(data, index)
              )
            ) : this.state.isLoading ? (
              <li>
                <h6 className="errortextstyle">{Strings.loading}</h6>
              </li>
            ) : (
              <li>
                <h6 className="errortextstyle">{this.state.notFoundMessage}</h6>
              </li>
            )}
          </ul>
        </div>
        <div className="find-right">
          <StaticQuery
            query={graphql`
              query googlemapkey {
                accessTokens {
                  googleMapsKey
                }
              }
            `}
            render={(data) => (
              // this.state.isLoading ? <p>Loading..</p> :
              <GoogleMap
                bootstrapURLKeys={{ key: data.accessTokens.googleMapsKey }}
                zoom={this.state.defaultProps.zoom}
                maxZoom={5}
                center={this.state.defaultProps.center}
                yesIWantToUseGoogleMapApiInternals
                options={mapOptions}
                onGoogleApiLoaded={({ map, maps }) =>
                  this.handleApiLoaded(map, maps)
                }
              >
                {this.state.filterArray.map((place, index) => (
                  <Marker
                    key={place.storelat + place.storelng + index}
                    text="marker"
                    lat={place.storelat}
                    lng={place.storelng}
                    onClick={() => this.onMarkerClick(place, index)}
                  ></Marker>
                ))}
                {this.state.showingInfoWindow ? (
                  <div
                    className="addressinfopop"
                    key={'activeMarker'}
                    lat={this.state.activeMarker.storelat}
                    lng={this.state.activeMarker.storelng}
                  >
                    <h6 className="store-name-barlow-—-20pt">
                      {this.state.activeMarker.storename}
                    </h6>
                    <p>{this.state.activeMarker.storecity}</p>
                  </div>
                ) : null}
              </GoogleMap>
            )}
          />
        </div>
      </section>
    )
  }
}

export { Map }
