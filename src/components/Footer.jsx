import links from '../assets/links.json'

export default function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.link} target='_blank' rel='noopener noreferrer'>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p>&copy; {year} Atlas School</p>
        </footer>
    )
}
