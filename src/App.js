import { MultiSelect } from "./MultiSelect";
import { SingleSelect } from "./SingleSelect";

function App() {
   return (
    <div className='bg-zinc-900 h-screen'>
      <div className='mx-auto container relative pt-3'>
        <p className="bg-slate-400 w-1/5 text-white py-2 text-2xl mx-auto text-center rounded-lg">
          Please pick options:
        </p>
        <SingleSelect/>
        <MultiSelect/>
      </div>
    </div>
  );
}

export default App;
