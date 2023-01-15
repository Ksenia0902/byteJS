const container = document.getElementById('container');
const form = document.getElementById('form');
const select = document.getElementById('select');
const input = document.getElementById('id');
const btn = document.getElementById('submit');
const preloader = document.querySelector('.loader');

class Card{
    constructor(options){
        const {name} = options
        this.name = name
        this.card = document.createElement('div');
        this.render()
    }

    render(){
        const removeBtn = document.createElement('button');
        const cardTitle = document.createElement('h4');

        this.card.classList.add('card');
        removeBtn.classList.add('remove-button');
        removeBtn.innerText = 'X';

        cardTitle.innerHTML = this.name;

        removeBtn.addEventListener('click', () => {
            this.remove()
        })

        this.card.append(cardTitle, removeBtn)
    }

    show(){
        container.append(this.card)
    }

    remove(){
        this.card.remove()
    }
}

class PlanetCard extends Card{
    constructor({climate, terrain, population, ...rest}){
        super(rest)

        this.climate = climate;
        this.terrain = terrain;
        this.population = population;

        this.render()
    }

    render(){
        super.render()

        const textClimate = document.createElement('p');
        const textTerrain = document.createElement('p');
        const textPopulation = document.createElement('p');

        textClimate.innerHTML = this.climate;
        textTerrain.innerHTML = this.terrain;
        textPopulation.innerHTML = this.population;

        this.card.append(textClimate, textTerrain, textPopulation)
    }
}

class StarshipCard extends Card{
    constructor({model, manufacturer, max_atmosphering_speed, ...rest}){
        super(rest)

        this.model = model;
        this.manufacturer = manufacturer;
        this.max_atmosphering_speed = max_atmosphering_speed;

        this.render()
    }

    render(){
        super.render()

        const textModel = document.createElement('p');
        const textManufacturer = document.createElement('p');
        const textMax_atmosphering_speed = document.createElement('p');

        textModel.innerHTML = this.model;
        textManufacturer.innerHTML = this.manufacturer;
        textMax_atmosphering_speed.innerHTML = this.max_atmosphering_speed;

        this.card.append(textModel, textManufacturer, textMax_atmosphering_speed)
    }
}

class VehicleCard extends Card{
    constructor({cost_in_credits, crew, passengers, ...rest}){
        super(rest)

        this.cost_in_credits = cost_in_credits;
        this.crew = crew;
        this.passengers = passengers;

        this.render()
    }

    render(){
        super.render()

        const textCost_in_credits = document.createElement('p');
        const textCrew = document.createElement('p');
        const textPassengers = document.createElement('p');

        textCost_in_credits.innerHTML = this.cost_in_credits;
        textCrew.innerHTML = this.crew;
        textPassengers.innerHTML = this.passengers;

        this.card.append(textCost_in_credits, textCrew, textPassengers)
    }
}

class API{
    constructor(){
        this.BASE_URL = 'https://swapi.dev/api'
    }

    handleErrors = async (request) => {
       if (!request.ok) {
        let { error } = await request.json()
        throw new Error(request.status)
    }
       return request
    }

    getSpaceship = async (id) => {
        const starship = await this.sendRequest(`${this.BASE_URL}/starships/${id}`);
        return starship
    }

    getPlanet= async (id) => {
        const planet = await this.sendRequest(`${this.BASE_URL}/planets/${id}`);
        return planet
    }

    getVehicles= async (id) => {
        const vehicle = await this.sendRequest(`${this.BASE_URL}/vehicles/${id}`);
        return vehicle
    }

    sendRequest = async(url) => {
        const response = await this.handleErrors(await fetch(url));
        const res = await response.json();
        return res
    }
}

const api = new API()

const CARD_MAP = {
    starship: StarshipCard,
    planet: PlanetCard,
    vehicle: VehicleCard
}

const API_MAP = {
    starship: api.getSpaceship,
    planet: api.getPlanet,
    vehicle: api.getVehicles
}

const toggleButtonLoading = () => {
    preloader.classList.toggle("hidden");
};


const handleSubmit = async (event) => {
    event.preventDefault()

    toggleButtonLoading()

    const {value : type} = select;
    const {value: id} = input;

    try {
        const item = await API_MAP[type](id);
        const card = new CARD_MAP[type](item);
        if(!id || id === undefined){
            throw new Error(`Please enter id`)
        }
        toggleButtonLoading()
        card.show()
    } catch (error) {
        alert(error.message)
        location.reload()
    }
    
}

form.addEventListener('submit', handleSubmit)