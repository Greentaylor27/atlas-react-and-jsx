import open from '../assets/open.svg';

export default function OpenLink({ link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer'}}>
            <img src={open} alt="Open Link" />
        </a>
    );
}
