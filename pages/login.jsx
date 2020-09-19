export default function Login(){
   return (
    <form onSubmit={e=>{e.preventDefault();
    console.log(e.target)        ;
    }}>
     <input type="text" required placeholder="lol"/>
     <input type="text" required placeholder="lol"/>
     <input type="text" required placeholder="lol"/>
     <input type="text" required placeholder="lol"/>
     <input type="text" required placeholder="lol"/>
      <button> LOL </button>
    </form>
   )
   
}