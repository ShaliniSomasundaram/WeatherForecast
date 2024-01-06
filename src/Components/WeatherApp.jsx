import axios from "axios"
import { useState } from "react"
import style from "./weatherapp.module.css"

const WeatherApp = ()=>{

    let [city,setCity] = useState("")
    let [content,setContent] = useState()
    let API_key = "b811823c4a733dcc732e3ad24a868bfd"

    let load = ()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_key}`)
        .then((e)=>{
            setContent(e.data)
        })
        .catch(()=>{alert("Please Enter The Correct City Name")})
    }

    return(
        <div>
            <article id={style.article}>
                <div>
                    <label htmlFor="cityname"></label>
                    <input type="text" id="cityname" placeholder="      Enter the City Name" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                    <button onClick={load}>Submit</button>
                </div>
            </article>

            <section id={style.display}>
                {content ? (
                    <article>
                        <div>
                            <h1>{content.name}, {content.sys.country}</h1>
                            <h1>{Math.round(content.main.temp)}°</h1>
                            <p>Longitude: {content.coord.lon} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Latitude: {content.coord.lat}</p>
                            <p>Humidity: {content.main.humidity} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pressure: {content.main.pressure}</p>
                            <p>Feels Like: {content.main.feels_like}</p>
                        </div>
                    </article>) : ""
                }       
            </section>
        </div>
    )
}
export default WeatherApp