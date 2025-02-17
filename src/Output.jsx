
export default function Output({preview,onDownload}){

    return (
        <div className="flex flex-col items-center text-center">
 {preview && <img src={preview} alt="Playmat Preview" className="max-w-full border" />}
      {preview && (
        <div className=" my-4 flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2" onClick={onDownload}>
            Download
          </button>
          <button className="bg-green-500 text-white px-4 py-2">Order</button>
        </div>
      )}

        </div>
    )



}