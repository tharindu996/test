import React,{useState} from 'react';
import { useForm } from 'react-hook-form'


function Up() {

  const [text,setText] = useState("")
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append("picture", data.picture[0])
    //formData.append("title", data.title)

    const res = await fetch("http://localhost:4011/pdf", {
      method: "POST",
      body: formData
    }).then(res => res.json())
    alert(JSON.stringify(res))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} type="file" name="picture" />
     
      <button>Submit</button>
    </form>
  );
}

export default Up;