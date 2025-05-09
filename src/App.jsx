import Header from "./components/Header";
import Section from "./components/Section";
import OpenLink from "./components/OpenLink";
import CopyLink from "./components/CopyLink";

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
  </div>;
}

export default App;
