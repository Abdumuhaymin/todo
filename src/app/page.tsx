"use client";
import { RootState } from "@/redux/store";
import {addData, deletTodo, editTodo} from "@/redux/slices/todo-list";
import {useDispatch, useSelector} from "react-redux";
import { useForm } from "react-hook-form";


interface homeTypes {
  data:any,
}

 const Home: React.FC<homeTypes> = ({data}) => {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const {user} = useSelector((state:RootState) => state.todo);

  const submit = (data:any) => {
    dispatch(addData({...data, id:Date.now()}));
    
    
  }

  return (
    <div className="flex flex-col mt-[20px] justify-center items-center">
      <form className="flex flex-col items-center" onSubmit={handleSubmit(submit)}>
        <input className="w-[200px] mb-[20px] h-[40px] text-center px-[10px]  border-2 outline-none rounded-[20px]" type="text" {...register("input")} />
        <button className="w-[130px] h-[30px] bg-blue-600 rounded-[20px]" type="submit">Submit</button>
      </form>
      <div className="flex flex-col w-[200px] items-center justify-center mt-[20px] gap-[90px]">
      {user?.map((item) => (
       <>
       <div className="flex items-center w-[200px] justify-center gap-[90px]">
       <h2>{item.input}</h2>
        <div className="flex items-center gap-[10px]">
        <button className="w-[100px] bg-red-600 text-white font-bold rounded-[20px] h-[50px] " onClick={() => dispatch(deletTodo(item.id))}>delet</button>
        <button className="w-[100px] bg-red-600 text-white font-bold rounded-[20px] h-[50px] " onClick={() => dispatch(editTodo(item.id))}>edit</button>
        </div>
       </div>
       </>
      ))}
      </div>
    </div>
  );
};


export default Home;
