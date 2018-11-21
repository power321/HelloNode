var cars = ["123", 11, {cx:"shaman"}];

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
}

for (const key in cars) {
    if (cars.hasOwnProperty(key)) {
        const element = cars[key];
        console.log(element);
    }
}