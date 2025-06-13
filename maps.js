function initMap() {
    const location = { lat: 6.4616, lng: 100.5033 }; // UUM Coordinates

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
        styles: [
            { featureType: "all", elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
            { featureType: "all", elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#eeeeee" }] },
            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#dadada" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Universiti Utara Malaysia (UUM)",
        animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div class="info-window">
                <h3>UUM</h3>
                <p>Universiti Utara Malaysia, Sintok, Kedah</p>
            </div>
        `
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
