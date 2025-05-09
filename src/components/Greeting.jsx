import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg'

export default function Greeting() {
    const time = new Date().getHours();
    let message = 'Good Night!';
    let img = night;

    if (time >= 6 && time < 12) {
        message = 'Good Morning!';
        img = day;
    } else if (time >= 12 && time < 17) {
        message = 'Good Afternoon!';
        img = day;
    } else if (time >= 17 && time < 21) {
        message = 'Good Evening!';
        img = evening;
    }

    return (
        <h1 className="greeting">
            <img src={img} alt={message}/>
            {message}
        </h1>
    )
}
