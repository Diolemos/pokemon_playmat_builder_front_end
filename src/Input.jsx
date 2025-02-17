export default function Input(handleImageUpload, overlay, handleGenerate, handleSelectOverlay){





    return (<>
 <input type="file" accept="image/*" onChange={handleImageUpload} />
      <select value={overlay} onChange={(e)=>handleSelectOverlay(e.target.value)}  >
        <option value="black">Black Overlay</option>
        <option value="white">White Overlay</option>
      </select>
      <button className="cursor:pointer bg-gray-500 text-white px-4 py-2" onClick={handleGenerate}>
        Generate
      </button>

    </>)
}