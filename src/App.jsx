import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './CV';
import './App.css';

function App() {

  return (
    <PDFViewer width="794" height="1123" showToolbar={false}>
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
