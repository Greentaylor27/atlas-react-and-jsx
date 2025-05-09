export default function AboutMe({ me, name, spec, trimester }) {
    // Want to work on props a bit more

    return (
        <div className="about-me">
            <img src={me} alt="Taylor Green" />
            <ul>
                <p>{name}</p>
                <p>{spec}</p>
                <p>Trimester: {trimester}</p>
                <p>A language I have fallen in love with is JavaScript and Python. Python for data manipulation and JavaScript for everything else.
                    However I do love Bootstrap for just a down and dirty website.
                </p>
                <p>After school I want to be a back-end dev and be an expert in cyber-security.</p>
                <p>Something I love to do outside of school is play Table Top games like Warhammer and DnD. However I also love reading about those IP. 
                    I also love a good video game every now and then
                </p>
            </ul>
        </div>
    );
}
