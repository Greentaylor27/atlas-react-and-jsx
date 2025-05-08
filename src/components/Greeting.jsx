export default function Greeting() {
    const time = new Date().getHours();
    let message = 'Good Night!';
    let img = 'src/assets/night.svg';

    if (time >= 6 && time < 12) {
        message = 'Good Morning!';
        img = 'src/assets/day.svg';
    } else if (time >= 12 && time < 17) {
        message = 'Good Afternoon!';
        img = 'src/assets/day.svg'
    } else if (time >= 17 && time < 21) {
        message = 'Good Evening!';
        img = 'src/assets/evening.svg';
    }

    return (
        <h1 className="greeting">
            <img src={img} />
            {message}
        </h1>
    )
}
