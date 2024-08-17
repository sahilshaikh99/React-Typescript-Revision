// import Box from "./components/box"
import { useState } from "react"

interface val {
  uname: string,
  pin: number
}

function App() {

  const [data, setData] = useState<val>({uname: "", pin: 0});
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username is"+ data.uname);
    console.log("Pin is:"+ data.pin);
    
}
  return (
    <>
      {/* <Box greet={(a: string)=>{alert(a)}} title={"Hello from React Typescript"}>
        {<h2>This is Children</h2>}
      </Box> */}
        <center>
        <h1>User Form</h1>
        <form onSubmit={submitForm}>
            <input type="text" value={data?.uname ? data.uname : ""} placeholder="Enter Name..." onChange={(e)=> setData((prev) => ({...prev!, uname: e.target.value}))}/>
            <input type="number" value={data?.pin ? data.pin : ""} placeholder="Enter Pin..." onChange={(e) => setData((prev) => ({...prev!, pin: Number(e.target.value)}))}/>
            <button type="submit">Submit</button>
        </form>

        <h2>Username: {data?.uname ? data.uname : ""}</h2>
        <h2>Pin: {data?.pin ? data.pin : ""}</h2>
        </center> 
    </>
  )
}

export default App
