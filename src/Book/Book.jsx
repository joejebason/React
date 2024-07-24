import React, { useEffect, useState } from "react";
import axios from 'axios';

const Book = () =>{

    const [book, setBooks] =useState([] );

    useEffect(() => {
        // axios.get('http://localhost:5000/Books')
        // .then(res =>setBooks(res.data));
        fetchBooks();
      }, []);

      const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/Books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const [newbook, setNewbook]=useState(
        [{title:'',rating:''}]

    )

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewbook((prevNewbook) => ({
          ...prevNewbook,
          [name]: value,
        }));
      };

      

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Books', newbook);
            fetchBooks();
            closeModal();
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

      const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Books/${id}`);
            fetchBooks();
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const [editbook, setEditbook]=useState([
        {id:'',title:'',rating:''}
    ])

    const [newmodel, setNewmodel]=useState(false)
    const openModal = () => setNewmodel(true);
  const closeModal = () => setNewmodel(false);

    const [editmodel, setEditmodel]=useState(false)

    
    return(
        <>
        <div className="2xl:container mx-auto mt-6 ">
            <div className="px-6  dm:px-[3.75rem] 1lg:px-[6.75rem]">
                <p className="text-black font-bold text-[2rem] sm:text-[2.25rem] dm:text-[2.5rem]   leading-[1.875rem] dm:leading-[3.125rem]">Book</p>
            
            <div className="row w-100 border border-black mt-5" >
            <div className="flex items-center justify-start  ">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Books
      </button>
      
      {newmodel && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-1/3">
            <div className="flex justify-end p-2">
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold">Add new Book</h2>
              <form onSubmit={handleSubmit }  className="space-y-4">
              <div>
                <label className="block text-gray-700">Title</label>
                <input  type="text"  name="title" value={newbook.title} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-gray-700">Rating</label>
                <input type="number" name="rating" value={newbook.rating} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="flex justify-end">
                <button type="button"  onClick={closeModal}  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">  Cancel  </button>
                <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded-md" >    Add Book </button>
              </div>
            </form>
    
            </div>
          </div>
        </div>
      )}
    </div>
            {book.map(Book =>(
                    <div className="flex" key={Book.id} >
                        <div className="w-1/4 m-4 " >
                    
                    <p className="text-black font-medium text-[1.25rem] leading-[1.875rem] dm:leading-[3.125rem]" >{Book.id}</p>
                     
                    </div>
                    <div className="w-1/4 m-4 " >
                    
                    <p className="text-black font-medium text-[1.25rem] leading-[1.875rem] dm:leading-[3.125rem]" >{Book.title}</p>
                       
                    </div>
                    <div className="w-1/4 m-4 " >
                        <p className="text-black font-medium text-[1.25rem] leading-[1.875rem] dm:leading-[3.125rem]" >{Book.rating}</p>
                    </div>
                    <div className="w-1/4 m-4 " >
                        <div>
                            <button className="border border-blue-500 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg mx-2" >Edit</button>
                            <button onClick={() => handleDelete(Book.id)} className="border border-red-500 bg-red-500 text-white font-bold px-4 py-2 rounded-lg">Delete</button>
                        
                         </div>   
                    </div>
                    </div>
                    ))}
            </div>
            </div>
        </div>
        </> 
    )
}

export default Book;