export const customLocation = (id, location) =>{
    let addPathData = location.pathname.split()
    let data = addPathData[0].split("/")
    let currentLocation = data[id];
    return Number(currentLocation);
} 