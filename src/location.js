import Swal from "sweetalert2";

function createLocation(){
    Swal.fire({
        title: 'Soon Earthlings!',
        background: '#1c1c1c',
        customClass: 'location',
        text: 'Soon opening on Earth!',
        imageUrl: 'Images/2cf30ffdbfa3db621d303e9575ff9e47.gif',
        imageHeight: 100
    })
}

export default createLocation;