// Carlos azaustre
const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Avengers: End Game',
    year: 2019
}
]

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen datos'))
        }   
        setTimeout(() => {
            resolve(datos);
        },1500)
    })
}

async function fetchingData () {
    try {
        const datosFetched = await getDatos ();
        console.log(datosFetched);
    }
    catch (err) {
        console.log(err.message);
    }
}

fetchingData()