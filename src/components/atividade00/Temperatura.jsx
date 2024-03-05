
const celsiusParaFahrenheit = (celsius) => celsius * 9 / 5 + 32;

const fahrenheitParaCelsius = (f) => (f - 32) * 5 / 9;

const kelvin = (temp) => { return (
    {
        fahrenheit: celsiusParaFahrenheit(temp - 273.15),
        celsius: fahrenheitParaCelsius((temp - 273.15) * 9/5 + 32)
    }
)}

export default function TimeComponent({temp}) {
    return (
        <div
         style={{
            fontFamily:  'Arial',
            fontSize: '14px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            border: '1px solid #000',
            width: '15rem',
            height: '15rem',
            content: 'center',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
         }}
        >
            <h1 style={{
                margin: '4rem 0rem',
            }}>Temperatura</h1>
            <p>Kelvin: {temp} °K</p>
            <p>Celsius: {kelvin(temp).celsius} °C</p>
            <p>Fahrenheit: {kelvin(temp).fahrenheit} °F</p>
        </div>
    )
}
