import "./App.css";
import { OuterContainer, InnerContainer } from "./components/common/Container";
import Interaction from "./components/common/Interaction";
import Sidebar from "./components/ui/Sidebar";
import Home from "./pages/Home";

function App() {
    return (
        <OuterContainer>
            <Sidebar />
            <InnerContainer>
                <Home />
                <Interaction />
            </InnerContainer>
        </OuterContainer>
    );
}

export default App;
