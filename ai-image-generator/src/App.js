import './App.css';
import openaiapiservice from './Services/OpenAIAPIService';
import { PaperStyles } from './styles/Styles';
import PaperTest from './components/Paper';
import { HeaderStyles } from './styles/Styles';
import Header from './components/Header';
import { TextField } from '@mui/material';

function App() {
    async function onSubmit(e) {
        e.preventDefault();

        // document.querySelector('.msg'),textContent = '';

        const prompt = document.querySelector('#prompt').value;
        const size = document.querySelector('#size').value;

        if (prompt === '') {
            alert('Please add some text.');
            return;
        }

        const result = await openaiapiservice.aiImage(prompt, size);
        document.querySelector('#image').src = result;
    }
    return (
        <div className="App">
            <Header sx={HeaderStyles} />
            <PaperTest />

        </div>
    );
}

export default App;
