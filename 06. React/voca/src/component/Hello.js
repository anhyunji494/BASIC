export default function Hello() {

    function showName(){
        console.log("Jona");
    }
    function showText(e){
        console.log(e.target.value)
    }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button 
        onClick={()=>{
        console.log(26)
      }}>Show age</button>
      <input type="text" onChange={showText} />
    </div>
  );
}

