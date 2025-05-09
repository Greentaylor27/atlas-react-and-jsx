import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";


function App() {
  return <div className="app">
    <Header />
    <Section title="What is react?">
      React is a JavaScript library for building user interfaces, primarily used for single-page applications where a dynamic and responsive user experience is important.
      It allows developers to create reusable components that manage their own state and can be combined to build complex user interfaces.
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>React uses a component-based structure, which makes it easy to reuse and organize pieces of your UI.</li>
        <li>It's declarative, so instead of telling React how to do things step-by-step, you just describe what you want the UI to look like.</li>
        <li>You can use React to build not just websites, but also mobile apps (with React Native) and even desktop apps. One skill multiple platforms.</li>
        <li>There's a huge ecosystem and community around react, which means tons of tools, libraries, and support are available.</li>
        <li>React is really fast thanks to its virtual DOM - it only updates the parts of the page that actually change.</li>
      </ul>
    </Section>
    <HelpfulResource label="W3School" link="https://www.w3schools.com/react/default.asp"></HelpfulResource>
    <HelpfulResource label="BroCode" link="https://www.youtube.com/watch?v=CgkZ7MvWUAA"></HelpfulResource>
    <HelpfulResource label="React Documentation (Nothing better than the info from the source)" link="https://www.React.dev"></HelpfulResource>
    <AboutMe me="images/Profile_pic.png" name="Taylor Green" spec="Full-Stack Web Dev" trimester="5" />
  </div>;
}

export default App;
