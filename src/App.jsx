import Input from "./Input"

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  };

  
  return (
    <>
     <Input onImageUpload={handleImageUpload} overlay onGenerate onSelectOverlay/> 
    </>
  )
}

export default App
