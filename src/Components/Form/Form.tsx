import { useState } from "react";

function Form() {
  
    interface User {
    name: string; 
    age: number;
    email?:string;
  }

  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<User>({
    name: "",
    age: 0,
    email:""
  });

  // Note e.target.value is string and I want number must change it

  const handleChange = <K extends keyof User>(key: K, value: User[K]) => {
    setFormData( prev => ({
        ...prev,
        [key] : value
    }))
  }

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

  }

  return (
    <div className="min-h-screen w-full">
      <button
        onClick={handleClick}
        className="bg-blue-500 border border-black text-white text-xl rounded-xl px-3 py-2"
      >
        Menu
      </button>
      { showForm && (
        <form onSubmit={handleSubmit} className="flex items-center flex-col gap-y-2 bg-gray-100 max-w-sm rounded-xl py-4 mx-auto">
            <div className="p-2 bg-green-100 rounded-xl">
                <label
                    htmlFor="name"
                    className="px-2 text font-bold border-0 "
                >
                Name: 
                </label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        handleChange("name", e.target.value)
                     }
                    placeholder="Enter your name"
                    className="focus:outline-none bg-white rounded-sm p-2"

                />
            </div>
            
            <div className="p-2 bg-green-100 rounded-xl">
                <label
                    htmlFor="age"
                    className="font-bold w-full "
                >
                    Age :
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    placeholder="Enter Your age"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange("age", Number(e.target.value))
                    }
                    className="px-2 focus:outline-none bg-white p-2 mx-2 rounded-sm"
                    
                />
            </div>
            <div className="p-2 bg-green-100 rounded-xl">
                <label
                    htmlFor="email"
                    className="font-bold "
                >
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                        handleChange("email", e.target.value)
                    }
                    placeholder="Enter Your email"
                    className="px-2 focus:outline-none bg-white rounded-sm mx-2 p-2"
                />
            </div>
            <div>
              <button type="submit" className="border-0 border-blue-500 bg-blue-700 text-white p-2 rounded font-bold cursor-pointer">Submit</button>
            </div>
        
        </form>
      )}
    </div>
  );
}

export default Form;
